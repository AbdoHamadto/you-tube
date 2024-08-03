import channel from "./image/img-channel.jpg"
import dots from "./image/dots.png"
import Image from "next/image";

export default async function Home() {

  const res = await fetch('https://invidious.protokolla.fi/api/v1/trending?hl=en')
  const videos = await res.json() 

  return (
    <>
    <div className="grid grid-cols-5 gap-2 w-11/12 ml-28 mt-10">
      {videos.map((item) => {
        return(
          <div key={item.authorId} className="p-2 cursor-pointer rounded-lg hover:bg-opacity-30 hover:bg-blue-500">
            <div className="relative">
              <p className="absolute text-white font-bold bg-darkgray bg-opacity-70 p-1 rounded-lg  top-48 cursor-auto  left-64">17:22</p>
            </div>
            <Image alt="img-video" src={item.videoThumbnails[2].url} width={item.videoThumbnails[2].width} height={item.videoThumbnails[2].height} className="rounded-lg" />
            <div className="flex justify-between text-sm mt-2">
              <div className="flex">
                <Image alt="img-channel" src={channel} className="rounded-full w-10 h-10"/>
                <div className="ml-4">
                  <p className="text-white w-56 truncate">{item.title}</p>
                  <div className="group">
                    <p className="text-gray-500 group-hover:text-white w-fit">{item.author}</p> 
                    <div className="relative">
                      <div className="absolute -top-20 p-2 bg-slate-500 text-white rounded-lg hidden  group-hover:block">
                        <p className="text-center">{item.author}</p> 
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 hover:text-white"><span>{item.viewCount} <span className="mx-4">|</span> {item.publishedText}</span></p>
                </div>
              </div>
              <Image alt="dots" src={dots} className="h-8 hover:transition hover:rotate-90"/>
            </div>
          </div>
        )
      })}
    </div>
    </>
  );
}
