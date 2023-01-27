import { FaEnvelope, FaFileAlt } from "react-icons/fa";

export default function Contacto() {

  return(
    <>
      <div className="flex justify-center w-1/2 items-center">
        <button className="font-ubuntu text-white flex items-center">
          <FaEnvelope className="mr-3" color={"white"} size={18}/>Contacto
        </button>
      </div>
      <div className="flex justify-center w-1/2 items-center">
        <button className="font-ubuntu text-white flex items-center">
          <FaFileAlt className="mr-3" color={"white"} size={18}/>CV
        </button>
      </div>
    </>
  )
}