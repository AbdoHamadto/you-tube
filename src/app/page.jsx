import Image from "next/image";
import channel from "./image/img-channel.jpg"
import dots from "./image/dots.png"
import Link from "next/link";
import home from "./image/home.png"
import shorts from "./image/shorts.png"
import subscripe from "./image/footage.png"
import you from "./image/video.png"

export default async function Home() {

  const res = await fetch('https://invidious.protokolla.fi/api/v1/popular?hl=en')
  const videos = await res.json() 

  return (
    <>
    <div className="grid grid-cols-5 gap-2 w-11/12 ml-28 my-10 sm:grid-cols-1 sm:gap-0 sm:mx-0 sm:my-5 sm:w-full">
      {videos.map((item) => {
        return(
          <Link key={item.authorId} href={`/watch/watch=${item.authorId}`}>
            <div className="p-2 cursor-pointer rounded-lg hover:bg-opacity-30 hover:bg-red-500 sm:p-0">
              <Image alt="img-video" src={item.videoThumbnails[2].url} width={item.videoThumbnails[2].width} height={item.videoThumbnails[2].height} className="rounded-lg sm:rounded-none" />
              <div className="flex justify-between text-sm mt-2 sm:w-11/12 sm:mx-auto sm:mb-8">
                <div className="flex">
                  <Image alt="img-channel" src={channel} className="rounded-full w-10 h-10"/>
                  <div className="ml-4">
                    <p className="text-white w-56 truncate">{item.title}</p>
                    <div className="group">
                      <p className="text-gray-500 hover:text-white">{item.author}</p> 
                      <div className="relative">
                        <div className="absolute -top-20 p-2 bg-slate-500 text-white rounded-lg hidden  group-hover:block">
                          <p className="text-center">{item.author}</p> 
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-500 hover:text-white"><span>{item.viewCount} views <span className="mx-2">|</span> {item.publishedText}</span></p>
                  </div>
                </div>
                <Image alt="dots" src={dots} className="h-8 hover:transition hover:rotate-90"/>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
    <div className="absolute left-2 top-16 text-xs text-white -z-10 sm:hidden">
      <Link href='/'>
        <div className="flex flex-col items-center p-2 hover:bg-gray-600 rounded-lg cursor-pointer">
          <Image 
            alt="home"
            src={home}
            width={30}
            height={30}
          />
          <p className="mt-2">Home</p>
        </div>
      </Link>
      <div className="my-2 flex flex-col items-center p-2 hover:bg-gray-600 rounded-lg cursor-pointer">
        <Image 
          alt="shorts"
          src={shorts}
          width={30}
          height={30}
        />
        <p className="mt-2 text-[10px]">Shorts</p>
      </div>
      <div className="my-2 flex flex-col items-center p-2 hover:bg-gray-600 rounded-lg cursor-pointer">
        <Image 
          alt="subscripe"
          src={subscripe}
          width={30}
          height={30}
        />
        <p className="mt-2 text-[10px]">Subscriptions</p>
      </div>
      <div className="flex flex-col items-center p-2 hover:bg-gray-600 rounded-lg cursor-pointer">
        <Image
          alt="you"
          src={you}
          width={30}
          height={30}
        />
        <p className="mt-2">You</p>
      </div>
    </div>
    </>
  );
}
