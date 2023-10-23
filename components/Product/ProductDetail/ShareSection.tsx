"use client"

import { Button } from "@/components/ui/Button"
import { useToast } from "@/components/ui/use-toast"
import { useUser } from "@/hooks/useUser"
import { SocialNetwork } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Heart } from "lucide-react"
import { useEffect, useState } from "react"
import SocialNetworks from "./SocialNetworks"

interface ShareSectionProps {
  productId: number,
  socialNetworks: SocialNetwork[]
}

const ShareSection: React.FC<ShareSectionProps> = ({ productId, socialNetworks }) => {
  const { toast } = useToast()
  const { user, handleFavourites } = useUser()
  const [favourite, setFavourite] = useState(false)

  const handleFavourite = async () => {
    const res = await handleFavourites(productId)
    if (typeof res === "number") {
      toast({
        title: "Oops! Something went wrong.",
        description: "The action could not be done. Try again later."
      })
      return
    }

    if (res.includes("removed")) {
      toast({
        description: "The product was removed from favourites."
      })
      setFavourite(false)
    } else if (res.includes("added")) {
      toast({
        description: "The product was added to favourites."
      })
      setFavourite(true)
    }
  }

  useEffect(() => {
    if (!user) return
    setFavourite(user.user.favouriteProducts.some(favourite => favourite.productId === productId))
  }, [user, productId])

  return (
    <section className="pt-6 w-[90%] mx-auto sm:w-full sm:px-8 text-black flex items-center gap-2">
      <SocialNetworks socialNetworks={socialNetworks} />
      <Button 
        onClick={() => handleFavourite()}
        className={cn("rounded-full p-0 w-10 bg-secondary-color hover:bg-[#ff0000bd]", favourite && "bg-[#ff0000bd]")}
      >
        <Heart size={18} />
      </Button>
    </section>
  )
}

export default ShareSection