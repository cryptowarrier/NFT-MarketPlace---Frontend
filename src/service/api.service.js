import axios from 'axios';

export const baseUrl = process.env.NODE_ENV === "development" ? process.env.REACT_APP_URL : process.env.REACT_APP_DOMAIN;

export const itemService = {
  createItem: async(payload) => {
    const response = await axios.post(`${baseUrl}items`, payload);
    return response;
  },
  getItems: async(payload) => {
    const response = await axios.get(`${baseUrl}items?category=${payload.category}`);
    return response;
  }
}

export const userApiService = {
  createUser: async(payload) => {
    const response = await axios.post(`${baseUrl}users`, payload);
    return response;
  },
  getUserByWallet: async(payload) => {
    const response = await axios.get(`${baseUrl}users/wallet/${payload}`);
    return response;
  },
  updateUserById: async(payload) => {
    const response = await axios.put(`${baseUrl}users/${payload._id}`, payload);
    return response;
  }
}

export const uploadService = async(payload) => {
  const response = await axios.post(`${baseUrl}upload`, payload);
  return response.data;
}