import { useMutation } from "@tanstack/react-query";
import { userService } from "./user.service";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (variables: {
      email: string;
      password: string;
      onSuccess: (data: string) => void;
    }) => await userService.login(variables.email, variables.password),
    onSuccess: (data, variables) => {
      variables.onSuccess(data);
    },
  });
};
