export default function Star(props: { cant: any }) {

  const nstar = () => {
    var emptyArray = new Array(props.cant).fill('x');

    const staRandom = Object.values(emptyArray).map((item, index) => {

      var x = Math.floor(Math.random() * 99)
      var y = Math.floor(Math.random() * 96)
      var a = Math.floor(Math.random() * 3)

      return (
        <div key={index} className={`text-white absolute bg-white ${a == 0 || a == 1 ? "w-0.5 h-0.5" : "w-1 h-1"} rounded-full`} style={{ top: `${y}vh`, left: `${x}%` }}></div>
      )
    })

    return staRandom
  }

  return (
    <div>{nstar()}</div>
  )

}