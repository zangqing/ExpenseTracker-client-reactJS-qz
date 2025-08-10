import axios from "axios";
import { getToken } from "./AuthService";

// console.log('Environment variable:', import.meta.env.VITE_REST_API_URL);
const BASE_REST_API_URL = import.meta.env.VITE_REST_API_URL;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent

    config.headers['Authorization'] = getToken();

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const getAllExpenses = () => axios.get(BASE_REST_API_URL);

export const addExpense = (expense) => axios.post(BASE_REST_API_URL, expense);

export const getExpense = (id) => axios.get(BASE_REST_API_URL + '/' + id);

export const editExpense = (id, expense) => axios.put(BASE_REST_API_URL + '/' + id, expense);

export const deleteExpense = (id) => axios.delete(BASE_REST_API_URL + '/' + id);