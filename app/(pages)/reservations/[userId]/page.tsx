"use client"

import ReservationsContainer from "@/components/ReservationsContainer"
import { useUser } from "@/hooks/useUser"
import { redirect } from "next/navigation"

interface ReservationPageProps {
  params: {
    userId: string
  }
}

const ReservationPage: React.FC<ReservationPageProps> = ({ params }) => {
  const { user } = useUser()
  
  if (user === null) {
    return redirect("/signin")
  }

  if (user === false) {
    return null
  }

  return (
    <div>
      <ReservationsContainer userId={params.userId}/>
    </div>
  )
}

export default ReservationPage