//Data
import skill from "../../../data/skills.json"

//Components
import Circles_logos from "./Circles_logos";

//Images
import astro from "../../../assets/astro.png";

export default function Picture_Astro() {
  return (
    <div className="flex w-full justify-center md:pr-4 lg:pr-8 xl:pr-20">
      <div className="relative pt-16">
        <img src={astro} alt="astro" height={0} width={0} className="-scale-x-[1] xs:w-[26rem] md:h-[auto] lg:w-[33rem] lg:h-[auto] xl:w-[40rem] xl:h-[auto]"/>

        <Circles_logos tamano="xs:w-20 xs:h-20 lg:w-24 lg:h-24" logo={skill[0]} pos="xs:left-24 xs:bottom-24 lg:left-44 lg:bottom-48" />
        <Circles_logos tamano="xs:w-16 xs:h-16 lg:w-20 lg:h-20" logo={skill[1]} pos="xs:top-20 xs:right-20 lg:top-28 lg:right-32" text="Y" descrip="express"/>
        <Circles_logos tamano="xs:w-20 xs:h-20 lg:w-24 lg:h-24" logo={skill[2]} pos="xs:top-32 xs:left-0 lg:top-44 lg:left-0" />
        <Circles_logos tamano="xs:w-16 xs:h-16 lg:w-20 lg:h-20" logo={skill[3]} pos="xs:bottom-10 xs:right-0 lg:bottom-20 lg:right-0" />
      </div>
    </div>
  )
}