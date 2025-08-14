import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { App } from "antd";

const ReactQueryClient = (props: any) => {
  const { message } = App.useApp();

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (e) => {
        console.error("---  queryCache  ---", e);
        message.error(e.message);
      },
    }),
    mutationCache: new MutationCache({
      onError: (e) => {
        console.error("---  mutationCache  ---", e);
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default ReactQueryClient;
