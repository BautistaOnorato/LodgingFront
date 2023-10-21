import ReservationsContainer from "@/components/ReservationsContainer"

interface ReservationPageProps {
  params: {
    userId: string
  }
}

const ReservationPage: React.FC<ReservationPageProps> = ({ params }) => {
  return (
    <div>
      <ReservationsContainer userId={params.userId}/>
    </div>
  )
}

export default ReservationPage