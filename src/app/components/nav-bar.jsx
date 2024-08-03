import Image from "next/image";
import mic from "./image/nav-bar/vertical.png"
import search from "./image/nav-bar/search.png"
import logo from "./image/nav-bar/icon.png"
import Link from "next/link";
import Option from "../client/nav-bar/option";
import SideBar from "../client/sidebar/side-bar";

const NavBar = () => {
  return(
    <div className="text-white flex justify-between items-center h-14 px-8 sticky top-0 bg-darkgray">
      <div className="flex justify-center items-center">
        <SideBar />
        <Link href='/'>
        <div className="relative flex justify-center items-center">
          <Image 
            src={logo}
            width={30}
            height={30}
          />
          <div className="absolute text-gray-600 text-xs -right-4 -top-1">EG</div>
          <div className="font-bold text-xl">YouTube</div>
        </div>
        </Link>
      </div>
      <div className="flex w-3/6 justify-center">
        <div className="flex w-4/5 rounded-full border border-gray-600">
          <input type="text" className="w-5/6 bg-transparent rounded-l-full outline-none py-2 px-5 focus:border focus:border-blue-600" placeholder="Search..."/>
          <div className="relative w-1/6 flex justify-center items-center bg-lightgray rounded-r-full cursor-pointer group">
            <Image 
              src={search} 
              width={30}
              height={30}
            />
            <p className="absolute hidden text-xs bg-gray-600 bg-opacity-90 p-2 rounded-lg -bottom-14 group-hover:block">Search</p>
          </div>
        </div>
        <div className="relative w-10 h-10 mr-4 rounded-full hover:bg-opacity-75 hover:bg-gray-700 cursor-pointer bg-lightgray flex justify-center items-center ml-4 group">
          <Image 
            src={mic}
            width={30}
            height={20}
          />
          <p className="absolute hidden text-xs bg-gray-600 bg-opacity-90 p-2 w-[145px] rounded-lg -bottom-14 group-hover:block">Search with your voice</p>
        </div>
      </div>
      <div className="flex">
        <Option />
      </div>
    </div>
  )
}

export default NavBar;