import illGallery from "./assets/svg/illustration-our-memories.svg";
import illBird from "./assets/svg/illustration-bird-valentine.svg";
import illQuiz from "./assets/svg/illlustration-quiz.svg";
import illNote from "./assets/svg/illustration-notepad.svg";
// import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "./libs/variants";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [splashScreen, setSplashScreen] = useState(false);

  useEffect(() => {
    setSplashScreen(true);
    setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
  }, []);
  return splashScreen ? (
    <Loader />
  ) : (
    <main className="bg-[url('./assets/img/bg-home.jpg')] bg-cover bg-no-repeat min-h-screen">
      <div className="container h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-rows-2 grid-cols-3 gap-4 h-96">
            <motion.div
              variants={fadeIn("right")}
              initial={"hidden"}
              animate={"show"}
              className="bg-[#AA00FF] row-span-2 flex flex-col gap-4 p-10 rounded-lg shadow-md items-center justify-center text-white"
            >
              <h2 className="text-xl font-bold">Our Memories</h2>
              <ul className="list-disc list-inside text-sm">
                <li>Beautiful Gallery</li>
                <li>Memories</li>
              </ul>
              <Link to="/gallery">
                <button className="bg-purple-700 px-3 w-full py-2 rounded-lg hover:bg-purple-800">
                  Gallery
                </button>
              </Link>
              <img src={illGallery} alt="gallery-illustration" />
            </motion.div>
            <motion.div
              variants={fadeIn("down")}
              initial={"hidden"}
              animate={"show"}
              className="bg-[#D81B60] text-white flex flex-col rounded-lg shadow-md p-10 justify-center"
            >
              <h2 className="text-xl font-bold max-w-[100px] leading-5">
                Valentine's Day
              </h2>
              <img
                src={illBird}
                alt="illustration-bird"
                width={150}
                className="-mt-4"
              />
              <div className="flex justify-between gap-2">
                <p className="text-2xl max-w-[100px] leading-6">
                  Happy Valentine
                </p>
                <Link to="/valentine">
                  <button
                    className="bg-pink-700 rounded-lg px-4 py-2 hover:bg-pink-800 disabled:cursor-no-drop"
                    disabled
                  >
                    {/* <IoIosArrowRoundForward size={25} /> */}
                    Coming Soon
                  </button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left")}
              initial={"hidden"}
              animate={"show"}
              className="bg-[#4CAF50] text-white flex flex-col rounded-lg shadow-md items-center justify-center"
            >
              <img src={illQuiz} alt="illustration-quiz" width={150} />
              <Link to="/quiz">
                <button
                  className="bg-green-700 rounded-lg px-4 py-2 hover:bg-green-800 disabled:cursor-no-drop"
                  disabled
                >
                  {/* Quiz */}
                  Coming Soon
                </button>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial={"hidden"}
              animate={"show"}
              className="bg-[#F4FF81] col-span-2 flex rounded-lg gap-4 shadow-md items-center justify-center"
            >
              <img src={illNote} alt="illustration-notepad" width={200} />
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">Notepad</h2>
                <p>Read oue notes and create note!</p>
                <Link to="/notepad">
                  <button
                    className="bg-yellow-300 rounded-lg px-4 py-2 hover:bg-yellow-400 disabled:cursor-no-drop"
                    disabled
                  >
                    {/* Create Note */}
                    Coming Soon
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
