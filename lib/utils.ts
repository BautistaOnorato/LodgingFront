import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | undefined) {
  return `${date?.getFullYear()}-${date?.getMonth() ? date.getMonth() + 1 : ""}-${date?.getDate()}` || ""
}


export function stringToDate(date: string) {
  let parts = date.split("/")
  return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]))
}