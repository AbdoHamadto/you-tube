import Image from "next/image";
import logo from "./image/nav-bar/icon.png"
import Link from "next/link";
import Option from "../client/nav-bar/option";
import SideBar from "../client/sidebar/side-bar";
import Search from "../client/search/search";

const NavBar = () => {
  return(
    <div className="text-white flex justify-between items-center h-14 px-8 sticky top-0 bg-darkgray sm:px-2 sm:h-12">
      <div className="flex justify-center items-center">
        <SideBar />
        <Link href='/'>
        <div className="relative flex justify-center items-center">
          <Image 
            alt="logo"
            src={logo}
            width={30}
            height={30}
          />
          <div className="absolute text-gray-600 text-xs -right-4 -top-1">EG</div>
          <div className="font-bold text-xl">YouTube</div>
        </div>
        </Link>
      </div>
      <Search />
      <div className="flex">
        <Option />
      </div>
    </div>
  )
}

export default NavBar;