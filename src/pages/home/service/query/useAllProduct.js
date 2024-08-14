import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useAllProduct = () => {
  return useQuery({
    queryKey: ["all-products"],
    queryFn: () => request.get("/all").then((res) => res.data),
  });
};
