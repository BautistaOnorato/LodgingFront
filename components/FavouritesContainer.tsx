"use client"

import { raleway } from "@/app/fonts"
import { useUser } from "@/hooks/useUser"
import { Favourite } from "@/lib/types"
import { useEffect, useState } from "react"
import ProductCard from "./Product/ProductCard"
import NoResults from "./ui/NoResults"
import { getUserFavourites } from "@/service/favourites"

const FavouritesContainer = ({ userId } : { userId: string }) => {
  const { user } = useUser()
  const [favourites, setFavourites] = useState<Favourite[]>([])
  useEffect(() => {
    if (!user) return
    const getFavourites = async () => {
      const newFavourites = await getUserFavourites(userId, user.token)
      setFavourites(newFavourites)
    }

    getFavourites()
  }, [user, userId])
  return (
    <div>
      <h2 onClick={() => console.log(favourites)} className={`text-3xl md:text-4xl ${raleway.className} py-6 px-8 font-bold w-full `}>Your favourite accomodations ({favourites.length})</h2>
      <section className='mx-auto w-[90vw] sm:w-full px-0 sm:px-8 py-4 flex justify-center'>
        {
          favourites.length > 0 ? (
            <div className='grid min-[700px]:grid-cols-2 min-[1020px]:grid-cols-3 xl:grid-cols-4 gap-4 w-full place-items-center'>
              {favourites?.map(favourite => (
                <ProductCard 
                  key={favourite.product.id} 
                  identifier={favourite.product.id}
                  image={favourite.product.images.find(image => image.title.includes("first")) || favourite.product.images[0]} 
                  title={favourite.product.title} 
                  location={`${favourite.product.location.city.city}, ${favourite.product.location.city.country}`} 
                  rating={favourite.product.rating} 
                />
              ))}
            </div>
          ) : (
            <div className='my-10 w-full'>
              <NoResults title="You don't have any favourite"/>
            </div>
          )
        }
      </section>
    </div>
  )
}

export default FavouritesContainer