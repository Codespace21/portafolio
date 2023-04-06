//Data
import skill from "../../data/skills.json"

//Partials
import Hexa from "./figures/Hexa"

export default function InfiniteCarrusel() {

  const skillIcon = () =>{
    const eachItem = skill.map((item,index)=>{
      return (
        <div key={index} className="flex justify-center items-center">
          <div className="w-32 flex justify-center">
            <Hexa data={item}/>
          </div>
        </div>
      )
    })

    return eachItem
  }

  return (
      <div className="flex w-full">
        <div className="slide-track">
          {skillIcon()}
          {skillIcon()}
        </div>
      </div>
  )
}