import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTransactionStatus } from "../api/api";

export default function StatusCheck() {
  const [orderId, setOrderId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetchTransactionStatus(orderId);
      setResult(res.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Check Transaction Status</h1>
          <button
            onClick={() => navigate("/transactions")}
            className="text-blue-600 hover:text-blue-800"
          >
            Back to Transactions
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            disabled={!orderId || loading}
            className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
          >
            {loading ? "Checking…" : "Check Status"}
          </button>
        </form>

        {error && <p className="mt-4 text-red-500">{error}</p>}

        {result && (
          <div className="mt-6 bg-gray-50 p-4 rounded">
            <p>
              <strong>Order:</strong> {result.collect_id}
            </p>
            <p>
              <strong>Status:</strong> {result.status}
            </p>
            <p>
              <strong>Amount:</strong> ₹{result.transaction_amount}
            </p>
            <p>
              <strong>Original:</strong> ₹{result.order_amount}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
