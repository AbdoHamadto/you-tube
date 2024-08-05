"use client"

import Image from "next/image";
import search from "./image/search.png"
import mic from "./image/vertical.png"
import { useRouter } from "next/navigation";
import { useState } from "react";


const Search = () => {

  const [word, setWord] = useState("")
  const router = useRouter()

  const handleKeyDown = () => {
    const key = event.key;
    if(key === 'Enter' && word.trim() !== "") {
      router.push(`/search/query=${word}`)
    } else if (word.trim() === "") {
      router.push('/')
    }
  }

  return(
    <div className="flex w-3/6 justify-center">
      <div className="flex w-4/5 rounded-full border border-gray-600 sm:w-full sm:mx-2">
        <input 
          type="text" 
          className="w-5/6 bg-transparent rounded-l-full outline-none py-2 px-5 focus:border focus:border-blue-600 sm:py-1 sm:px-2" 
          placeholder="Search..." 
          onChange={(e) => setWord(e.target.value)}
          onKeyDown={handleKeyDown}
          value={word}
        />
        <div className="relative w-1/6 flex justify-center items-center bg-lightgray rounded-r-full cursor-pointer group">
          <Image 
            alt="search"
            src={search} 
            width={30}
            height={30}
          />
          <p className="absolute hidden text-xs bg-gray-600 bg-opacity-90 p-2 rounded-lg -bottom-14 group-hover:block sm:hidden">Search</p>
        </div>
      </div>
      <div className="relative w-10 h-10 mr-4 rounded-full hover:bg-opacity-75 hover:bg-gray-700 cursor-pointer bg-lightgray flex justify-center items-center ml-4 group sm:hidden">
        <Image 
          alt="mic"
          src={mic}
          width={30}
          height={20}
        />
        <p className="absolute hidden text-xs bg-gray-600 bg-opacity-90 p-2 w-[145px] rounded-lg -bottom-14 group-hover:block">Search with your voice</p>
      </div>
    </div>
  )
}

export default Search;