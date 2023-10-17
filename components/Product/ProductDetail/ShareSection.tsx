import { Button } from "@/components/ui/Button"
import { Heart, Share, Share2 } from "lucide-react"

const ShareSection = () => {
  return (
    <section className="pt-6 w-[90%] mx-auto sm:w-full sm:px-8 text-black flex items-center gap-2">
      <Button className="rounded-full p-0 w-10 bg-secondary-color hover:opacity-70 hover:bg-secondary-color">
        <Share2 size={18} />
      </Button>
      <Button className="rounded-full p-0 w-10 bg-secondary-color hover:opacity-70 hover:bg-secondary-color">
        <Heart size={18} />
      </Button>
    </section>
  )
}

export default ShareSection