//Data
import info from "../../data/info.json";

//Images
import avatar from "../../assets/profile-pic (2).png";

export default function Perfil() {
  return (
    <div className="flex justify-center items-center w-full text-white py-4">
      <div className="flex w-full justify-center items-center">
        <div className="block md:py-4 xs:px-10 md:px-20 lg:px-20 xl:px-40">
          <div className="relative">
            <img
              src={avatar}
              alt="avatar"
              width={0}
              height={0}
              className="-rotate-12 xs:w-28 xs:h-28 lg:w-36 lg:h-36"
            />
            <img
              className="absolute xs:left-20 lg:left-28 xs:bottom-1 lg:bottom-2"
              src="https://cdn-icons-png.flaticon.com/512/197/197575.png"
              alt="col"
              width={25}
              height={25}
            />
          </div>
          <div className="xs:text-xl sm:text-6xl font-semibold mt-2">
            {info.info_basico.nombre}
          </div>
          <div className="xs:text-lg sm:text-2xl font-medium text-[#5F6165]">
            {info.info_basico.titulo}
          </div>
          <div className="xs:text-xs sm:text-[0.95rem] font-normal leading-loose tracking-wide mt-6 m-0">
            <p >{info.info_basico.descripcion_1}</p>
            <p className="mt-2">{info.info_basico.descripcion_2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
