//Partials
import Star from "./figures/Star"

export default function Hero() {

  return(
  <div className="flex justify-center h-screen w-full bg-space">
    <Star cant={50} />
  </div>
  )
}