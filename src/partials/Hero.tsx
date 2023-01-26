//Partials
import Star from "./figures/Star"
import ProfileCard from "./ProfileCard"

export default function Hero() {

  return(
  <div className="flex justify-center items-center h-screen w-full bg-space">
    <Star cant={60} />
    <ProfileCard />
  </div>
  )
}