//Partials
import InfiniteCarrusel from "../components/InfinityCarrusel"

export default function Habilidades() {

  return(
    <>
    {/* <div className="flex flex-nowrap w-100 overflow-x-scroll overflow-y-hidden scrollbar">
      <div className="flex h-24 mb-3">
        {skillIcon()}
      </div>      
    </div>   */}
    
    <div className="flex flex-nowrap w-100 overflow-x-hidden overflow-y-hidden scrollbar">
        <InfiniteCarrusel />
    </div>
    </>
  )
}