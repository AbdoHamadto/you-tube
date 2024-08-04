"use client"

import menu from "./image/menu.png"
import Image from "next/image";
import home from "./image/home.png"
import logo from "./image/icon.png"
import channel from "./image/channel.png"
import history from "./image/history.png"
import like from "./image/like.png"
import playList from "./image/playlist.png"
import later from "./image/time.png"
import subscripe from "./image/footage.png"
import shorts from "./image/shorts.png"
import gaming from "./image/gaming.png"
import sportCup from "./image/trophy.png"
import music from "./image/music.png"
import live from "./image/live.png"
import trend from "./image/trending.png"
import you from "./image/video.png"
import yMusic from "./image/y-music.png"
import studio from "./image/studio.png"
import kids from "./image/kids.png"
import setting from "./image/setting.png"
import flag from "./image/flag.png"
import feedback from "./image/feedback.png"
import question from "./image/question.png"
import Link from "next/link";
import { useState } from "react";

const SideBar = () => {
  const arrSid = [{link: "/",image: home, addres: false, title: "Home"},
                  {link: "/short",image: shorts, addres: false, title: "Shorts"},
                  {link: "/subscriptions",image: subscripe, addres: false, title: "Subscriptions"},
                  {title: ''},
                  {addres: true, title: "You"}, 
                  {link: "/yourchannel",image: channel, addres: false, title: "Your Channel"}, 
                  {link: "/history",image: history, addres: false, title: "History"}, 
                  {link: "/playlist",image: playList, addres: false, title: "Playlists"}, 
                  {link: "/yourvideos",image: you, addres: false, title: "Your Videos"}, 
                  {link: "/watchlater",image: later, addres: false, title: "Watch Later"}, 
                  {link: "/likevideo",image: like, addres: false, title: "Liked videos"}, 
                  {title: ''},
                  {addres: true, title: "Subscriptions"},
                  {title: ''},
                  {addres: true, title: "Explore"},
                  {link: "/trend", image: trend, addres: false, title: "Trending"},
                  {link: "/music", image: music, addres: false, title: "Music"},
                  {link: "/live", image: live, addres: false, title: "Live"},
                  {link: "/game", image: gaming, addres: false, title: "Gaming"},
                  {link: "/sport", image: sportCup, addres: false, title: "Sports"},
                  {title: ''},
                  {addres: true, title: "More from YouTube"},
                  {link: "/",image: logo, addres: false, title: "YouTube Premium"},
                  {link: "/",image: studio, addres: false, title: "YouTube Studio"},
                  {link: "/",image: yMusic, addres: false, title: "YouTube Music"},
                  {link: "/",image: kids, addres: false, title: "YouTube Kids"},
                  {title: ''},
                  {link: "/setting",image: setting, addres: false, title: "Settings"},
                  {link: "/report",image: flag, addres: false, title: "Report history"},
                  {link: "/help",image: question, addres: false, title: "Help"},
                  {link: "/feedback",image: feedback, addres: false, title: "Send feedback"},
                  {title: ''},
                  {title: "© 2024 Abdelrahman"}]
  const [stateSid, setStateSid] = useState(false)
  const sidbar = () => {
    setStateSid(!stateSid)
  }
  return(
    <>
    <div onClick={sidbar} className="w-10 h-10 mr-4 rounded-full hover:bg-lightgray flex justify-center items-center sm:hidden">
      <Image 
        className="cursor-pointer"
        alt="menu"
        src={menu}
        width={30}
        height={30}
      />
    </div>
    <div className={`absolute -bottom-[905px] bg-darkgray ${stateSid ? 'left-0 transition-[1s]' : '-left-96 transition-[1s]'} w-64 h-dvh overflow-auto z-20`}>
      <div className="h-14 px-8 sticky top-0 flex justify-start items-center bg-darkgray">
        <div onClick={sidbar} className="w-10 h-10 mr-4 rounded-full hover:bg-lightgray flex justify-center items-center">
          <Image 
            className="cursor-pointer"
            alt="menu"
            src={menu}
            width={30}
            height={30}
          />
        </div>
        <Link href='/'>
          <div className="relative flex justify-center items-center h-full">
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
        <div className="px-6 py-4">
          {arrSid.map((item, index) => 
          <>
            {item.title &&
              <Link href={item.addres === false ? item.link : ''} key={index}>
                  <div onClick={sidbar} className={` ${item.addres ? 'cursor-auto' : 'cursor-pointer'} hover:bg-gray-600 p-2 rounded-lg flex items-center  group`}>
                    {item.addres === false && <Image src={item.image} className="h-5 w-5"/> }
                    <div className={`${item.addres ? 'font-bold text-lg' : 'ml-4'}`}>{item.title && item.title}</div>
                  </div>
              </Link>
            }
            {item.title === '' && <div className="h-[1px] w-full bg-white my-4"></div> }
          </>)}
        </div>
    </div>
    </>
  )
}

export default SideBar;