import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Products } from "../views/products/Product";
import { NewProduct } from "../views/new-product/NewProduct";

import { EditProduct } from "../views/edit-product/EditProduct";
import { newProductAction } from "../views/new-product/requests/actions/newProductAction";
import { getProductLoader } from "../views/edit-product/requests/loaders/getProductLoader";
import { editProductAction } from "../views/edit-product/requests/actions/editProductAction";
import { ProductLoader } from "../views/products/requests/loaders/productLoader";
import { deleteProductAction } from "../views/products/requests/actions/deleteProductAction";
import { updateAvailabilityAction } from "../views/products/requests/actions/updateAvailabilityAction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: ProductLoader,
        action: updateAvailabilityAction,
      },
      {
        path: "products/new",
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        path: "products/edit/:id",
        element: <EditProduct />,
        loader: getProductLoader,
        action: editProductAction,
      },
      {
        path: "products/delete/:id",
        action: deleteProductAction,
      },
    ],
  },
]);
