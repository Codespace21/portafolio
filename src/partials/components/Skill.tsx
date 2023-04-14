//Partials
import Skill_logos from "./figures/Skill_logos";

export default function Skill(props: any) {
  return (
    <div className="flex justify-center items-center w-full text-white px-8 my-8">
      <div className="block w-full justify-center items-center rounded-lg bg-[#1C2431] h-[25vh]">
        <div>
          <p className="text-[#5D5F62] py-3 pl-6 text-xl font-bold">
            {props.categ}
          </p>
        </div>
        <div className="flex flex-nowrap items-center h-[18vh] px-6 overflow-x-auto overflow-y-hidden">
          <Skill_logos data={props.data} />
        </div>
      </div>
    </div>
  );
}
