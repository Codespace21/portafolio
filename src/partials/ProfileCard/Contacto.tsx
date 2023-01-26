import { FaEnvelope } from "react-icons/fa";

export default function Contacto() {

  return(
  <div className="flex-col justify-center items-center">
    <button className="font-ubuntu text-white flex items-center">
      <FaEnvelope className="mr-3" color={"white"} size={20}/>Contacto
    </button>
  </div>
  )
}