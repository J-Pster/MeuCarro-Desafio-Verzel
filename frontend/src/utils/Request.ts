import axios, { AxiosResponse } from "axios";
import { ICarro, ICarroWithId } from "../constants/interfaces/Carro";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const setHeaderBearerToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeHeaderBearerToken = () => {
  delete api.defaults.headers.common.Authorization;
};

export const requestGet = async (
  url: string
): Promise<ICarroWithId[] | null> => {
  try {
    const { data } = await api.get(url);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const requestGetOne = async (
  url: string,
  id: string
): Promise<ICarro | null> => {
  try {
    const { data } = await api.get(`${url}/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const requestPost = async (
  url: string,
  body: any
): Promise<any | null> => {
  try {
    const { data } = await api.post(url, body);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const requestPut = async (
  url: string,
  id: string,
  body: ICarro
): Promise<ICarro | null> => {
  try {
    const { data } = await api.put(`${url}/${id}`, body);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const requestDelete = async (
  url: string,
  id: string
): Promise<AxiosResponse | null> => {
  try {
    const response = await api.delete(`${url}/${id}`);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default api;
