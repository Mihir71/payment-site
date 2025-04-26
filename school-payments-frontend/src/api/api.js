import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: {
    indexes: null, // This will prevent the [] in array parameters
  },
});

// 1) ALWAYS read the token from localStorage on each request
api.interceptors.request.use((cfg) => {
  const token = localStorage.getItem("authToken"); // match your AuthContext key
  if (token) {
    cfg.headers.Authorization = `Bearer ${token}`;
  }
  console.log("Axios request to:", cfg.url, cfg.params, "with token?", !!token);
  return cfg;
});

export const loginApi = (data) => api.post("/auth/login", data);
export const registerApi = (data) => api.post("/auth/register", data);
export const fetchTransactions = (params) =>
  api.get("/transactions", { params });
export const fetchTransactionsBySchool = (schoolId, params) =>
  api.get(`/transactions/school/${schoolId}`, { params });

export const fetchTransactionStatus = (customOrderId) =>
  api.get(`/transaction-status/${customOrderId}`);

export const getTransactionStatus = async (orderId) => {
  return await axios.get(`/transaction-status/${orderId}`);
};

export default api;
