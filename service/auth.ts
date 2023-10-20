import { CustomError, User } from "@/lib/types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

interface SignUpRequest {
  email: string
  firstName: string
  lastName: string
  phone: string
  password: string
  role: string
}

interface SignInRequest {
  email: string
  password: string
}

export const signUp = async (request : SignUpRequest): Promise<User | string> => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request)
  }
  const res = await fetch(`${BASE_URL}/register`, config)
  if (res.ok) {
    const data = await res.json()
    return data
  } else {
    return "Something went wrong";
  }
}

export const signIn = async (request : SignInRequest): Promise<User | string> => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request)
  }
  const res = await fetch(`${BASE_URL}/authenticate`, config)
  const data = await res.json()
  if ("message" in data) {
    const error: CustomError = data
    if (error.message.includes("Bad credentials")) {
      return "Credentials do not match"
    }
  }

  if (res.ok) {
    return data
  } else {
    return "Something went wrong";
  }
  
}