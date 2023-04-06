export default function Circles_logos(props: any) {
  return (
    <div className={`${props.tamano} rounded-full flex justify-center items-center bg-[#1C2431] shadow-custom shadow-white/50 absolute ${props.pos}`}>

      {props.text === "Y" ? <p className="text-gray-400">{props.descrip}</p> : <img src={props.logo.icono} alt="skill" height={55} width={55}/>
      }

      
    </div>
  )
}