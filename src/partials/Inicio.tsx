//Partials
import Star from "./components/figures/Star";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Perfil from "./components/Perfil";
import Picture_Astro from "./components/figures/Picture_Astro";

export default function Inicio() {
  return (
    <div className="flex justify-center xs:h-auto lg:h-screen w-full">
      <div className="block xs:h-auto lg:h-screen w-full">

        {/* Nav */}
        <div className="h-1/7">
          <Header />
        </div>
        {/* Perfil */}
        <div className="xs:block lg:flex justify-center items-center xs:h-auto lg:h-[88vh]">
          <div className="xs:w-full lg:w-1/2 h-auto flex justify-center items-center">
            <Perfil />
          </div>
          <div className="xs:w-full lg:w-1/2 h-auto flex justify-center items-center xs:px-8 lg:px-0">
            <Picture_Astro />
          </div>
        </div>
        {/* Sub */}
        <div className="h-1/7">
          <SubHeader />
        </div>
      </div>
    </div>
  );
}
