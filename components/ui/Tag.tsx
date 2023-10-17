import { raleway } from "@/app/fonts"
import Image from "next/image"

export interface TagProps {
  icon: string
  title: string
}

const Tag: React.FC<TagProps> = ({ icon, title }) => {
  return (
    <div className="bg-[#f9a1277a] p-2 rounded-sm flex items-center gap-2">
      <Image src={icon} alt={title} width={24} height={24} />
      <p className={`text-md font-semibold ${raleway.className}`}>{title}</p>
    </div>
  )
}

export default Tag