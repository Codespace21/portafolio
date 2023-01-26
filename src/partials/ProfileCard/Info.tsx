//Data
import info from "../../data/info.json" 

export default function Info() {

  return(
  <div className="content-center justify-center items-center">
    <div className="w-full flex justify-center items-center mb-5">
      <div className="rounded-full bg-white w-28 h-28 flex justify-center items-center">
        <img
          className="rounded-full" 
          src="https://cdn-icons-png.flaticon.com/512/2032/2032382.png"
          width={100}
          height={100} 
          alt="avatar" 
        />
      </div>
    </div>
    <p className="text-white text-center font-ubuntu font-medium text-2xl leading-6">{info.info_basico.nombre}</p>
    <p className="text-white font-ubuntu text-sm">{info.info_basico.titulo}</p>
  </div>
  )
}