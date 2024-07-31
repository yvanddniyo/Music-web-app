import { albumsData, songsData } from "../assets/frontend-assets/assets"
import AlbumItem from "./AlbumItem"
import Navbar from "./Navbar"
import SongsItem from "./SongsItem"


const DisplayHome = () => {
  return (
    <>
        <Navbar />
        <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
            <div className="flex overflow-auto">
            {albumsData.map((item, index) => (
                <AlbumItem 
                 key={index}
                 name= {item.name}
                 image= {item.image}
                 desc= {item.desc}
                 id = {item.id}
                />
            ))}
            </div>
        </div>
        <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">Today Biggest hits</h1>
            <div className="flex overflow-auto">
            {songsData.map((item, index) =>(
                <SongsItem 
                key={index}
                 name = {item.name}
                 image = {item.image}
                 desc = {item.desc}
                 id= {item.id}
                />
            ))}
            </div>
        </div>
    </>
  )
}

export default DisplayHome