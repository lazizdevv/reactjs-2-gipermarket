// useGetProducts.js
import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";
// import axiosInstance from './axiosInstance';

export const useSingleCatalog = (categoryName) => {
  return useQuery({
    queryKey: ["products", categoryName],
    queryFn: () => request.get(`${categoryName}`).then((res) => res.data),
  });
};

// export default useGetProducts;
