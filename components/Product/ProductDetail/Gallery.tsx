import { Button } from "@/components/ui/Button"
import { Image as ImageType } from "@/lib/types"
import Image from "next/image"

export interface GalleryProps {
  images: ImageType[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <>
      <section className="px-8 w-full hidden sm:grid grid-cols-4 grid-rows-2 gap-2 h-[500px] [&>*:first-child]:row-span-2 [&>*:first-child]:col-span-2 relative">
        {
          images.map(image => (
            <div className="relative w-full h-full" key={image.id}>
              <Image priority src={image.url} alt="hola" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' fill className="aspect-square object-cover rounded-sm" />
            </div>
          ))
        }
        <Button className="absolute bottom-2 right-10 font-bold text-sm cursor-pointer">More photos</Button>
      </section>
      <div className="block sm:hidden relative w-[90%] mx-auto h-[300px]">
        <Image priority src={images[0].url} alt="hola" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' fill className="aspect-square object-cover rounded-sm" />
      </div>
    </>
  )
}

export default Gallery