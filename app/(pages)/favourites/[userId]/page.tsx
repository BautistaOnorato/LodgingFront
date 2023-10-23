import FavouritesContainer from "@/components/FavouritesContainer"

interface FavouritePageProps {
  params: {
    userId: string
  }
}

const FavouritePage = ({ params } : FavouritePageProps) => {
  return (
    <div>
      <FavouritesContainer userId={params.userId} />
    </div>
  )
}

export default FavouritePage