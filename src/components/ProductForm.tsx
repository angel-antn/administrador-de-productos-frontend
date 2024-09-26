import { availabilityOptions } from "../data/availabilityOptions";
import { ProductSchema } from "../interfaces/productSchema";

interface ProductFormProps {
  product?: ProductSchema;
}

export const ProductForm = ({ product }: ProductFormProps) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="name">
          Nombre Producto:
        </label>
        <input
          id="name"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nombre del Producto"
          name="name"
          defaultValue={product?.name ?? ""}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="price">
          Precio:
        </label>
        <input
          id="price"
          type="number"
          step=".01"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Precio Producto. ej. 200, 300"
          name="price"
          defaultValue={product?.price ?? ""}
        />
      </div>
      {product && (
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="isAvailable">
            Disponibilidad:
          </label>
          <select
            id="isAvailable"
            className="mt-2 block w-full p-3 bg-gray-50"
            name="isAvailable"
            defaultValue={product?.isAvailable.toString()}
          >
            {availabilityOptions.map((option) => (
              <option key={option.name} value={option.value.toString()}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <input
        type="submit"
        className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
        value={product ? "Editar producto" : "Registrar Producto"}
      />
    </>
  );
};
