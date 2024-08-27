import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetNotebooks = () => {
  return useQuery({
    queryKey: ["notebooks"],
    queryFn: () => request.get("/notebook").then((res) => res.data),
  });
};
