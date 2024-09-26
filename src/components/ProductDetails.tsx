import { Form, Link, useFetcher } from "react-router-dom";
import { ProductSchema } from "../interfaces/productSchema";
import { formatCurrency } from "../utils/formatCurrency";

interface ProductDetailsProps {
  product: ProductSchema;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const fetcher = useFetcher();
  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg text-gray-800">
        <fetcher.Form method="PATCH">
          <button
            type="submit"
            name="isAvailable"
            value={(!product.isAvailable).toString()}
            className="border border-pink-500 text-pink-500 rounded-md w-full font-bold uppercase text-xs p-2 text-center hover:border-pink-400 hover:text-pink-400"
          >
            {product.isAvailable ? "Disponible" : "No disponible"}
          </button>
          <input name="id" type="hidden" value={product.id} />
        </fetcher.Form>
      </td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex gap-2 items-center">
          <Link
            to={`/products/edit/${product.id}`}
            className="bg-amber-500 text-white rounded-md w-full font-bold uppercase text-xs p-2 text-center hover:bg-amber-400"
          >
            <p>Editar</p>
          </Link>
          <Form
            action={`/products/delete/${product.id}`}
            className="w-full"
            method="DELETE"
          >
            <input
              type="submit"
              value="Eliminar"
              className="bg-red-500 text-white rounded-md font-bold uppercase text-xs p-2 text-center w-full cursor-pointer hover:bg-red-400"
            />
          </Form>
        </div>
      </td>
    </tr>
  );
};
