"use client"

import { FormEvent, useState } from "react";
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
import { DateFormat, formatDate } from "@/lib/utils";

export interface FilterContainerProps {
  categories: Category[]
  cities: City[]
}

const FilterContainer: React.FC<FilterContainerProps> = ({ cities, categories }) => {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined
  })
  const [filters, setFilters] = useState({ location: "", category: "", initialDate: "3000-12-30", finalDate: "3000-12-31" })

  const resetForm = () => {
    setLocation("")
    setCategory("")
    setDate({
      from: undefined,
      to: undefined
    })
    setFilters({ location: "", category: "", initialDate: "3000-12-30", finalDate: "3000-12-31" })
  }

  const handleDate = (value: DateRange | undefined) => {
    setDate(value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    console.log(formatDate(date?.from, DateFormat.FILTER));
    
    
    const newFilters = {
      location: location,
      category: category,
      initialDate: date?.from ? formatDate(date.from, DateFormat.FILTER) : "3000-12-30",
      finalDate: date?.to ? formatDate(date.to, DateFormat.FILTER) : "3000-12-31",
    }
    setFilters(newFilters)
  }

  return (
    <>
      <section className="bg-secondary-color w-full">
        <form onSubmit={(e) => handleSubmit(e)} className="w-[90vw] sm:w-full mx-auto sm:mx-0 py-4 px-0 sm:px-8 flex flex-col min-[913px]:flex-row min-[913px]:justify-between gap-2 lg:items-center">
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
                <SelectLabel>Property type</SelectLabel>
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
      <ProductGrid {...filters} />
    </>
  );
};

export default FilterContainer;
