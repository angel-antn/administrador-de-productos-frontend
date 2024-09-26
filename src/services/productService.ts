import axios from "axios";
import { DraftProductSchema } from "../interfaces/draftProductSchema";
import { ProductSchema } from "../interfaces/productSchema";
import { ToEditProductSchema } from "../interfaces/toEditProductSchema";

interface ProductData {
  [k: string]: FormDataEntryValue;
}

export async function addProduct(productData: ProductData) {
  const product: DraftProductSchema = {
    name: `${productData.name}`,
    price: +productData.price,
  };

  const url = `${import.meta.env.VITE_API_URL}/api/v1/products`;

  await axios.post(url, product);
}

export async function editProduct(id: string, productData: ProductData) {
  const product: ToEditProductSchema = {
    name: `${productData.name}`,
    price: +productData.price,
    isAvailable: productData.isAvailable === "true",
  };

  const url = `${import.meta.env.VITE_API_URL}/api/v1/products/${id}`;

  await axios.patch(url, product);
}

export async function editProductAvailability(productData: ProductData) {
  const url = `${import.meta.env.VITE_API_URL}/api/v1/products/${
    productData.id
  }`;

  await axios.patch(url, {
    isAvailable: productData.isAvailable === "true",
  });
}

export async function getProduct() {
  const url = `${import.meta.env.VITE_API_URL}/api/v1/products`;

  const { data } = await axios.get(url);

  return data.data as ProductSchema[];
}

export async function getProductById(id: string) {
  const url = `${import.meta.env.VITE_API_URL}/api/v1/products/${id}`;

  const { data } = await axios.get(url);
  return data.data as ProductSchema[];
}

export async function deleteProductById(id: string) {
  const url = `${import.meta.env.VITE_API_URL}/api/v1/products/${id}`;

  await axios.delete(url);
}
