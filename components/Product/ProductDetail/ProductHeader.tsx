import { raleway, roboto } from "@/app/fonts"
import { Location } from "@/lib/types"
import { MapPin, Star } from "lucide-react"

export interface ProductHeaderProps {
  title: string
  rating: number
  location: Location
} 

const ProductHeader: React.FC<ProductHeaderProps> = ({ title, location, rating }) => {
  return (
    <section className="sm:w-full bg-secondary-color text-white px-8 py-4 flex justify-between items-center">
      <div className="mr-10">
        <h2 className={`${raleway.className} text-xl sm:text-2xl mb-2`}>{title}</h2>
        <p className="text-[16px] text-slate-200 flex items-center md:gap-2"><span><MapPin size={16} className="hidden md:inline-block"/></span>{location.city.city}, {location.city.state}, {location.city.country} <span className="hidden md:inline-block">{location.street}</span></p>
      </div>
      <div className="gap-1 hidden sm:flex">
        {
          Array(5).fill(null).map((_, i) => (
            <Star key={i} size={18} className={`${i + 1 > rating ? "" : "fill-yellow-300 "}`}/>
          ))
        }
      </div>
      <div className="flex sm:hidden bg-white text-black items-center gap-1 p-2 rounded-md">
        <span className="text-[18px]">{rating}</span>
        <Star size={16}/>
      </div>
    </section>
  )
}

export default ProductHeader