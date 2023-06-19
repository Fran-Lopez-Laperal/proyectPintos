import { Link } from "react-router-dom";
// import { Portfolio } from "./Portfolio";

import logo from "../assets/react.svg";

export function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center py-2">
      <span className="text-[#cacaca] text-[10px]">by</span>
      <Link to={"/"}>
        <img src={logo} alt="Logo photopets" className="h-8" />
      </Link>
      {/* <Portfolio /> */}
      <p className="text-[10px]">© 2023</p>
    </footer>
  );
}
