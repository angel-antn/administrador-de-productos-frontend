import { FiPlus } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";
import { ProductSchema } from "../../interfaces/productSchema";
import { ProductDetails } from "../../components/ProductDetails";

export const Products = () => {
  const products = useLoaderData() as ProductSchema[];

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-3xl font-black text-pink-500">Productos</h2>
        <Link
          className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
          to="products/new"
        >
          <div className="flex gap-2 justify-center items-center">
            <FiPlus /> Agregar Producto
          </div>
        </Link>
      </div>

      <div className="p-2 overflow-x-scroll">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-200 text-gray-800">
            <tr>
              <th className="p-2 font-semibold">Producto</th>
              <th className="p-2 font-semibold">Precio</th>
              <th className="p-2 font-semibold">Disponibilidad</th>
              <th className="p-2 font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return <ProductDetails key={product.id} product={product} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
