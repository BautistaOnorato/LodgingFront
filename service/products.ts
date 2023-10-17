import { Product, ShortProduct } from "@/lib/types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface ProductQuery {
  location: string
  category: string
  initialDate: string
  finalDate: string
}

export const getProducts = async ({ location, category, initialDate, finalDate } : ProductQuery): Promise<ShortProduct[]> => {
  const url =  `${BASE_URL}/filter?city=${location}&category=${category}&initial_date=${initialDate}&final_date=${finalDate}`
  const res = await fetch(url)
  return res.json()
}

export const getProductById = async (id: string): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/id/${id}`)
  return res.json()
}