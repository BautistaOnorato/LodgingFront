import { Favourite, FavouriteRequest } from "@/lib/types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/favourites`;

export const postFavourite = async (request : FavouriteRequest, token: string): Promise<{ favouriteId: number, productId: number } | number> => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(request)
  }
  const res = await fetch(`${BASE_URL}`, config)
  if (res.ok) {
    const data = await res.json()
    return data
  } else {
    return -1;
  }
}

export const deleteFavourite = async (favouriteId: number, token: string): Promise<string | number> => {
  const config = {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }
  const res = await fetch(`${BASE_URL}/id/${favouriteId}`, config)
  if (res.ok) {
    await res.text()
    return "Product removed from favourites"
  } else {
    return -1;
  }
}

export const getUserFavourites = async (userId: string, token: string): Promise<Favourite[]> => {
  const config = {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }

  const res = await fetch(`${BASE_URL}/user/${userId}`, config)
  return res.json()
}