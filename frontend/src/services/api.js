// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 5000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add any auth headers here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || 'An error occurred';
    return Promise.reject({ message });
  }
);

const taskService = {
  getTasks: async () => {
    try {
      return await api.get('/tasks');
    } catch (error) {
      throw error;
    }
  },

  createTask: async (task) => {
    try {
      return await api.post('/tasks', task);
    } catch (error) {
      throw error;
    }
  },

  updateTask: async (id, task) => {
    try {
      return await api.put(`/tasks/${id}`, task);
    } catch (error) {
      throw error;
    }
  },

  deleteTask: async (id) => {
    try {
      return await api.delete(`/tasks/${id}`);
    } catch (error) {
      throw error;
    }
  }
};

export default taskService;