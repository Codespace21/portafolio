//Partials
import Star from "./figures/Star";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Perfil from "./components/Perfil";

export default function Inicio() {
  return (
    <div className="justify-center h-screen w-full bg-space">
      <div className="block h-screen w-full">
        <div className="h-1/7">
          <Header />
        </div>
        <div className="sm:block md:flex justify-center items-center xs:h-[85%] sm:h-[88%]">
          <div className="w-full h-full flex justify-center items-center">
            <Perfil />
          </div>
          <div className="w-full flex justify-center items-center">2</div>
        </div>
        <div className="h-1/7">
          <SubHeader />
        </div>
      </div>
    </div>
  );
}
