import { ActionFunctionArgs, redirect } from "react-router-dom";
import { editProduct } from "../../../../services/productService";

export async function editProductAction({
  request,
  params,
}: ActionFunctionArgs) {
  let error = "";

  const data = Object.fromEntries(await request.formData());

  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
    return error;
  }

  await editProduct(params.id!, data);
  return redirect("/");
}
