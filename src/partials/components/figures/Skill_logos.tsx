export default function Skill_logos(props: any) {
  const nskill = (): any => {
    const arraySkills = props.data;

    if (arraySkills) {
      const skill = Object.values(arraySkills).map((item: any, index: any) => {
        return (
          <div className="w-[110px] h-[140px] mr-2" key={index}>
            <div className="flex items-center justify-center h-2/3">
              <img
                src={item.icono}
                alt="logo"
                width={0}
                height={0}
                className="h-[6vh] w-[auto]"
              />
            </div>
            <div className="flex items-center justify-center h-1/3 text-sm">
              {item.name}
            </div>
          </div>
        );
      });
      return skill;
    }
  };

  return <div className="flex">{nskill()}</div>;
}
