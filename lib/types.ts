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

export interface FavouriteRequest {
  product: {
    id: number
  }
  user: {
    id: string
    role: string
  }
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

export interface ReservationRequest {
  initialDate: string
  finalDate: string
  code: string
  product: {
    id: string
  }
  client: {
    id: string
    role: string
  }
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

export interface User {
  token: string
  user: UserResponse
}

export interface UserResponse {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  role: string
  imageUrl: string
  enable: boolean
  favouriteProducts: { favouriteId: number, productId: number }[]
}


export interface CustomError {
  details: string
  message: string
  timestamp: string
}