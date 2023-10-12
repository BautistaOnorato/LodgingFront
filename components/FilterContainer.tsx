"use client"

import { useState } from "react";
import { raleway } from "../app/fonts";
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

const FilterContainer = () => {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const resetForm = () => {
    setLocation("")
    setCategory("")
  }

  return (
    <section className="w-full bg-primary-color flex items-center flex-col relative h-[20vh]">
      <h2
        onClick={() => {
          console.log(location);
          console.log(category);
        }}
        className={`text-white text-4xl ${raleway.className} font-bold w-[80%] mt-6`}
      >
        Stay Everywhere, Feel at Home!
      </h2>
      <form className="w-[80%] bg-secondary-color absolute bottom-[-30%] h-[11vh] p-4 rounded-md flex gap-4 items-center">
        <Select onValueChange={value => setLocation(value)} defaultValue={location}>
          <SelectTrigger>
            <div className="flex items-end gap-3">
              <PlaneIcon classname="w-6 h-6 opacity-70" />
              <SelectValue
                placeholder="Where are you going?"
              />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Locations</SelectLabel>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={value => setCategory(value)} defaultValue={category}>
          <SelectTrigger>
            <div className="flex items-end gap-3">
              <HouseIcon classname="w-6 h-6 opacity-70" />
              <SelectValue
                placeholder="Where are you staying?"
              />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Locations</SelectLabel>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <DatePickerWithRange />
        <Button variant="secondary">
          <SearchIcon classname="w-6" />
        </Button>
        <Button variant="destructive" onClick={resetForm}>
          <TrashIcon classname="w-6" />
        </Button>
      </form>
    </section>
  );
};

export default FilterContainer;
