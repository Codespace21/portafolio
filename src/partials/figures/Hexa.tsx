export default function Hexa(props: any) {
  return (
    <div className="block overflow-y-hidden">
      <div
        className="flex justify-center items-center"
        style={{
        clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
        backgroundColor: `${props.data.colorBg}`,
        height: '95px',
        width: '85px', 
      }}>
        <img 
          src={props.data.icono}
          alt={props.data.skill}
          width={50}
          height={50}
        />
      </div>
    </div>
  )
}