import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

export function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center py-2">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="h-8" />
      </Link>
      <p className="text-[10px]">© 2023</p>
    </footer>
  );
}
