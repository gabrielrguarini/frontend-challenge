"use client";
import { ProductFetchResponse } from "@/types/product-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (id: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL, {
    query: `query{
      Product(id:"${id}"){
        id
        name
        category
        description
        image_url
        price_in_cents
      }
    }`,
  });
};
export function useProduct(id: string) {
  const { data } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ["product", id],
    enabled: !!id,
    staleTime: 1000 * 60 * 3,
  });
  const product = data?.data?.data?.Product;
  return {
    product: product,
  };
}
