import { editProductAvailability } from "../../../../services/productService";
import { ActionFunctionArgs } from "react-router-dom";

export async function updateAvailabilityAction({
  request,
}: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  await editProductAvailability(data);
  return {};
}
