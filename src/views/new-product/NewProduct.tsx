import { FiChevronLeft } from "react-icons/fi";
import { Link, Form, useActionData } from "react-router-dom";
import { ErrorMessage } from "../../components/ErrorMessage";
import { ProductForm } from "../../components/ProductForm";

export const NewProduct = () => {
  const error = useActionData() as string;
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-3xl font-black text-pink-500">
          Registrar producto
        </h2>
        <Link
          className="rounded-md p-3 text-sm font-bold text-indigo-600 shadow-sm hover:text-indigo-500 border border-indigo-600 hover:border-indigo-500"
          to="/"
        >
          <div className="flex gap-2 justify-center items-center">
            <FiChevronLeft color="blue" /> Volver a Productos
          </div>
        </Link>
      </div>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Form className="mt-10" method="POST" action="">
        <ProductForm />
      </Form>
    </>
  );
};
