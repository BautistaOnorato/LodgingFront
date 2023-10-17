"use client"

import * as React from "react"
import { format } from "date-fns"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Calendar } from "@/components/ui/Calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover"
import { CalendarIcon } from "../icons/icons"

export interface DatePickerWithRangeProps {
  className?: React.HTMLAttributes<HTMLDivElement>
  date: DateRange | undefined
  handleDate: (value: DateRange | undefined) => void
}

export function DatePickerWithRange({ className, date, handleDate } : DatePickerWithRangeProps) {

  return (
    <div className={cn("grid gap-2 w-full min-[913px]:w-[300px]", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "flex justify-start gap-2 items-end ",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon classname="w-5 h-5 opacity-70" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDate}
            numberOfMonths={2}
            className="hidden md:block"
          />
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDate}
            numberOfMonths={1}
            className="block md:hidden"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
