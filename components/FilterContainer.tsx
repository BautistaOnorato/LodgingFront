"use client"

import { useState } from "react";
import { HouseIcon, PlaneIcon, SearchIcon, TrashIcon } from "./icons/icons";
import { Button } from "./ui/Button";
import { DatePickerWithRange } from "./ui/DatePicker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";
import { Category, City } from "@/lib/types";
import ProductGrid from "./Product/ProductGrid";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import { formatDate } from "@/lib/utils";

export interface FilterContainerProps {
  categories: Category[]
  cities: City[]
}

const FilterContainer: React.FC<FilterContainerProps> = ({ cities, categories }) => {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  })

  const resetForm = () => {
    setLocation("")
    setCategory("")
    setDate({
      from: new Date(),
      to: addDays(new Date(), 5)
    })
  }

  const handleDate = (value: DateRange | undefined) => {
    setDate(value)
  }

  return (
    <>
      <section className="bg-secondary-color w-full">
        <form className="w-[90vw] sm:w-full mx-auto sm:mx-0 py-4 px-0 sm:px-8 flex flex-col min-[913px]:flex-row min-[913px]:justify-between gap-2 lg:items-center">
          <Select onValueChange={value => setLocation(value)} value={location}>
            <SelectTrigger className="w-full min-[913px]:w-[300px] font-medium">
              <div className="flex items-end gap-2">
                <PlaneIcon classname="w-5 h-5 opacity-70" />
                <SelectValue
                  placeholder="Where are you going?"
                />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Locations</SelectLabel>
                {
                  cities?.map(city => (
                    <SelectItem value={city.id.toString()} key={city.id}>{`${city.city}, ${city.country}`}</SelectItem>
                  ))
                }
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select onValueChange={value => setCategory(value)} value={category}>
            <SelectTrigger className="w-full min-[913px]:w-[300px] font-medium">
              <div className="flex items-end gap-2">
                <HouseIcon classname="w-5 h-5 opacity-70" />
                <SelectValue
                  placeholder="Where are you staying?"
                />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Locations</SelectLabel>
                {
                  categories?.map(category => (
                    <SelectItem value={category.id.toString()} key={category.id}>{category.title}</SelectItem>
                  ))
                }
              </SelectGroup>
            </SelectContent>
          </Select>
          <DatePickerWithRange date={date} handleDate={handleDate} />
          <div className="flex gap-2 w-full justify-end md:w-auto">
            <Button variant="secondary" className="w-[50%] md:w-auto" type="submit">
              <SearchIcon classname="w-6" />
            </Button>
            <Button variant="destructive" className="w-[50%] md:w-auto" onClick={() => resetForm()} type="button">
              <TrashIcon classname="w-6" />
            </Button>
          </div>
        </form>
      </section>
      <ProductGrid initialDate={formatDate(date?.from)} finalDate={formatDate(date?.to)} location={location} category={category} />
    </>
  );
};

export default FilterContainer;
