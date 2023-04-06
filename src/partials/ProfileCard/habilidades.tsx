//Data
import skill from "../../data/skills.json"

//Partials
import Hexa from "../../partials/figures/Hexa"

export default function Habilidades() {

  const skillIcon = () =>{
    const eachItem = skill.map((item,index)=>{
      return (
        <div key={index} className="flex w-full justify-center items-center">
          <div className="w-[6rem] flex justify-center">
            <Hexa data={item}/>
          </div>
        </div>
      )
    })

    return eachItem
  }

  return(
    <>    
    <div className="flex flex-nowrap w-full overflow-x-hidden overflow-y-hidden scrollbar">
        {skillIcon()}
    </div>
    </>
  )
}