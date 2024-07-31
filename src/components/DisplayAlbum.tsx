import { albumsData, assets, songsData } from "../assets/frontend-assets/assets";
import Navbar from "./Navbar"
import { useParams } from "react-router-dom"


const DisplayAlbum = () => {
    const { id } = useParams()
    // @ts-ignore
    const albumData = albumsData[id]
    console.log(albumData);

  return (
    <>
     <Navbar />
     <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={albumData.image} alt="" className="w-48 rounded" />

        <div className="flex flex-col">
            <p className="">Playlist</p>
            <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
            <h4 className="">{albumData.desc}</h4>
            <p className="mt-1">
                <img src={assets.spotify_logo} alt="" className="inline-block w-5 ml-2" />
                <b className="font-bold">Spotify</b>
                . 1,333,154
                . <b className="font-bold"> 50 songs, </b>
                about 2 hr 30 min
            </p>
        </div>
     </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
            <p className="mr-4">
                <b className="">#</b>
                Title
            </p>
            <p className="">
                Album
            </p>
            <p className="hidden sm:block">
                Date Added
            </p>
            <img src={assets.clock_icon} alt="" className="m-auto w-4" />
        </div>
        <hr />
        {
            songsData.map((item, index) => (
                <div key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                    <p className="text-white">
                        <b className="mr-4 text-[a7a7a7]">{index + 1}</b>
                        <img src={item.image} alt="" className="inline w-10 mr-4" />
                        {item.name}
                    </p>
                    <p className="text-[15px]">
                        {albumData.name}
                    </p>
                    <p className="text-[15px] hidden sm:block">5 days ago</p>
                    <p className="text-[15px] text-center">{item.duration}</p>
                </div>
            ))
        }
    </>
  )
}

export default DisplayAlbum