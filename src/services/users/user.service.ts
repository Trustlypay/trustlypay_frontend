import type { IUserDetails } from "../../components/user-details.interface";
import { AxiosX } from "../../utils/axios";

export const userService = {
  login: async (email: string, password: string): Promise<string> => {
    const response = await AxiosX.post(`/auth/login`, {
      email,
      password,
    });
    return response.data;
  },

  apphello: async (): Promise<string> => {
    const response = await AxiosX.get(`/hello`);
    return response.data;
  },

  getCurrentUser: async (): Promise<IUserDetails> => {
    const response = await AxiosX.get(`/auth/current-user`);
    return response.data;
  },
};
