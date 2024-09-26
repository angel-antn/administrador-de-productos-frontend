import { LoaderFunctionArgs } from "react-router-dom";
import { getProductById } from "../../../../services/productService";

export async function getProductLoader({ params }: LoaderFunctionArgs) {
  return await getProductById(params.id!);
}
