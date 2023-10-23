"use client"

import { raleway } from "@/app/fonts"
import { Button } from "@/components/ui/Button"
import { Calendar } from "@/components/ui/Calendar"
import { useUser } from "@/hooks/useUser"
import { DateFormat, formatDate, stringToDate } from "@/lib/utils"
import { Info } from "lucide-react"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { DateRange } from "react-day-picker"
import ReservationForm from "./ReservationForm"
import { ReservationRequest } from "@/lib/types"
import { postReservation } from "@/service/reservations"
import { revalidatePath } from "next/cache"
import { clearCachesByServerAction } from "@/lib/cache"

export interface AvailabilityProps {
  reservations: { id: number, initialDate: string, finalDate: string }[]
  title: string
  productId: number
}

const Availability: React.FC<AvailabilityProps> = ({ reservations, title, productId }) => {
  const router = useRouter()
  const { user } = useUser()
  const [error, setError] = useState("")
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined
  })
  const disabledDays = reservations.map(reservation => ({ from: stringToDate(reservation.initialDate), to: stringToDate(reservation.finalDate) }))

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    if (!user || !date?.from || !date?.to) return
    const reservationBody: ReservationRequest = {
      initialDate: formatDate(date.from, DateFormat.RESERVATION_REQUEST),
      finalDate: formatDate(date.to, DateFormat.RESERVATION_REQUEST),
      client: {
        id: user.user.id,
        role: user.user.role
      },
      product: {
        id: productId.toString()
      },
      code: "1234"
    }
    
    const reservation = await postReservation(reservationBody, user.token)
    if (typeof reservation === "string") {
      setError(reservation)
    } else {
      clearCachesByServerAction("/product/[productId]")
      router.push("/reservations/" + user.user.id)
    }
  }

  return (
    <section className="mt-6 w-full bg-secondary-color px-0 sm:px-8 py-6 flex flex-col lg:flex-row justify-between gap-10">
      <div className="w-full sm:w-auto space-y-4 px-2">
        <h3 className={`text-white ${raleway.className} text-xl font-semibold`}>Available days</h3>
        <div className="sm:w-[545px]">
          <Calendar  
            disabled={[
              ...disabledDays,
              { before: new Date() }
            ]}
            defaultMonth={new Date()}
            numberOfMonths={2}
            mode="range"
            className="hidden sm:block bg-white rounded-md"
            selected={date}
            onSelect={setDate}
          />
          <Calendar  
            disabled={[
              ...disabledDays,
              { before: new Date() }
            ]}
            defaultMonth={new Date()}
            numberOfMonths={1}
            mode="range"
            className="block sm:hidden bg-white rounded-md"
            selected={date}
            onSelect={setDate}
            classNames={{
              table: "w-full flex flex-col items-center"
            }}
          />
        </div>
      </div>
      <div className="w-full space-y-4 px-2">
        <h3 className={`text-white ${raleway.className} text-xl font-semibold`}>Reserve your stay</h3>
        {
          user ? (
            <div className="bg-white rounded-md w-full lg:h-[88%] flex px-8 py-3 flex-col justify-evenly gap-4 lg:gap-0">
              <ReservationForm initialDate={date?.from} finalDate={date?.to} title={title} onSubmit={onSubmit} />
              {
                error && <p className="text-destructive text-sm font-semibold">{error}</p>
              }
            </div>
          ) : (
          <div className="lg:h-[305.19px] flex items-center">
            <div className="bg-white w-full p-4 rounded-md flex items-center justify-between gap-8 flex-col sm:flex-row">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Info size={48} className="text-custom-blue" />
                <p className="text-lg text-center">You must be logged in to reserve an accommodation.</p>
              </div>
              <Button className="font-semibold px-8 whitespace-nowrap" type="button" onClick={() => router.push("/signin")}>Sign in</Button>
            </div>
          </div>
          )
        }
      </div>
    </section>
  )
}

export default Availability