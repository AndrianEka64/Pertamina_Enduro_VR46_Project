import { useState } from "react";
import Fabio from "./Fabio2";
import Franco from "./Franco2";

const StatCard = ({ value, label }) => (
  <div className="h-32 w-32 md:h-44 md:w-44 rounded-tr-4xl rounded-bl-4xl bg-linear-to-b from-gray-700 to-black 
    border-2 border-yellow-500 shadow-lg hover:scale-115 transition duration-300
    flex flex-col items-center justify-center hover:shadow-2xl dark:shadow-yellow-300">
    <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold">{value}</h2>
    <p className="text-white font-bold tracking-widest mt-2">{label}</p>
  </div>
);
const WideStatCard = ({ value, label }) => (
  <div className="md:h-44 md:w-96 rounded-tr-4xl rounded-bl-4xl bg-linear-to-t from-gray-600 to-black 
    border-2 border-yellow-500 shadow-lg hover:scale-115 transition duration-300
    flex flex-col items-center justify-center hover:shadow-2xl dark:shadow-yellow-500 p-5">
    <p className="text-white font-bold tracking-widest">{label}</p>
    <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold">{value}</h2>
  </div>
);

function App() {
  const [kondisiAktif, setkondisiAktif] = useState("fabio");
  const [open, setOpen] = useState(false);
  const description = "The Pertamina Enduro VR46 Racing Team is a professional MotoGP team founded and owned by nine-time World Champion Valentino Rossi. Backed by title sponsor Pertamina Enduro and powered by Ducati Desmosedici machinery, the team competes in the MotoGP World Championship with a strong focus on performance, innovation, and rider development, embodying the long-term vision of the VR46 Riders Academy.";
  return (
    <>
      <nav className="bg-linear-to-bl from-yellow-300 to-white fixed top-0 inset-x-0 z-50 dark:bg-linear-to-bl dark:from-yellow-300 dark:to-black">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <img src="lgo_atas.png" className="h-5 md:h-10" alt="" />
          <ul className="text-gray-800 dark:text-white font-bold text-xl hidden md:flex space-x-10">
            <li className="hover:text-yellow-400"><a href="#home">Home</a></li>
            <li className="hover:text-yellow-400"><a href="#about">About</a></li>
            <li className="hover:text-yellow-400"><a href="#riders">Riders</a></li>
            <li className="hover:text-yellow-400"><a href="#merchandise">Merchandise</a></li>
          </ul>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded hidden md:block">Cart</button>
          <button onClick={() => setOpen(!open)} className="md:hidden text-3xl font-bold">☰</button>
        </div>
        <div className={`md:hidden ${open ? "block" : "hidden"} bg-transparent px-6 pb-6`}>
          <ul className="flex flex-col space-y-4 font-bold text-lg dark:text-white">
            <li className="hover:text-yellow-400"><a href="#home">Home</a></li>
            <li className="hover:text-yellow-400"><a href="#about">About</a></li>
            <li className="hover:text-yellow-400"><a href="#riders">Riders</a></li>
            <li className="hover:text-yellow-400"><a href="#merchandise">Merchandise</a></li>
          </ul>
          <button className="mt-6 w-full bg-red-500 py-2 rounded">Cart</button>
        </div>
      </nav>
      <header id="home" className="relative h-screen lg:w-full overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover" src="motogp.mp4" autoPlay loop muted playsInline></video>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto">
          <div className="absolute top-40 lg:bottom-45 max-w-2xl text-white space-y-6 backdrop-blur-xs p-6 rounded-lg">
            <h1 className="text-2xl md:text-5xl font-bold leading-tight text-center md:text-start text-shadow-lg">PERTAMINA ENDURO VR46<br />RACING TEAM</h1>
            <p className="text-sm md:text-lg text-white">Official team information, rider profiles, and exclusive VR46 merchandise</p>
            <div className="flex gap-4 pt-4">
              <a href="#riders" className="bg-yellow-400 text-black font-semibold p-2 md:px-6 md:py-3 rounded-full text-md hover:bg-yellow-600 transition dark:hover:text-white">Meet the Riders</a>
              <a href="#merchandise" className="border border-white text-white font-semibold p-2 md:px-6 md:py-3 rounded-full text-md hover:bg-white hover:text-black transition">Shop Merchandise</a>
            </div>
          </div>
        </div>
      </header>
      <div className="dark:bg-black ">
        <h1 id="about" className="font-bold text-2xl md:text-5xl italic dark:text-white w-50 md:w-96 text-center p-2 mt-15 rounded-tr-4xl border-t-2 border-b-2 border-r-2 border-yellow-300"><span className="text-yellow-300">ABOUT</span> TEAM</h1>
        <div className="container mx-auto px-4 pb-28 border-t border-r rounded-tr-4xl border-yellow-300">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img src="foto1.jpg" className="mt-5 w-full rounded-lg" alt="" />
            <div className="dark:text-white space-y-6">
              <h2 className="text-xl md:text-3xl text-amber-300 font-bold italic">Pertamina Enduro VR46 Racing Team</h2>
              <p className="text-sm md:text-lg text-justify indent-8">{description}</p>
              <div className="flex gap-4 pt-4">
                <a href="#riders" className="rounded-tl-2xl text-center rounded-br-2xl border bg-linear-to-b from-yellow-300 to-yellow-600 text-black font-semibold px-6 py-3 transition dark:hover:text-white">Meet the Riders</a>
                <a href="#merchandise" className="border text-center dark:border-white dark:text-white font-semibold px-6 py-3 hover:bg-yellow-600 rounded-tr-2xl rounded-bl-2xl dark:hover:bg-white hover:text-black transition">Shop Merchandise</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-radial-[at_50%_50%] from-yellow-300 to-black to-80%">
        <div className="container mx-auto px-6 py-10 relative border-t border-l rounded-tl-4xl border-yellow-300">
          <h1 className="text-center text-5xl mb-10 md:text-7xl font-extrabold italic text-amber-300 ">SEASON 2025 STATS</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
            <div className="grid grid-cols-2 gap-6 justify-items-center order-2 lg:order-1 md:justify-items-end">
              <StatCard value="4" label="WINS"></StatCard>
              <StatCard value="21" label="PODIUMS"></StatCard>
            </div>
            <div className="flex justify-center z-10 order-1 lg:order-2">
              <img src="vr46.webp" className="w-52 sm:w-64 md:w-80 lg:w-96" alt="VR46 Bike" />
            </div>
            <div className="grid grid-cols-2 gap-6 justify-items-center order-3 lg:order-3 md:justify-items-end">
              <StatCard value="0" label="TITLES" ></StatCard>
              <StatCard value="P3" label="STANDINGS" ></StatCard>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-between px-6 md:px-20 pb-20 mt-10 md:-mt-50">
            <WideStatCard value="13" label="DNF" ></WideStatCard>
            <WideStatCard value="493" label="TOTAL POINTS" ></WideStatCard>
          </div>
        </div>
      </div>
      <div className="dark:bg-radial-[at_0%_50%] from-yellow-300 to-black to-65% ">
        <div id="riders" className="container mx-auto pb-35 border-b border-r rounded-tr-4xl rounded-br-4xl border-yellow-300 ot-10">
          <h1 className="font-bold text-2xl md:text-5xl italic dark:text-white text-center border-t-2 border-b-2 border-l-2 dark:bg-none rounded-bl-4xl rounded-tr-4xl border-amber-400 p-2"><span className="text-yellow-300">RIDERS</span> TEAM</h1>
          <div className="flex justify-end mb-12">
            <div className="flex border-l-2 border-b-2 rounded-bl-4xl border-yellow-400 overflow-hidden">
              <button onClick={() => setkondisiAktif("fabio")} className={`px-8 py-2 dark:text-white hover:bg-yellow-400/20 ${kondisiAktif === "fabio" ? "bg-red-600  text-white font-bold" : ""}`}>Fabio</button>
              <button onClick={() => setkondisiAktif("franco")} className={`px-8 py-2 dark:text-white hover:bg-yellow-400/20 ${kondisiAktif === "franco" ? "bg-red-600 text-white font-bold" : ""}`}>Franco</button>
            </div>
          </div>
          {kondisiAktif === "fabio" && <Fabio />}
          {kondisiAktif === "franco" && <Franco />}
        </div>
      </div>
      <div className="dark:bg-radial-[at_100%_50%] from-yellow-300 to-black to-65% ">
        <div className="container mx-auto pb-35 border-b border-l rounded-bl-4xl border-yellow-300 ot-10">
          <h1 className="font-bold text-2xl md:text-5xl italic dark:text-white w-50 md:w-96 text-center p-2 rounded-br-4xl border-t-2 border-b-2 border-r-2 border-yellow-300">MERCHANDISE</h1>
          <div id="merchandise" className="container mx-auto px-4">
            <div className="flex justify-end">
              <button className="mt-4 object-right bg-yellow-300 hover:bg-yellow-600 text-black p-3 font-bold mb-4 rounded-lg">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
        <h1 className="font-bold text-2xl md:text-5xl italic dark:text-white w-50 md:w-96 text-center p-2 rounded-bl-4xl border-t-2 border-b-2 border-l-2 border-yellow-300"><span className="text-yellow-300">CONTACT</span> US</h1>
      </div>
      <div className="container mx-auto px-6">
        <h1 className="text-white text-xl font-bold py-5 text-center">Get in touch with
          <span className="text-yellow-300"> Pertamina Enduro VR46 Racing Team</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <form action="#" className="space-y-4 rounded-tl-2xl rounded-br-2xl border-2 border-gray-300 p-6 bg-linear-to-b from-gray-700 to-black">
            <h1 className="text-white text-2xl font-bold py-5 text-center italic">SEND US A MESSAGE</h1>
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white" for="name">Name</label>
              <input className="p-2 mt-1 w-full border-2 border-yellow-600 rounded-lg bg-gray-700 dark:text-white hover:shadow-xl/30 hover:shadow-yellow-400 focus:shadow-yellow-400" id="name" type="text" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white" for="email">Email</label>
              <input className="p-2 mt-1 w-full border-2 border-yellow-600 rounded-lg bg-gray-700 dark:text-white hover:shadow-xl/30 hover:shadow-yellow-400 focus:shadow-yellow-400" id="email" type="email" placeholder="Your email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white" for="message">Message</label>
              <textarea className="p-2 mt-1 w-full border-2 border-yellow-600 resize-none rounded-lg bg-gray-700 dark:text-white hover:shadow-xl/30 hover:shadow-yellow-400 focus:shadow-yellow-400" id="message" rows="4" placeholder="Your message"></textarea>
            </div>
            <div className="flex justify-center">
              <button className="block w-50 rounded-tl-2xl rounded-br-2xl border bg-linear-to-b from-yellow-300 to-yellow-600 px-12 py-3 text-sm font-medium text-black transition-colors dark:hover:text-white" type="submit">Send Message</button>
            </div>
          </form>
          <div className="rounded-tr-4xl rounded-bl-4xl bg-linear-to-b from-gray-700 to-black border-2 border-white p-6">
            <div className="md:flex justify-center">
              <img src="logovr46.jpg" className="mb-5 md:w-64 order-2 md:order-1" alt="" />
              <h1 className="text-2xl font-bold italic py-4  text-center text-yellow-300 px-4 order-1 md:order-2">CONTACT INFORMATION</h1>
            </div>
            <div className="grid grid-cols-1 gap-y-4">
              <div className="rounded-tl-4xl rounded-br-4xl bg-linear-to-b from-yellow-300 to-yellow-600 border-2 border-yellow-500 shadow-lg hover:scale-115 transition duration-300 hover:shadow-2xl hover:shadow-yellow-300">
                <h1 className="text-xl font-bold italic py-4 text-black px-4">VR46@email.com</h1>
              </div>
              <div className="rounded-tl-4xl rounded-br-4xl bg-linear-to-b from-yellow-300 to-yellow-600 border-2 border-yellow-500 shadow-lg hover:scale-115 transition duration-300 hover:shadow-2xl hover:shadow-yellow-300">
                <h1 className="text-xl font-bold italic py-4 text-black px-4">Tavullia, Italy</h1>
              </div>
              <div className="rounded-tl-4xl rounded-br-4xl bg-linear-to-b from-yellow-300 to-yellow-600 border-2 border-yellow-500 shadow-lg hover:scale-115 transition duration-300 hover:shadow-2xl hover:shadow-yellow-300">
                <h1 className="text-xl font-bold italic py-4 text-black px-4">+39 0541 123456</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black border-t-2 border-yellow-400 mt-32">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-yellow-300">
            <div className="dark:text-white font-semibold">
              <img src="logovr46.jpg" className="mb-5 md:w-64" alt="" />
              <p className="text-md text-gray-300 mb-3 leading-relaxed">
                Official landing page of <span className="font-semibold text-yellow-400">
                  Pertamina Enduro VR46 Racing Team. </span>
                Explore team info, riders, stats, and official merchandise.
              </p>
            </div>
            <div className="dark:text-white p-4">
              <h3 className="text-2xl font-bold italic text-yellow-400 mb-3">NAVIGATION</h3>
              <ul className="text-gray-400 dark:text-white font-bold text-md pt-1 space-y-3 justify-center">
                <li className="hover:text-blue-400"><a href="#home">Home</a></li>
                <li className="hover:text-blue-400"><a href="#about">About</a></li>
                <li className="hover:text-blue-400"><a href="#riders">Riders</a></li>
                <li className="hover:text-blue-400"><a href="#merchandise">Merchandise</a></li>
              </ul>
            </div>
            <div className="dark:text-white p-4">
              <h3 className="text-2xl font-bold italic text-yellow-400 mb-3">TEAM</h3>
              <ul className="text-gray-800 dark:text-white font-bold text-md pt-1 space-y-3 justify-center">
                <li className="text-gray-400"><a>Foundded by Valentino Rossi</a></li>
                <li className="text-gray-400"><a>MotoGP World Championship</a></li>
                <li className="text-gray-400"><a>Ducati Desmosedici</a></li>
                <li className="text-gray-400"><a>VR46 Academy</a></li>
                <li className="text-gray-400"><a href="https://www.flaticon.com/free-icons/smart-cart" title="smart-cart icons">Smart-cart icons created by Freepik - Flaticon</a ></li>
              </ul>
            </div>
            <div className="dark:text-white p-4">
              <h3 className="text-2xl font-bold italic text-yellow-400 mb-3">FOLLOW US</h3>
              <ul className="text-gray-800 dark:text-white font-bold text-md pt-1 space-y-3 justify-center">
                <li className="text-gray-400"><a>Instagram</a></li>
                <li className="text-gray-400"><a>Tiktok</a></li>
                <li className="text-gray-400"><a>Youtube</a></li>
                <li className="text-gray-400"><a>Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-linear-to-t from-yellow-300 to-black text-white py-6  rounded-t-lg shadow-inner">
          <div className="text-center text-sm md:text-md font-semibold">
            <p>&copy; 2024 Pertamina Enduro VR46. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
export default App
