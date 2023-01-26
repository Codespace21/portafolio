//Data

//Partials
import Hexa from "../figures/Hexa"

export default function Habilidades() {

  return(
    <div className="flex flex-nowrap w-100 overflow-x-scroll overflow-y-hidden scrollbar">
      <div className="flex h-24 mb-3">

        <div className="w-28 flex justify-center items-center">
          <div className="w-full flex justify-center">
            <Hexa />
          </div>
        </div>

        <div className="w-28 flex justify-center items-center">
          <div className="w-full flex justify-center">
            <Hexa />
          </div>
        </div>

        <div className="w-28 flex justify-center items-center">
          <div className="w-full flex justify-center">
            <Hexa />
          </div>
        </div> 

        <div className="w-28 flex justify-center items-center">
          <div className="w-full flex justify-center">
            <Hexa />
          </div>
        </div> 

        <div className="w-28 flex justify-center items-center">
          <div className="w-full flex justify-center">
            <Hexa />
          </div>
        </div> 
        
        

      </div>
    </div>    
  )
}