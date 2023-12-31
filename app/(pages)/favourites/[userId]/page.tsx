"use client"

import FavouritesContainer from "@/components/FavouritesContainer"
import { useUser } from "@/hooks/useUser"
import { notFound, redirect } from "next/navigation"

interface FavouritePageProps {
  params: {
    userId: string
  }
}

const FavouritePage = ({ params } : FavouritePageProps) => {
  const { user } = useUser()

  if (user) {
    if (user.user.id.toString() !== params.userId) {
      return notFound()
    }
  }

  if (user === null) {
    return redirect("/signin")
  }

  if (user === false) {
    return null
  }


  return (
    <div>
      <FavouritesContainer userId={params.userId} />
    </div>
  )
}

export default FavouritePage