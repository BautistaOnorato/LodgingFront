"use client"

import { User } from "@/lib/types"
import { deleteFavourite, postFavourite } from "@/service/favourites"
import { getUser } from "@/service/users"
import { createContext, useEffect, useState } from "react"

type UserContextProps = {
  user: User | null
  handleUser: (value: User | null) => void
  handleFavourites: (productId: number) => Promise<string | number>
}

export interface UserInfo {
  id: string
  token: string
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)

interface props {
  children: React.ReactNode
}

export const UserProvider = ({ children }: props) => {
  const [user, setUser] = useState<User | null>(null)

  const handleUser = (value: User | null) => {
    setUser(value)
  }

  const handleFavourites = async (productId : number): Promise<string | number> => {
    if (!user) return -1
    let newUser = user
    const isFavourite = user.user.favouriteProducts.find(favourite => favourite.productId === productId)
    if (isFavourite) {
      const newFavourites = user.user.favouriteProducts.filter(favourite => favourite.productId !== productId)
      newUser.user.favouriteProducts = newFavourites
      setUser(newUser)
      return await deleteFavourite(isFavourite.favouriteId, user.token)
    } else {
      const newFavourite = await postFavourite({
        product: {
          id: productId
        },
        user: {
          id: user.user.id,
          role: user.user.role
        }
      }, user.token)
      if (typeof newFavourite === "number") {
        return -1
      } else {
        newUser.user.favouriteProducts.push(newFavourite)
        setUser(newUser)
        return "Prodcut added to favourites"
      }
    }
  }

  useEffect(() => {
    const searchUser = async (id: string, token: string) => {
      const findUser = await getUser(id, token)
      if (findUser) {
        setUser({
          token: token,
          user: findUser
        })
      } else {
        setUser(null)
      }
    }

    const storageUser = localStorage.getItem("user-info")
    
    if (storageUser) {
      const userInfo: UserInfo = JSON.parse(storageUser)
      
      if (userInfo.id && userInfo.token) {
        searchUser(userInfo.id, userInfo.token)
      } else {
        localStorage.removeItem("user-info")
      }
    }
  }, [])

  return (
    <UserContext.Provider value={{user, handleUser, handleFavourites}}>
      {children}
    </UserContext.Provider>
  )
}