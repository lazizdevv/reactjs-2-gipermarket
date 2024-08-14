import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";

export const useGetCalalogs = () => {
  return useQuery({
    queryKey: ["catalog-banners"],
    queryFn: () => request.get("/catalog").then((res) => res.data),
  });
};
