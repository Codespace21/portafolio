//Data
import info from "../../data/info.json";
import avatar from "../../assets/profile-pic (2).png";

export default function Perfil() {
  return (
    <div className="flex justify-center items-center h-[3rem] w-full text-white">
      <div className="flex w-full justify-center items-center">
        <div className="block md:py-4 xs:px-10 md:px-20 lg:px-40">
          <div className="relative">
            <img
              src={avatar}
              alt="avatar"
              width={140}
              height={140}
              className="-rotate-12"
            />
            <img
              className="absolute xs:left-24 md:left-28 bottom-2"
              src="https://cdn-icons-png.flaticon.com/512/197/197575.png"
              alt="col"
              width={25}
              height={25}
            />
          </div>
          <div className="xs:text-2xl sm:text-6xl font-semibold mt-2">
            {info.info_basico.nombre}
          </div>
          <div className="xs:text-lg sm:text-2xl font-medium text-[#5F6165]">
            {info.info_basico.titulo}
          </div>
          <div className="xs:text-xs sm:text-[0.95rem] font-normal leading-loose tracking-wide mt-6 m-0">
            <p>{info.info_basico.descripcion_1}</p>
            <p className="mt-2">{info.info_basico.descripcion_2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
