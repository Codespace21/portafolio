import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SubHeader() {
  return (
    <div className="flex justify-center items-center h-[3rem] w-full text-white">
      <div className="w-full h-full grid grid-cols-12 p-0 m-0">
        <div className="xs:col-span-3 md:col-span-1 flex items-center pl-3">
          <FaGithub size={30} cursor={"pointer"} />
          <FaLinkedin size={30} className="ml-2" cursor={"pointer"} />
        </div>
        <div className="xs:col-span-9 md:col-span-11 flex w-full justify-end items-center"></div>
      </div>
    </div>
  );
}
