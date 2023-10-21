"use client"

import { raleway } from "@/app/fonts"
import { useUser } from "@/hooks/useUser"
import { Reservation } from "@/lib/types"
import { getUserReservations } from "@/service/reservations"
import { useEffect, useState } from "react"
import ProductCard from "./Product/ProductCard"
import NoResults from "./ui/NoResults"

const ReservationsContainer = ({ userId } : { userId: string }) => {
  const { user } = useUser()
  const [reservations, setReservations] = useState<Reservation[]>([])
  useEffect(() => {
    if (!user) return
    const getReservations = async () => {
      const newReservations = await getUserReservations(userId, user.token)
      setReservations(newReservations)
    }

    getReservations()
  }, [user, userId])
  return (
    <div>
      <h2 onClick={() => console.log(reservations)} className={`text-3xl md:text-4xl ${raleway.className} py-6 px-8 font-bold w-full `}>Your booked accomodations ({reservations.length})</h2>
      <section className='mx-auto w-[90vw] sm:w-full px-0 sm:px-8 py-4 flex justify-center'>
        {
          reservations.length > 0 ? (
            <div className='grid min-[700px]:grid-cols-2 min-[1020px]:grid-cols-3 xl:grid-cols-4 gap-4 w-full place-items-center'>
              {reservations?.map(reservation => (
                <ProductCard 
                  key={reservation.id} 
                  identifier={reservation.reservationProduct.id}
                  image={reservation.reservationProduct.images.find(image => image.title.includes("first")) || reservation.reservationProduct.images[0]} 
                  title={reservation.reservationProduct.title} 
                  location={`${reservation.reservationProduct.location.city.city}, ${reservation.reservationProduct.location.city.country}`} 
                  rating={reservation.reservationProduct.rating} 
                  reservation={{ initialDate: reservation.initialDate, finalDate: reservation.finalDate }}
                />
              ))}
            </div>
          ) : (
            <div className='my-10 w-full'>
              <NoResults title="You don't have any reservations"/>
            </div>
          )
        }
      </section>
    </div>
  )
}

export default ReservationsContainer