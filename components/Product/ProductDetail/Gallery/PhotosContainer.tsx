import { Image as ImageType } from "@/lib/types"
import Image from "next/image"
import DesktopPhotos from "./DesktopPhotos"
import MobileGallery from "./MobileGallery"

export interface PhotosContainerProps {
  images: ImageType[]
}

const PhotosContainer: React.FC<PhotosContainerProps> = ({ images }) => {
  return (
    <section className="pt-6">
      <DesktopPhotos images={images} />
      <MobileGallery images={images} />
    </section>
  )
}

export default PhotosContainer