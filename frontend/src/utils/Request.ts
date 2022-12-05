import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const setHeaderBearerToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeHeaderBearerToken = () => {
  delete api.defaults.headers.common.Authorization;
};

export const requestGet = async (url: string) => {
  try {
    const { data } = await api.get(url);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const requestPost = async (url: string, body: any) => {
  try {
    const { data } = await api.post(url, body);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const requestPut = async (url: string, body: any) => {
  try {
    const { data } = await api.put(url, body);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const requestDelete = async (url: string, id: string) => {
  try {
    const { data } = await api.delete(`${url}/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default api;
