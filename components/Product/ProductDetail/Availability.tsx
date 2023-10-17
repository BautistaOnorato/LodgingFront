"use client"

import { raleway } from "@/app/fonts"
import { Button } from "@/components/ui/Button"
import { Calendar } from "@/components/ui/Calendar"
import { stringToDate } from "@/lib/utils"
import { Info } from "lucide-react"
import { useState } from "react"
import { DateRange } from "react-day-picker"

export interface AvailabilityProps {
  reservations: { id: number, initialDate: string, finalDate: string }[]
}

const Availability: React.FC<AvailabilityProps> = ({ reservations }) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined
  })
  const disabledDays = reservations.map(reservation => ({ from: stringToDate(reservation.initialDate), to: stringToDate(reservation.finalDate) }))
  
  return (
    <section className="mt-6 w-full bg-secondary-color px-0 sm:px-8 py-6 flex flex-col lg:flex-row justify-between gap-10">
      <div className="w-full sm:w-auto space-y-4 px-2">
        <h3 className={`text-white ${raleway.className} text-xl font-semibold`}>Available days</h3>
        <div className="sm:w-[545px]">
          <Calendar  
            disabled={disabledDays}
            defaultMonth={new Date()}
            numberOfMonths={2}
            mode="range"
            className="hidden sm:block bg-white rounded-md"
            selected={date}
            onSelect={setDate}
          />
          <Calendar  
            disabled={disabledDays}
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
        <div className="lg:h-[305.19px] flex items-center">
          <div className="bg-white w-full p-4 rounded-md flex items-center justify-between gap-8 flex-col sm:flex-row">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Info size={48} className="text-custom-blue" />
              <p className="text-lg text-center">You must be logged in to reserve an accommodation.</p>
            </div>
            <Button className="font-semibold px-8 whitespace-nowrap" type="button">Sign in</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Availability