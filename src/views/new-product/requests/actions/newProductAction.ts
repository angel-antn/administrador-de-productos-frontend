import { ActionFunctionArgs, redirect } from "react-router-dom";
import { addProduct } from "../../../../services/productService";

export async function newProductAction({ request }: ActionFunctionArgs) {
  let error = "";

  const data = Object.fromEntries(await request.formData());

  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
    return error;
  }

  await addProduct(data);
  return redirect("/");
}
