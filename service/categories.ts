import { Category } from "@/lib/types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(BASE_URL)
  return res.json()
}