import { User, UserResponse } from "@/lib/types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/users`;

export const getUser = async (id : string, token : string): Promise<UserResponse | null> => {
  
  const config: RequestInit = {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }
  try {
    const res = await fetch(`${BASE_URL}/id/${id}`, config)
    if (res.ok) {
      return res.json()
    } else throw new Error()
  } catch {
    return null
  }
}
