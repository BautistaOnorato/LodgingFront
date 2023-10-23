"use client"

import { Button } from "@/components/ui/Button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SocialNetwork } from "@/lib/types"
import { Share2 } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

interface SocialNetworkProps {
  socialNetworks: SocialNetwork[]
}

const SocialNetworks: React.FC<SocialNetworkProps> = ({ socialNetworks }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return (
    <Button className="rounded-full p-0 w-10 bg-secondary-color hover:opacity-70 hover:bg-secondary-color">
      <Share2 size={18} />
    </Button>
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full p-0 h-10 text-white flex items-center justify-center w-10 bg-secondary-color hover:opacity-70 hover:bg-secondary-color">
        <Share2 size={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={10} align="start">
        <DropdownMenuLabel>Social networks</DropdownMenuLabel>
        {
          socialNetworks.map(socialNetwork => (
            <DropdownMenuItem key={socialNetwork.id} className="hover:bg-slate-100 cursor-pointer relative w-full">
              <a className="flex items-center w-full" href={socialNetwork.url} target="_blank">
                <Image src={socialNetwork.icon} alt={socialNetwork.title} width={18} height={18} className="mr-4" />
                {socialNetwork.title[0].toUpperCase() + socialNetwork.title.slice(1).toLowerCase()}
              </a>
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SocialNetworks