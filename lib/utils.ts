import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export enum DateFormat {
  "FILTER", "RESERVATION_REQUEST"
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | undefined, type: DateFormat) {
  if (!date) return ""
  switch (type) {
    case DateFormat.FILTER:
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}` || ""
    case DateFormat.RESERVATION_REQUEST:
      return `${date.getDate() > 9 ? date.getDate() : "0" + date.getDate()}/${date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)}/${date.getFullYear()}`
    default:
      return ""
  }
}


export function stringToDate(date: string) {
  let parts = date.split("/")
  return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]))
}