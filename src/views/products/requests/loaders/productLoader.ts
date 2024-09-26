import { getProduct } from "../../../../services/productService";

export async function ProductLoader() {
  return await getProduct();
}
