"use client"

import { useUser } from "@/hooks/useUser"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { roboto } from "@/app/fonts"
import { LogOut, User } from "lucide-react"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { Skeleton } from "../ui/skeleton"

export interface MainNavProps {
  routes: { href: string, title: string }[]
  handleOpen: (value: boolean) => void
}

const MainNav: React.FC<MainNavProps> = ({ routes, handleOpen }) => {
  const { user, handleUser } = useUser()
  const closeMenu = () => {
    handleOpen(false)
  }

  const logOut = () => {
    handleUser(null)
    localStorage.removeItem("user-info")
  }

  return (
    <>
      {
        user !== false ? (
          user !== null ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <div className="hidden sm:flex items-center justify-center gap-2 bg-white rounded-lg p-2 ">
                  <User />
                  <p className={`${roboto.className}`}>{user.user.firstName}</p>
                </div>
                <Avatar className="block sm:hidden">
                  <AvatarFallback className="font-medium">{user.user.firstName[0]}{user.user.lastName[0]}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="sm:min-w-[180px] sm:px-2">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                  <DropdownMenuItem className="hover:bg-slate-100">
                    <Link
                      className="font-medium cursor-pointer w-full"
                      href={"/reservations/" + user.user.id}
                    >
                      Reservations
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-slate-100">
                    <Link
                      className="font-medium cursor-pointer w-full"
                      href={"/favourites/" + user.user.id}
                    >
                      Favourites
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="gap-2 cursor-pointer hover:text-white hover:bg-[#ff0000bd]" onClick={() => logOut()}>
                    <LogOut size={18} />
                     Sign out
                  </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <nav className="w-full flex items-center justify-end">
              <ul className="flex flex-col sm:flex-row items-end sm:justify-end gap-8 w-full">
                {
                  routes.map((route, i) => (
                    <li key={route.href} className="flex flex-col gap-8 sm:block w-full sm:w-auto cursor-pointer text-center sm:text-left text-xl sm:text-md">
                      <Link
                        className="text-white hover:scale-105 font-medium cursor-pointer"
                        href={route.href}
                        onClick={() => closeMenu()}
                      >
                        {route.title}
                      </Link>
                      {i !== routes.length - 1 && <hr className="block sm:hidden" />}
                    </li>
                  ))
                }
              </ul>
            </nav>
          )
        ) : (
          <div className="w-full flex items-center justify-end">
            <Skeleton className="w-[50%] h-10 text-end md:w-[50%] max-w-[300px] rounded-lg" />
          </div>
        )
      }
    </>
  )
}

export default MainNav