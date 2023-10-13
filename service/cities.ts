import { City } from "@/lib/types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/cities`;

export const getCities = async (): Promise<City[]> => {
  const res = await fetch(BASE_URL)
  return res.json()
}