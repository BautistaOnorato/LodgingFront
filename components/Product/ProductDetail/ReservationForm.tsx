import { Button } from "@/components/ui/Button"
import { FormItem } from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { DateFormat, formatDate } from "@/lib/utils"
import { FormEvent } from "react"

export interface ReservationFormProps {
  initialDate: Date | undefined
  finalDate: Date | undefined
  title: string
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const ReservationForm: React.FC<ReservationFormProps> = ({ initialDate, finalDate, title, onSubmit }) => {
  return (
    <form onSubmit={(e) => onSubmit(e)} className="bg-white rounded-md w-full lg:h-full flex flex-col justify-evenly gap-6 lg:gap-0">
      <FormItem className="w-full">
        <Label className="">Arrival</Label>
        <Input className="w-full focus-visible:ring-0 focus-visible:ring-offset-0" value={initialDate ? formatDate(initialDate, DateFormat.FILTER) : "Select your arrival day on the calendar"} readOnly />
      </FormItem>
      <FormItem className="w-full">
        <Label className="">Departure</Label>
        <Input className="w-full focus-visible:ring-0 focus-visible:ring-offset-0" value={finalDate ? formatDate(finalDate, DateFormat.FILTER) : "Select your departure day on the calendar"} readOnly />
      </FormItem>
      <Button>Book {title}</Button>
    </form>
  )
}

export default ReservationForm