import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

const authInterceptor = (req) => {
  const accessToken = JSON.parse(localStorage.getItem("profile"))?.accessToken;
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
};

const authInterceptorAdmin = (req) => {
  const accessToken = JSON.parse(localStorage.getItem("admin_profile"))?.accessToken;
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
};


export const API = axios.create({ baseURL: BASE_URL });
export const API_ADMIN = axios.create({ baseURL: BASE_URL });

// attach interceptor to auth request *******************
API.interceptors.request.use(authInterceptor);
API.interceptors.request.use((req) => {
  req.headers["Content-Type"] = 'application/json';
  return req;
});

// attach interceptor to admin auth request *******************
API_ADMIN.interceptors.request.use(authInterceptorAdmin);
API_ADMIN.interceptors.request.use((req) => {
  req.headers["Content-Type"] = 'application/json';
  return req;
});

export const handleErrorAPI = async (error) => {
  try {
    const data = error?.response;
    const errorMessage = Object.values(error?.response?.data).flat() || ["Exist an error"];
    const statusCode = error?.response?.status
    return { errors: errorMessage, data, statusCode }
  } catch (error) {
    throw new Error("Exist an error")
  }
}
