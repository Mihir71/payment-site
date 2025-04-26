import React, { useEffect, useState, useMemo } from "react";
import { useSearchParams, useNavigate, useParams } from "react-router-dom";
import { fetchTransactions, fetchTransactionsBySchool } from "../api/api";
import Select from "react-select";

const STATUS_OPTIONS = ["success", "pending", "failed"];

export default function TransactionsOverview() {
  const [params, setParams] = useSearchParams();
  const page = parseInt(params.get("page") || "1", 10);
  const limit = parseInt(params.get("limit") || "10", 10);
  const statuses = params.getAll("status");
  const schools = params.getAll("school");
  const sort = params.get("sort") || "payment_time";
  const order = params.get("order") || "desc";
  const dateFrom = params.get("dateFrom") || "";
  const dateTo = params.get("dateTo") || "";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState({});
  const [selectedSchool, setSelectedSchool] = useState("");

  const navigate = useNavigate();
  const { schoolId: routeSchoolId } = useParams ? useParams() : {};

  // Fetch
  useEffect(() => {
    setLoading(true);
    if (selectedSchool) {
      fetchTransactionsBySchool(selectedSchool, { page, limit, sort, order })
        .then((res) => {
          setData(res.data.items);
          setMeta(res.data.meta);
        })
        .finally(() => setLoading(false));
    } else {
      const p = { page, limit, status: statuses, school: schools, sort, order };
      if (dateFrom) p.dateFrom = dateFrom;
      if (dateTo) p.dateTo = dateTo;
      fetchTransactions(p)
        .then((res) => {
          setData(res.data.items);
          setMeta(res.data.meta);
        })
        .finally(() => setLoading(false));
    }
  }, [params.toString(), selectedSchool]);

  // Helpers
  const schoolOptions = useMemo(
    () =>
      Array.from(new Set(data.map((tx) => tx.school_id)))
        .filter(Boolean)
        .map((id) => ({ value: id, label: id })),
    [data]
  );
  const toggleParam = (key, value) => {
    const set = new Set(params.getAll(key));
    set.has(value) ? set.delete(value) : set.add(value);
    const next = new URLSearchParams(params);
    next.delete(key);
    Array.from(set).forEach((v) => next.append(key, v));
    next.set("page", "1");
    setParams(next);
  };
  const onSort = (col) => {
    const nextOrder = sort === col && order === "asc" ? "desc" : "asc";
    const next = new URLSearchParams(params);
    next.set("sort", col);
    next.set("order", nextOrder);
    setParams(next);
  };
  const goPage = (n) => {
    const next = new URLSearchParams(params);
    next.set("page", n);
    setParams(next);
  };
  const getStatusColor = (s) =>
    s === "success"
      ? "bg-green-100 text-green-800"
      : s === "pending"
      ? "bg-yellow-100 text-yellow-800"
      : "bg-red-100 text-red-800";

  const handleSchoolClick = (schoolId) => {
    navigate(`/transactions/school/${schoolId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Transactions Overview
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-gray-600">
              Showing <span className="font-medium">{data.length}</span> of{" "}
              <span className="font-medium">{meta.total || 0}</span>
            </div>
            <button
              onClick={() => navigate("/status-check")}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Check Transaction Status
            </button>
          </div>
        </header>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Total Transactions",
              value: data.length,
              icon: "🧾",
            },
            {
              label: "Total Amount",
              value: `₹${data
                .reduce((sum, tx) => sum + +tx.transaction_amount, 0)
                .toFixed(2)}`,
              icon: "💰",
            },
            {
              label: "Success",
              value: data.filter((tx) => tx.status === "success").length,
              icon: "✅",
            },
            {
              label: "Pending",
              value: data.filter((tx) => tx.status === "pending").length,
              icon: "⏳",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-3xl mr-4">{card.icon}</div>
              <div>
                <div className="text-sm text-gray-500">{card.label}</div>
                <div className="text-2xl font-bold text-gray-900">
                  {card.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters Panel */}
        <section className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Status */}
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <div className="flex flex-wrap gap-2">
                {STATUS_OPTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleParam("status", s)}
                    className={`px-3 py-1 rounded-full border transition ${
                      statuses.includes(s)
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            {/* School */}
            <div>
              <label className="block text-sm font-medium mb-1">School</label>
              <Select
                options={[
                  { value: "", label: "All Schools" },
                  ...schoolOptions,
                ]}
                value={
                  selectedSchool
                    ? { value: selectedSchool, label: selectedSchool }
                    : { value: "", label: "All Schools" }
                }
                onChange={(option) => setSelectedSchool(option.value)}
                isClearable
                placeholder="Select or search school..."
                classNamePrefix="react-select"
              />
            </div>
            {/* Date From */}
            <div>
              <label className="block text-sm font-medium mb-1">From</label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => {
                  setParams((prev) => {
                    const np = new URLSearchParams(prev);
                    np.set("dateFrom", e.target.value);
                    np.set("page", "1");
                    return np;
                  });
                }}
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            {/* Date To */}
            <div>
              <label className="block text-sm font-medium mb-1">To</label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => {
                  setParams((prev) => {
                    const np = new URLSearchParams(prev);
                    np.set("dateTo", e.target.value);
                    np.set("page", "1");
                    return np;
                  });
                }}
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Data Table */}
        <section className="bg-white rounded-lg shadow overflow-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                {[
                  "collect_id",
                  "school_id",
                  "gateway",
                  "order_amount",
                  "transaction_amount",
                  "status",
                  "custom_order_id",
                ].map((col) => (
                  <th
                    key={col}
                    onClick={() => onSort(col)}
                    className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      {col.replace(/_/g, " ")}
                      {sort === col && (
                        <span className="ml-1">
                          {order === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="7" className="p-8 text-center">
                    Loading…
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td colSpan="7" className="p-8 text-center text-gray-500">
                    No transactions found
                  </td>
                </tr>
              ) : (
                data.map((tx) => (
                  <tr
                    key={tx.collect_id}
                    className="hover:bg-gray-50 transition transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <td className="px-4 py-2 text-sm">{tx.collect_id}</td>
                    <td className="px-4 py-2 text-sm">{tx.school_id}</td>
                    <td className="px-4 py-2 text-sm">{tx.gateway}</td>
                    <td className="px-4 py-2 text-sm">₹{tx.order_amount}</td>
                    <td className="px-4 py-2 text-sm">
                      ₹{tx.transaction_amount}
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          tx.status
                        )}`}
                      >
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm">{tx.custom_order_id}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>

        {/* Pagination */}
        <nav className="flex justify-center items-center space-x-4">
          <button
            onClick={() => goPage(page - 1)}
            disabled={page <= 1}
            className="px-4 py-2 bg-white border rounded-md text-gray-600 disabled:opacity-50 hover:bg-gray-50"
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page <span className="font-semibold">{page}</span> of{" "}
            <span className="font-semibold">{meta.totalPages || 1}</span>
          </span>
          <button
            onClick={() => goPage(page + 1)}
            disabled={page >= (meta.totalPages || 1)}
            className="px-4 py-2 bg-white border rounded-md text-gray-600 disabled:opacity-50 hover:bg-gray-50"
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}
