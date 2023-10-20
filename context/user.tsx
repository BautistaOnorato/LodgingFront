"use client"

import { User } from "@/lib/types"
import { getUser } from "@/service/users"
import { createContext, useEffect, useState } from "react"

type UserContextProps = {
  user: User | null,
  handleUser: (value: User | null) => void
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
    <UserContext.Provider value={{user, handleUser}}>
      {children}
    </UserContext.Provider>
  )
}