export default function Header() {

  return(
  <div className="flex justify-center items-center h-[3rem] w-full text-white">
    <div className="w-full h-full grid grid-cols-12 p-0 m-0">
      <div className="xs:col-span-2 md:col-span-1 flex items-center pl-3">
        <img src="https://img.icons8.com/pastel-glyph/64/FFFFFF/astronaut-helmet.png" alt="icon-as" width={30} height={30} />
      </div>
      <div className="xs:col-span-10 md:col-span-11 flex w-full justify-end items-center xs:pr-2 sm:pr-4 md:pr-8">
        <button className="w-auto xs:mx-2 md:mx-5 xs:text-sm sm:text-md">Inicio</button>
        <button className="w-auto xs:mx-2 md:mx-5 xs:text-sm sm:text-md">Habilidades</button>
        <button className="w-auto xs:mx-2 md:mx-5 xs:text-sm sm:text-md">Proyectos</button>
      </div>
    </div>
  </div>
  )
}