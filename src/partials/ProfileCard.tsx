//Partials
import Info from "./ProfileCard/Info"
import Habilidades from "./ProfileCard/habilidades"
import Contacto from "./ProfileCard/Contacto"

export default function ProfileCard() {

  return(
  <div className="flex-col justify-center bg-white-opacy md:rounded-md drop-shadow-3xl w-[26rem]" style={{height: "28rem"}}>
    <div className="grid grid-rows-10 h-full">
      
      <div className="flex row-span-1 justify-end items-center p-0 m-0">
        <div className="px-4">
          <img src="https://cdn-icons-png.flaticon.com/512/197/197575.png" alt="col" width={20} height={20}/>
        </div>
      </div>

      <div className="flex row-span-2 justify-center items-center">
        <Info />
      </div>

      <div className="flex row-span-2 items-center px-2">
        <Habilidades />
      </div>

      <div className="flex row-span-2 justify-center items-center">
        <Contacto />
      </div>

    </div>
  </div>
  )
}