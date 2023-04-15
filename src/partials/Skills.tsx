//Data
import info_skill from "../data/skills_category.json"

//Partials
import Star from "./components/figures/Star";
import Skill from "./components/Skill";
import Skills_Radar from "./components/charts/Skills_Radar";

export default function Skills() {
  return (
    <div className="flex justify-center xs:h-auto lg:h-screen w-full">
      <div className="flex xs:h-auto lg:h-screen w-full">
        <div className="xs:block lg:flex w-full justify-center items-center xs:h-auto">
          {/* Skills Tecnicas*/}
          <div className="xs:w-full lg:w-1/2 h-auto block justify-center items-center">
            <Skill categ="Front-End" data={info_skill.frontend}/>
            <Skill categ="Back-End" data={info_skill.backend}/>
            <Skill categ="Data" data={info_skill.data}/>
          </div>

          {/* Skills Blandas*/}
          <div className="xs:w-full lg:w-1/2 h-auto flex justify-center items-center">
            <Skills_Radar />
          </div>
        </div>
      </div>
    </div>
  );
}
