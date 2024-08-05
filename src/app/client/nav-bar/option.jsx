"use client"

import { useState } from "react";
import Image from "next/image";
import logIn from "./image/nav-bar/login.png"
import video from "./image/nav-bar/camera.png"
import upload from "./image/nav-bar/video.png"
import live from "./image/nav-bar/live.png"
import edit from "./image/nav-bar/edit.png"
import not from "./image/nav-bar/notification.png"

const Option = ( ) => {
  // Creat
  const arrCreat = [{image: upload, title: "Upload video"},{image: live, title: "Go live"},{image: edit,title: "Creat post"}]
  const [stateCreat, setStateCreat] = useState(false)
  const creat = () => {
    setStateLogin(false)
    setStateCreat(!stateCreat)
    setStateNotification(false)
  }
  // Notification
  const arrNotification = ["New Video by Channel 1", "New Video by Channel 2","New Video by Channel 3", "New Video by Channel 4"]
  const [stateNotification, setStateNotification] = useState(false)
  const notification = () => {
    setStateLogin(false)
    setStateNotification(!stateNotification)
    setStateCreat(false)
  }
  // LogIn
  const arrLogin = ["Google Account", "Switch Account", "Sign Out", "YouTube Studio", "Purchases and memberships", "Your Data Iin youtube", "Appearance: Device theme", "Language: Engilsh", "Restrcted Mode: Off", "Location: Egypt", "Keyboard Shortcuts", "Settings", "Help", "Send feedback"]
  const [stateLogin, setStateLogin] = useState(false)
  const log = () => {
    setStateLogin(!stateLogin)
    setStateNotification(false)
    setStateCreat(false)
  }
  return(
    <>
    {/* Creat */}
    <div onClick={creat} className="relative w-10 h-10 mr-4 rounded-full hover:bg-lightgray flex justify-center items-center cursor-pointer group sm:hidden">
      <Image 
        alt="video"
        src={video}
        width={30}
        height={30}
      />
      <p className="absolute hidden text-xs bg-gray-600 bg-opacity-90 p-2 rounded-lg -bottom-14 group-hover:block">Creat</p>
      {stateCreat && <div className="absolute top-10 -right-2  w-72 bg-lightgray p-2 font-bold rounded-lg">
        {arrCreat.map((item, index) => {
          return(
            <div className="flex p-2 cursor-pointer hover:bg-gray-600" key={index}>
              <Image alt="image" src={item.image} width={20} height={20} />
              <div className="ml-2">{item.title}</div>
            </div>
          )
        })}
      </div> }
    </div>
    {/* notification */}
    <div onClick={notification} className="relative w-10 h-10 mr-4 rounded-full hover:bg-lightgray flex justify-center items-center cursor-pointer group sm:mr-0">
      <Image 
        alt="not"
        src={not}
        className="w-5 h-5"
      />
      <p className="absolute hidden text-xs bg-gray-600 bg-opacity-90 p-2 rounded-lg -bottom-14 group-hover:block">notification</p>
      <span className="animate-ping absolute h-2 w-2 rounded-full bg-red-400 opacity-75 top-2 right-2"></span>
      <span className="absolute rounded-full h-2 w-2 bg-red-600 top-2 right-2"></span>
      {stateNotification && <div className="absolute top-10 -right-6  w-72 bg-lightgray p-2 font-bold rounded-lg">
        {arrNotification.map((item, index) => {
          return(
            <div className="p-2 cursor-pointer hover:bg-gray-600" key={index}>{item}</div>
          )
        })}
      </div> }
    </div>
    {/* LogIn */}
    <div onClick={log} className="relative w-10 h-10 mr-4 rounded-full hover:bg-lightgray flex justify-center items-center cursor-pointer sm:hidden">
      <Image 
        src={logIn}
        alt="log in"
        width={30}
        height={30}
      />
      {stateLogin && <div className="absolute top-10 right-0  w-72 bg-lightgray p-2 font-bold rounded-lg">
        {arrLogin.map((item, index) => {
          return(
            <div className="p-2 cursor-pointer hover:bg-gray-600" key={index}>{item}</div>
          )
        })}
      </div> }
    </div>
    </>
  )
}

export default Option;