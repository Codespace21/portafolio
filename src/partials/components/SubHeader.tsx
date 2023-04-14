import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SubHeader() {
  return (
    <div className="flex justify-center items-center h-[3rem] w-full text-white">
      <div className="w-full h-full grid grid-cols-12 p-0 m-0">
        <div className="xs:col-span-3 md:col-span-1 flex items-center pl-3">
          <a href="https://github.com/Codespace21" target="_blank"> <FaGithub size={30} cursor={"pointer"} /> </a>
          <a href="https://www.linkedin.com/in/jhon-rico-295b6892" target="_blank"> <FaLinkedin size={30} className="ml-2" cursor={"pointer"} /> </a>
        </div>
        <div className="xs:col-span-9 md:col-span-11 flex w-full justify-end items-center"></div>
      </div>
    </div>
  );
}
