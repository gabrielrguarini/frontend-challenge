import { Product } from "./product";

export interface ProductFetchResponse {
  data: {
    Product: Product;
  };
}
