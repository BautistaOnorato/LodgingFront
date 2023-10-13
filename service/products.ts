import { ShortProduct } from "@/lib/types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface ProductQuery {
  location: string
  category: string
  initialDate: string
  finalDate: string
}

export const getProducts = async ({ location, category, initialDate, finalDate } : ProductQuery): Promise<ShortProduct[]> => {
  const res = await fetch(`${BASE_URL}/filter?city=${location}&category=${category}&initial_date=${initialDate}&final_date=${finalDate}`)
  return res.json()
}