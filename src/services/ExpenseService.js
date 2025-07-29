import axios from "axios";

// console.log('Environment variable:', import.meta.env.VITE_REST_API_URL);
const BASE_REST_API_URL = import.meta.env.VITE_REST_API_URL + '/api/expenses';

export const getAllExpenses = () => axios.get(BASE_REST_API_URL);

export const addExpense = (expense) => axios.post(BASE_REST_API_URL, expense);

export const getExpense = (id) => axios.get(BASE_REST_API_URL + '/' + id);

export const editExpense = (id, expense) => axios.put(BASE_REST_API_URL + '/' + id, expense);

export const deleteExpense = (id) => axios.delete(BASE_REST_API_URL + '/' + id);