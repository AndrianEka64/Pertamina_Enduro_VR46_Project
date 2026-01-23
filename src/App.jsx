import { useState } from "react";
import Fabio from "./Fabio2";
import Franco from "./Franco2";

const StatCard = ({ value, label }) => (
  <div className="h-44 w-44 rounded-tr-4xl rounded-bl-4xl bg-linear-to-b from-gray-700 to-black 
    border-2 border-yellow-500 shadow-lg hover:scale-115 transition duration-300
    flex flex-col items-center justify-center hover:shadow-2xl dark:shadow-yellow-300">
    <h2 className="text-white text-7xl font-bold">{value}</h2>
    <p className="text-white font-bold tracking-widest mt-2">{label}</p>
  </div>
);
const WideStatCard = ({ value, label }) => (
  <div className="h-44 w-96 rounded-tr-4xl rounded-bl-4xl bg-linear-to-t from-gray-600 to-black 
    border-2 border-yellow-500 shadow-lg hover:scale-115 transition duration-300
    flex flex-col items-center justify-center hover:shadow-2xl dark:shadow-yellow-500">
    <p className="text-white font-bold tracking-widest">{label}</p>
    <h2 className="text-white text-7xl font-bold">{value}</h2>
  </div>
);

function App() {
  const [kondisiAktif, setkondisiAktif] = useState("fabio");
  const description = "The Pertamina Enduro VR46 Racing Team is a professional MotoGP team founded and owned by nine-time World Champion Valentino Rossi. Backed by title sponsor Pertamina Enduro and powered by Ducati Desmosedici machinery, the team competes in the MotoGP World Championship with a strong focus on performance, innovation, and rider development, embodying the long-term vision of the VR46 Riders Academy.";
  return (
    <>
      <nav className="bg-linear-to-bl from-yellow-300 to-white fixed top-0 right-0 left-0 z-50 dark:bg-linear-to-bl dark:from-yellow-300 dark:to-black">
        <div className="container mx-auto sm:flex justify-between py-4">
          <img src="lgo_atas.png" className="h-10" alt="" />
          <ul className="flex text-gray-800 dark:text-white font-bold text-xl space-x-10 pt-1 justify-center">
            <li className="hover:text-blue-400"><a href="#home">Home</a></li>
            <li className="hover:text-blue-400"><a href="#about">About</a></li>
            <li className="hover:text-blue-400"><a href="#riders">Riders</a></li>
            <li className="hover:text-blue-400"><a href="#merchandise">Merchandise</a></li>
          </ul>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cart</button>
        </div>
      </nav>
      <header id="home" className="relative h-screen w-full overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover" src="motogp.mp4" autoPlay loop muted playsInline></video>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-45 left-24 max-w-2xl text-white space-y-6 backdrop-blur-xs p-6 rounded-lg">
          <h1 className="text-5xl font-bold leading-tight text-shadow-lg">PERTAMINA ENDURO VR46<br />RACING TEAM</h1>
          <p className="text-lg text-white">Official team information, rider profiles, and exclusive VR46 merchandise</p>
          <div className="flex gap-4 pt-4">
            <a href="#riders" className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition">Meet the Riders</a>
            <a href="#merchandise" className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black transition">Shop Merchandise</a>
          </div>
        </div>
      </header>
      <div className="dark:bg-black ">
        <h1 id="about" className="font-bold text-5xl italic dark:text-white w-96 text-center p-2 mt-15 rounded-tr-4xl border-t-2 border-b-2 border-r-2 border-yellow-300"><span className="text-yellow-300">ABOUT</span> TEAM</h1>
        <div className="container mx-auto px-4 pb-28 border-t border-r rounded-tr-4xl border-yellow-300">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img src="foto1.jpg" className="w-full rounded-lg" alt="" />
            <div className="dark:text-white space-y-6">
              <h2 className="text-3xl text-amber-300 font-bold italic">Pertamina Enduro VR46 Racing Team</h2>
              <p className="text-lg text-justify indent-8">{description}</p>
              <div className="flex gap-4 pt-4">
                <a href="#riders" className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition">Meet the Riders</a>
                <a href="#merchandise" className="border dark:border-white dark:text-white font-semibold px-6 py-3 hover:bg-yellow-600 rounded-full dark:hover:bg-white hover:text-black transition">Shop Merchandise</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-radial-[at_50%_50%] from-yellow-300 to-black to-80%">
        <div className="container mx-auto px-6 py-10 relative border-t border-l rounded-tl-4xl border-yellow-300">
          <h1 className="text-center text-7xl font-extrabold italic text-amber-300 ">SEASON 2025 STATS</h1>
          <div className="grid grid-cols-3 items-center gap-10">
            <div className="grid grid-cols-2  justify-items-end">
              <StatCard value="4" label="WINS"></StatCard>
              <StatCard value="21" label="PODIUMS"></StatCard>
            </div>
            <div className="flex justify-center z-10">
              <img src="vr46.webp" className="w-95" alt="VR46 Bike" />
            </div>
            <div className="grid grid-cols-2 justify-items-start">
              <StatCard value="0" label="TITLES" ></StatCard>
              <StatCard value="P3" label="STANDINGS" ></StatCard>
            </div>
          </div>
          <div className="flex justify-between px-20 pb-20 -mt-50">
            <WideStatCard value="13" label="DNF" ></WideStatCard>
            <WideStatCard value="493" label="TOTAL POINTS" ></WideStatCard>
          </div>
        </div>
      </div>
      <div className="dark:bg-radial-[at_0%_50%] from-yellow-300 to-black to-65% ">
        <div id="riders" className="container mx-auto pb-35 border-b border-r rounded-tr-4xl rounded-br-4xl border-yellow-300 ot-10">
          <h1 className="font-bold text-5xl italic dark:text-white text-center border-t-2 border-b-2 border-l-2 bg-linear-to-b from-yellow-300 to-yellow-100 dark:bg-none rounded-bl-4xl rounded-tr-4xl border-amber-400 p-2"><span className="text-yellow-300">RIDERS</span> TEAM</h1>
          <div className="flex justify-end mb-12">
            <div className="flex border-l-2 border-b-2 rounded-bl-4xl border-yellow-400 overflow-hidden">
              <button onClick={() => setkondisiAktif("fabio")} className={`px-8 py-2 dark:text-white hover:bg-yellow-400/20 ${kondisiAktif === "fabio" ? "bg-red-600  text-white font-bold" : ""}`}>
                Fabio
              </button>
              <button onClick={() => setkondisiAktif("franco")} className={`px-8 py-2 dark:text-white hover:bg-yellow-400/20 ${kondisiAktif === "franco" ? "bg-red-600 text-white font-bold" : ""}`}>
                Franco
              </button>
            </div>
          </div>
          {kondisiAktif === "fabio" && <Fabio />}
          {kondisiAktif === "franco" && <Franco />}
        </div>
      </div>
      <div className="dark:bg-radial-[at_100%_50%] from-yellow-300 to-black to-65% ">
        <div className="container mx-auto pb-35 border-b border-l rounded-bl-4xl border-yellow-300 ot-10">
          <h1 className="font-bold text-5xl italic dark:text-white w-96 text-center p-2 rounded-br-4xl border-t-2 border-b-2 border-r-2 border-yellow-300">MERCHANDISE</h1>
          <div id="merchandise" className="container mx-auto px-4">
            <div className="flex justify-end">
              <button className="mt-4 object-right bg-yellow-300 hover:bg-yellow-600 text-black p-3 font-bold mb-4 rounded-lg">View All</button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-300 border-2 border-gray-500 rounded-lg shadow-lg relative">
                <div className="absolute top-0 right-0">
                  <div className="bg-red-600 rounded-bl-lg rounded-tr-lg">
                    <h1 className="text-white font-sans p-2 text-sm">14%</h1>
                  </div>
                </div>
                <div className="bg-white w-full h-64 overflow-hidden rounded-t-lg">
                  <img src="merch1.jpg" alt="merchandise" className="transition duration-300 w-full h-64 object-cover object-top hover:scale-105 " />
                </div>
                <div className="container mx-auto p-5">
                  <h2 className="text-xl font-bold text-black">Pertamina Enduro VR46 Racing Team T-Shirt</h2>
                  <div className="flex">
                    <p className="text-red-600 font-bold mt-2 mr-2">$29.99</p>
                    <p className="text-gray-600 font-bold mt-2 line-through text-sm">$35</p>
                  </div>
                  <button className="mt-4 w-full bg-red-500 hover:bg-red-700 text-white py-2 rounded-full">Add to cart</button>
                </div>
              </div>
              <div className="bg-gray-300 border-2 border-gray-500 rounded-lg shadow-lg relative">
                <div className="absolute top-0 right-0">
                  <div className="bg-red-600 rounded-bl-lg rounded-tr-lg">
                    <h1 className="text-white font-sans p-2 text-sm">14%</h1>
                  </div>
                </div>
                <div className="bg-white w-full h-64 overflow-hidden rounded-t-lg">
                  <img src="merch2.webp" alt="merchandise" className="transition duration-300 w-full h-64 object-cover object-top hover:scale-105" />
                </div>
                <div className="container mx-auto p-5">
                  <h2 className="text-xl font-bold text-black">Pertamina Enduro VR46 Racing Team T-Shirt</h2>
                  <div className="flex">
                    <p className="text-red-600 font-bold mt-2 mr-2">$29.99</p>
                    <p className="text-gray-600 font-bold mt-2 line-through text-sm">$35</p>
                  </div>
                  <button className="mt-4 w-full bg-red-500 hover:bg-red-700 text-white py-2 rounded-full">Add to cart</button>
                </div>
              </div>
              <div className="bg-gray-300 border-2 border-gray-500 rounded-lg shadow-lg relative">
                <div className="absolute top-0 right-0">
                  <div className="bg-red-600 rounded-bl-lg rounded-tr-lg">
                    <h1 className="text-white font-sans p-2 text-sm">14%</h1>
                  </div>
                </div>
                <div className="bg-white w-full h-64 overflow-hidden rounded-t-lg">
                  <img src="merch3.webp" alt="merchandise" className="transition duration-300 w-full h-64 object-cover object-center hover:scale-105" />
                </div>
                <div className="container mx-auto p-5">
                  <h2 className="text-xl font-bold text-black">Pertamina Enduro VR46 Racing Team T-Shirt</h2>
                  <div className="flex">
                    <p className="text-red-600 font-bold mt-2 mr-2">$29.99</p>
                    <p className="text-gray-600 font-bold mt-2 line-through text-sm">$35</p>
                  </div>
                  <button className="mt-4 w-full bg-red-500 hover:bg-red-700 text-white py-2 rounded-full">Add to cart</button>
                </div>
              </div>
              <div className="bg-gray-300 border-2 border-gray-500 rounded-lg shadow-lg relative">
                <div className="absolute top-0 right-0">
                  <div className="bg-red-600 rounded-bl-lg rounded-tr-lg">
                    <h1 className="text-white font-sans p-2 text-sm">14%</h1>
                  </div>
                </div>
                <div className="bg-white w-full h-64 overflow-hidden rounded-t-lg">
                  <img src="merch1.jpg" alt="merchandise" className="transition duration-300 w-full h-64 object-cover object-center hover:scale-105" />
                </div>
                <div className="container mx-auto p-5">
                  <h2 className="text-xl font-bold text-black">Pertamina Enduro VR46 Racing Team T-Shirt</h2>
                  <div className="flex">
                    <p className="text-red-600 font-bold mt-2 mr-2">$29.99</p>
                    <p className="text-gray-600 font-bold mt-2 line-through text-sm">$35</p>
                  </div>
                  <button className="mt-4 w-full bg-red-500 hover:bg-red-700 text-white py-2 rounded-full">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mb-15">
        <h1 className="font-bold text-5xl italic dark:text-white w-96 text-center p-2 rounded-bl-4xl border-t-2 border-b-2 border-l-2 border-yellow-300"><span className="text-yellow-300">CONTACT</span> US</h1>
      </div>
      <div className="container mx-auto px-4">
        <footer className="bg-gray-800 text-white py-6 mt-24 rounded-t-lg shadow-inner">
          <div className="text-center">
            <p>&copy; 2024 Pertamina Enduro VR46 Racing Team. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
export default App
