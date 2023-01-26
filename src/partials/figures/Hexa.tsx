export default function Hexa() {
  return (
    <div className="block overflow-y-hidden">
      <div
        className="flex justify-center items-center"
        style={{
        clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
        backgroundColor: '#F0DB4F',
        height: '95px',
        width: '85px', 
      }}>
        <img 
          src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png"
          alt="javascript"
          width={50}
          height={50}
        />
      </div>
    </div>
  )
}