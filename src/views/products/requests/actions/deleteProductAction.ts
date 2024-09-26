import { deleteProductById } from "../../../../services/productService";
import { ActionFunctionArgs, redirect } from "react-router-dom";

export async function deleteProductAction({ params }: ActionFunctionArgs) {
  await deleteProductById(params.id!);
  return redirect("/");
}
