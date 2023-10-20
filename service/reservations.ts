import { Reservation, ReservationRequest } from "@/lib/types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/reservations`;

export const postReservation = async (request : ReservationRequest, token: string): Promise<Reservation | string> => {
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
    return "Something went wrong";
  }
}