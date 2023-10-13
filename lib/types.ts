export interface ShortProduct {
  id: number
  title: string
  location: Location
  images: Image[]
  rating: number
}

export interface Product {
  id: number
  title: string
  rating: number
  description: string
  cancellationPolicy: string
  location: Location
  category: Category
  securities: Security[]
  rules: Rule[]
  reservations: { id: number, initialDate: string, finalDate: string }[]
  images: Image[]
  characteristics: Characteristic[]
  socialNetworks: SocialNetwork[]
}

export interface Category {
  id: number
  title: string
  description: string
  imageUrl: string
}

export interface Favourite {
  userId: number
  product: ShortProduct
}

export interface Location {
  id: number
  city: City
  street: string
  streetNumber?: string
  floor?: string
  latitude: number
  longitude: number
}

export interface City {
  id: number
  country: string
  state: string
  city: string
}

export interface Characteristic {
  id: number
  title: string
  icon: string
}

export interface Reservation {
  id: number
  initialDate: string
  finalDate: string
  code: string
  reservationProduct: ShortProduct
  clientId: number
}

export interface Review {
  id: number
  description: string
  createdAt: string
  stars: number
  productId: number
  user: {
    id: number
    firstName: string
    lastName: string
    imageUrl?: string
  }
}

export interface Image {
  id: number
  url: string
  title: string
}

export interface Security {
  id: number
  description: string
}

export interface SocialNetwork {
  id: number
  title: string
  icon: string
  url: string
}

export interface Rule {
  id: number
  description: string
}