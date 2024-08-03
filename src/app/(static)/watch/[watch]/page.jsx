import Image from "next/image";
import channel from "./image/img-channel.jpg"
import like from "./image/like.png"
import dislike from "./image/dislike.png"
import download from "./image/download.png"
import thanks from "./image/favorite.png"
import share from "./image/share.png"
import clip from "./image/scissors.png"
import dots from "./image/dots.png"
import dotsy from "./image/dotsy.png"
import Link from "next/link";

const Watch = async ({ params }) => {
  const res = await fetch('https://invidious.protokolla.fi/api/v1/popular?hl=en')
  const videos = await res.json() 
  const id = (params.watch.substring(8));

  const video = videos.filter((item) => item.authorId === id)
  const option = [{title: "Like", iamge: like},
                  {title: "DisLike", iamge: dislike},
                  {title: "Share", iamge: share},
                  {title: "Download", iamge: download},
                  {title: "Thanks", iamge: thanks},
                  {title: "Clip", iamge: clip},
                  {title: "Setting", iamge: dots},]
  const comment = [{name: "@blue001", title: "comment 1", time: "1 month"},
                  {name: "@blue002", title: "comment 2", time: "2 month"},
                  {name: "@blue003", title: "comment 3", time: "3 month"},
                  {name: "@blue004", title: "comment 4", time: "4 month"},
                  {name: "@blue005", title: "comment 5", time: "5 month"},
                  {name: "@blue006", title: "comment 6", time: "6 month"}]

  const data = videos.filter((item) => item.authorId !== id)

  return(
    <>
      <div className="w-11/12 mx-auto my-10 flex">
        <div className="mr-6">
          <Image className="rounded-xl" alt="video" src={video[0].videoThumbnails[0].url} width={video[0].videoThumbnails[0].width} height={video[0].videoThumbnails[0].height}/>
          <p className="text-white my-2 font-bold text-2xl">{video[0].title}</p>
          <div className="flex justify-between">
            <div className="flex items-center">
              <Image alt="img-channel" src={channel} className="rounded-full w-10 h-10"/>
              <div className="mx-3">
                <p className="text-white font-bold">{video[0].author}</p>
                <p className="text-gray-500 text-sm">1k subscribers</p>
              </div>
              <p className="bg-white p-2 text-sm ml-2 cursor-pointer font-bold rounded-full hover:bg-opacity-90">subscribe</p>
            </div>
            <div>
              <div className="flex">
                {option.map((item, index) => {return(
                  <div className="relative group" key={index}>
                    <p className="rounded-full w-10 h-10 ml-2 bg-gray-700 hover:bg-gray-500 cursor-pointer flex items-center justify-center">{<Image src={item.iamge} width={20} height={20}/>}</p>
                    <p className="absolute p-2 bg-lightgray rounded-lg -bottom-12 -right-1 text-white font-bold hidden group-hover:block">{item.title}</p>
                  </div>
                )})}
              </div>
            </div>
          </div>
          <div className="bg-lightgray p-2 rounded-lg text-white mt-4">
            <div className="text-sm">
              <span className="mr-4">{video[0].viewCount}</span>
              <span>{video[0].publishedText}</span>
            </div>
            <div className="mt-4">" This is a description "</div>
          </div>
          <p className="my-4 text-2xl font-bold text-white">{comment.length} Comments</p>
          {comment.map((item, index) => {
            return(
              <div className="flex justify-between mb-5" key={index}>
                <div className="flex">
                  <Image alt="img-channel" src={channel} className="rounded-full w-10 h-10"/>
                  <div className="text-white ml-4">
                    <p><span className="text-sm">{item.name}</span> <span className="ml-2 text-gray-500">{item.time} ago</span></p>
                    <p>{item.title}</p>
                    <div className="flex mt-[2px] items-center">
                      <div className="rounded-full w-8 h-8 bg-gray-700 hover:bg-gray-500 cursor-pointer flex items-center justify-center"><Image src={like} width={18} height={18} /></div>
                      <div className="rounded-full w-8 h-8 ml-2 bg-gray-700 hover:bg-gray-500 cursor-pointer flex items-center justify-center"><Image src={dislike} width={18} height={18} /></div>
                      <p className="p-2 hover:bg-gray-700 ml-2 rounded-full cursor-pointer text-sm">Replay</p>
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer my-auto h-9 w-9 rounded-full flex justify-center items-center hover:bg-gray-500 hover:rotate-90 transition">
                  <Image alt="setting" src={dotsy} width={26} height={26} />
                </div>
              </div>
            )
          })}
        </div>
        <div>
          {data.map((item) => {
            return(
              <Link key={item.authorId} href={`/watch/watch=${item.authorId}`}>
                <div className="p-2 cursor-pointer rounded-lg hover:bg-opacity-30 hover:bg-blue-500 flex">
                  <Image alt="img-video" src={item.videoThumbnails[5].url} width={item.videoThumbnails[5].width} height={item.videoThumbnails[5].height} className="rounded-lg" />
                  <div className="flex justify-between text-sm mt-2">
                    <div className="flex">
                      <div className="ml-2 mr-2">
                        <p className="text-white w-56 truncate">{item.title}</p>
                        <div className="group">
                          <p className="text-gray-500 hover:text-white">{item.author}</p> 
                        </div>
                        <p className="text-gray-500 hover:text-white"><span>{item.viewCount} <span className="mx-4">|</span> {item.publishedText}</span></p>
                        <p className="text-gray-500 hover:text-white">17:22 Timing Video</p>
                      </div>
                    </div>
                    <Image alt="dots" src={dotsy} className="h-8 hover:transition hover:rotate-90 my-auto"/>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Watch;