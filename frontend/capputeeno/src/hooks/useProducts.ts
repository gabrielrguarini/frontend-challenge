import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { mountyQuery } from "@/utils/graphql-filters";
import { useDeferredValue } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query });
};

export function useProducts() {
  const { type, priority, search, page } = useFilter();
  const searchDeferred = useDeferredValue(search);

  const query = mountyQuery(type, priority, page);

  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ["products", type, priority, page],
  });

  const products = data?.data?.data?.allProducts;
  const filteredProducts = products?.filter((product) =>
    product.name
      .toLocaleLowerCase()
      .includes(searchDeferred.toLocaleLowerCase())
  );

  return {
    products: filteredProducts,
  };
}
