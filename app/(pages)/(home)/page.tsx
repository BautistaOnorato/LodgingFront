import { raleway } from "@/app/fonts";
import FilterContainer from "@/components/FilterContainer";
import { getCategories } from "@/service/categories";
import { getCities } from "@/service/cities";
import React from "react";

const HomePage = async () => {
  const categories = await getCategories();
  const cities = await getCities();
  return (
    <main>
      <div className="w-full bg-primary-color items-center flex flex-col pt-2">
        <h2
          className={`text-white text-3xl md:text-4xl ${raleway.className} py-4 px-8 font-bold w-full`}
        >
          Stay Everywhere, Feel at Home!
        </h2>
      </div>
      <FilterContainer cities={cities} categories={categories} />
    </main>
  );
};

export default HomePage;
