import { useEffect, useState } from "react";
import { FaImage, FaVideo } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ModalImage from "react-modal-image";
import Loader from "./Loader";
import images from "../libs/gallery/images";
import videos from "../libs/gallery/videos";

const Gallery = () => {
  const [splashScreen, setSplashScreen] = useState(false);
  const [foto, setFoto] = useState(false);
  const [video, setVideo] = useState(false);
  useEffect(() => {
    setFoto(true);
    setSplashScreen(true);
    setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
  }, []);
  return splashScreen ? (
    <Loader />
  ) : (
    <div className="h-screen bg-[url('./assets/img/bg-gallery.jpg')] bg-cover bg-no-repeat">
      <Link to="/" className="absolute top-5 left-5 text-white">
        Back
      </Link>
      <div className="container flex-col gap-4 flex h-full justify-center items-center">
        <div className="flex text-pink-500 gap-4">
          <button
            className="bg-white hover:bg-slate-300 px-8 py-8 shadow-lg rounded-lg"
            onClick={() => setFoto(true)}
          >
            <FaImage />
          </button>
          <button
            className="bg-white hover:bg-slate-300 px-8 py-8 shadow-lg rounded-lg"
            onClick={() => {
              setFoto(false);
              setVideo(true);
            }}
          >
            <FaVideo />
          </button>
        </div>
        <div className="border-2 border-white overflow-y-auto grid w-[600px] h-[368px] grid-cols-5 p-4 rounded-lg gap-4">
          {foto
            ? images.map((img, id) => (
                <ModalImage
                  small={`loved/${img.fileName}`}
                  smallSrcSet={`loved/${img.fileName}`}
                  large={`loved/${img.fileName}`}
                  alt={img.fileName}
                  className="rounded-lg shadow-lg object-cover w-[100px] h-[100px]"
                  key={id}
                />
              ))
            : video &&
              (videos.length > 0 ? (
                videos.map((video, id) => (
                  <img
                    src="https://placehold.co/100x100?text=vid"
                    alt="placehold"
                    className="rounded-lg shadow-lg"
                  />
                ))
              ) : (
                <p className="text-white text-xs">Video Not Found</p>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
