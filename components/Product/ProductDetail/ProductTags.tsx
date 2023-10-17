import Tag from "@/components/ui/Tag"
import { Characteristic } from "@/lib/types"

export interface ProductTagsProps {
  characteristics: Characteristic[]
}

const ProductTags: React.FC<ProductTagsProps> = ({ characteristics }) => {
  return (
    <section className="pt-6 w-[90%] mx-auto sm:w-full px-0 sm:px-8 flex items-center flex-wrap gap-3">
      {
        characteristics.map(characteristic => (
          <Tag icon={characteristic.icon} title={characteristic.title} key={characteristic.id} />
        ))
      }
    </section>
  )
}

export default ProductTags