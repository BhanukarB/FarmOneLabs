import axios from "axios";

// Get API URL from environment variables
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Use the environment variable here
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
