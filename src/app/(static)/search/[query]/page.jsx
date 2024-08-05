import Image from "next/image";
import image from "./image/img-channel.jpg"
import dots from "./image/dots.png"
import Link from "next/link";

const Search = async ({ params }) => {
  const query = params.query.substring(8)

  const res = await fetch('https://invidious.protokolla.fi/api/v1/popular?hl=en')
  const videos = await res.json() 
  
  const search = videos.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))

  return(
    <div className="mt-5">
      {search.map((item) => {
        return(
          <Link key={item.authorId} href={`/watch/watch=${item.authorId}`}>
            <div className="w-3/5 mx-auto flex justify-between my-4 hover:bg-opacity-30 hover:bg-green-500 p-2 rounded-lg sm:mx-0 sm:mb-6 sm:w-full sm:p-0">
              <div className="flex sm:block">
                <Image alt="image" src={item.videoThumbnails[3].url} width={item.videoThumbnails[3].width} height={item.videoThumbnails[3].height} className="rounded-lg sm:rounded-none"/>
                <div className="ml-2 sm:mx-2 sm:mt-2">
                  <p className="text-white text-xl sm:text-base">{item.title}</p>
                  <div className="flex items-center my-5 sm:my-1">
                    <Image alt="channel" src={image} className="rounded-full w-8 h-8 sm:w-5 sm:h-5"/>
                    <p className="text-gray-500 hover:text-white ml-4 sm:ml-2">{item.author}</p> 
                  </div>
                  <p className="text-gray-500 hover:text-white"><span>{item.viewCount} views <span className="mx-2">|</span> {item.publishedText}</span></p>
                </div>
              </div>
              <div>
                <Image alt="dots" src={dots} className="h-8 hover:transition hover:rotate-90 cursor-pointer sm:hidden"/>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Search;