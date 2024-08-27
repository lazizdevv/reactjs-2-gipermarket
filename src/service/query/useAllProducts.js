import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => request.get("/all").then((res) => res.data),
  });
};

