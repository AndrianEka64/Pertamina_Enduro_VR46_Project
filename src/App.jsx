function App() {
  const description = "The Pertamina Enduro VR46 Racing Team is a professional MotoGP team founded and owned by legendary nine-time World Champion Valentino Rossi, representing the culmination of the VR46 Riders Academy's long-term vision in elite motorcycle racing. Backed by Indonesian title sponsor Pertamina Enduro and powered by Ducati Desmosedici machinery, the team competes in the MotoGP World Championship with a strong focus on performance, innovation, and rider development. Since its debut in the premier class, the team has rapidly gained recognition for its competitiveness, strategic excellence, and modern racing identity, combining Rossi's vast experience and racing philosophy with cutting-edge technology and a global partnership network.";
  return (
    <>
      <nav className="bg-linear-to-l from-yellow-300 to-white fixed top-0 right-0 left-0 z-50 dark:bg-linear-to-l dark:from-yellow-300 dark:to-black">
        <div className="container mx-auto sm:flex justify-between py-4">
          <img src="lgo_atas.png" className="h-10" alt="" />
          <ul className="flex text-gray-800 dark:text-white font-bold text-xl space-x-10 pt-1 justify-center">
            <li className="hover:text-blue-400"><a href="#home">Home</a></li>
            <li className="hover:text-blue-400"><a href="#about">About</a></li>
            <li className="hover:text-blue-400"><a href="#riders">Riders</a></li>
            <li className="hover:text-blue-400"><a href="#merchandise">Merchandise</a></li>
          </ul>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Subscribe</button>
        </div>
      </nav>
      <header id="home" className="relative h-[76vh] w-full overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover" src="motogp.mp4" autoPlay loop muted playsInline></video>
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="absolute bottom-0 left-24">
          <h2 className="container text-white text-4xl font-bold p-4 text-shadow-lg/70">PERTAMINA ENDURO VR46 RACING TEAM</h2>
        </div>
      </header>
      <div id="about" className="container mx-auto px-4 my-14">
        <img src="foto1.jpg" className="w-lg rounded-lg mr-5 float-left" alt="" />
        <div className="dark:text-white">
          <h1 className="text-3xl font-bold italic">Pertamina Enduro VR46 Racing Team – MotoGP’s Rising Force</h1><hr className="my-3"></hr>
          <p className="text-justify text-lg">
            {description}
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex relative items-center justify-end">
          <div className="absolute top-34 left-0 bg-linear-to-l from-gray-300 to-gray-800 text-white dark:text-black dark:bg-linear-to-l dark:from-white dark:to-white/50 right-64 pl-28 p-6 h-96 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-5">Pertamina Enduro VR46 Racing Team – MotoGP Total Stats</h1>
            <img src="logovr46.jpg" className="h-32 float-left mr-4" alt="" />
            <ul className="mt-6">
              <li><span className="font-bold">Team Name:</span> Pertamina Enduro VR46 Racing Team</li>
              <li><span className="font-bold">Founder:</span> Valentino Rossi</li>
              <li><span className="font-bold">Sponsor:</span> Pertamina Enduro</li>
              <li><span className="font-bold">Engine:</span> Ducati Desmosedici</li>
              <li><span className="font-bold">Championship:</span> MotoGP World Championship</li>
            </ul>
            <hr className="my-4 mr-42"></hr>
            <ul>
              <li><span className="font-bold">Race Winner : </span> 4 </li>
              <li><span className="font-bold">Podium Finishes : </span> 21 </li>
              <li><span className="font-bold">Riders’ World Titles : </span> 0 </li>
              <li><span className="font-bold">Team Championships : </span> 0 </li>
              <li><span className="font-bold">Constructor Titles : </span> 0 </li>
            </ul>
          </div>
          <img src="vr46.webp" className="w-96 relative z-10 object-left" alt="" />
        </div>
      </div>
      <div id="riders" className="container mx-auto px-4">
        <h1 className="font-bold text-5xl italic dark:text-white mt-12 mb-22 text-center">TEAM RIDERS</h1>
        <div className="relative flex">
          <img src="diggia.png" className="h-8/12 z-20" alt="" />
          <div className="mt-34 ml-48 mb-32">
            <div className="absolute top-12 right-18 z-30">
              <img src="49.png" className="float-left h-32 mr-5 mt-2" alt="" />
              <h1 className=" text-6xl font-extrabold leading-tight text-black dark:text-white">FABIO DI GIANNANTONIO</h1>
            </div>
            <div className="absolute z-10 top-42 left-12 pl-96 mt-18 bg-linear-to-l from-white to-gray-800 text-white dark:text-black dark:bg-linear-to-r dark:from-white dark:to-white/50 p-4 h-96 right-0 rounded-lg">
              <img src="italian.png" className="float-left h-38 mr-5 rounded-2xl" alt="" />
              <ul className="text-md">
                <li><span className="font-bold">Rider Name :</span> Fabio Di Gianantonio</li><hr className="my-3"></hr>
                <li><span className="font-bold">Nationality :</span> Italy</li><hr className="my-3"></hr>
                <li><span className="font-bold">Date of Birth :</span> 10/10/1998</li><hr className="my-3"></hr>
                <li><span className="font-bold">Place of Birth :</span> Rome, Italy</li><hr className="my-3"></hr>
                <li><span className="font-bold">Number :</span> FD49</li><hr className="my-3"></hr>
                <li><span className="font-bold">Team :</span> Pertamina Enduro VR46 Racing Team</li><hr className="my-3"></hr>
              </ul>
            </div>
          </div>
          <div className="absolute -bottom-16 left-12 z-30">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-center">
              <div className="bg-gray-800 transition duration-300  hover:scale-115 h-44 w-44 rounded-xl hover:shadow-2xl dark:shadow-white p-6">
                <div className="text-center">
                  <h1 className="text-white font-sans text-md">World Championship</h1>
                  <h1 className="text-white font-bold text-7xl">0</h1>
                </div>
              </div>
              <div className="bg-gray-800 transition duration-300  hover:scale-115 h-44 w-44 rounded-xl hover:shadow-2xl dark:shadow-white p-6">
                <div className="text-center">
                  <h1 className="text-white font-sans text-md">Season</h1>
                  <h1 className="text-white font-bold text-7xl">11</h1>
                </div>
              </div>
              <div className="bg-gray-800 transition duration-300  hover:scale-115 h-44 w-44 rounded-xl hover:shadow-2xl dark:shadow-white p-6">
                <div className="text-center">
                  <h1 className="text-white font-sans text-md">Victories</h1>
                  <h1 className="text-white font-bold text-7xl">4</h1>
                </div>
              </div>
              <div className="bg-gray-800 transition duration-300  hover:scale-115 h-44 w-44 rounded-xl hover:shadow-2xl dark:shadow-white p-6">
                <div className="text-center">
                  <h1 className="text-white font-sans text-md">Podiums</h1>
                  <h1 className="text-white font-bold text-7xl">28</h1>
                </div>
              </div>
              <div className="bg-gray-800 transition duration-300  hover:scale-115 h-44 w-44 rounded-xl hover:shadow-2xl dark:shadow-white p-6">
                <div className="text-center">
                  <h1 className="text-white font-sans text-md">Poles</h1>
                  <h1 className="text-white font-bold text-7xl">2</h1>
                </div>
              </div>
              <div className="bg-gray-800 transition duration-300  hover:scale-115 h-44 w-44 rounded-xl hover:shadow-2xl dark:shadow-white p-6">
                <div className="text-center">
                  <h1 className="text-white font-sans text-md">Races</h1>
                  <h1 className="text-white font-bold text-7xl">186</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-64 px-4">
        <div className="relative flex">
          <img src="morbido.png" className="h-8/12 z-20" alt="" />
          <div className="mt-34 ml-48 mb-32">
            <div className="absolute top-12 right-38 z-30">
              <img src="21.png" className="float-left h-38 mr-5 mt-2" alt="" />
              <h1 className=" text-6xl font-extrabold leading-tight text-black dark:text-white">FRANCO MORBIDELLI</h1>
            </div>
            <div className="absolute z-10 top-42 left-12 pl-96 mt-18 bg-linear-to-l from-white to-gray-800 text-white dark:text-black dark:bg-linear-to-r dark:from-white dark:to-white/50 p-4 h-96 right-0 rounded-lg">
              <img src="italian.png" className="float-left h-38 mr-5 rounded-2xl" alt="" />
              <ul className="text-md">
                <li><span className="font-bold">Rider Name :</span> Franco Morbidelli</li><hr className="my-3"></hr>
                <li><span className="font-bold">Nationality :</span> Italy</li><hr className="my-3"></hr>
                <li><span className="font-bold">Date of Birth :</span> 04/12/1994</li><hr className="my-3"></hr>
                <li><span className="font-bold">Place of Birth :</span> Rome, Italy</li><hr className="my-3"></hr>
                <li><span className="font-bold">Number :</span> FM21</li><hr className="my-3"></hr>
                <li><span className="font-bold">Team :</span> Pertamina Enduro VR46 Racing Team</li><hr className="my-3"></hr>
              </ul>
            </div>
          </div>
          <div className="absolute -bottom-16 left-12 z-30">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-center">
              <div className="bg-gray-800 transition duration-300  hover:scale-115 h-44 w-44 rounded-xl hover:shadow-2xl dark:shadow-white p-6">
                <div className="text-center">
                  <h1 className="text-white font-sans text-md">World Championship</h1>
                  <h1 className="text-white font-bold text-7xl">1</h1>
                </div>
              </div>
              <div className="bg-gray-800 transition duration-300  hover:scale-115 h-44 w-44 rounded-xl hover:shadow-2xl dark:shadow-white p-6">
                <div className="text-center">
                  <h1 className="text-white font-sans text-md">Season</h1>
                  <h1 className="text-white font-bold text-7xl">13</h1>
                </div>
              </div>
              <div className="bg-gray-800 transition duration-300  hover:scale-115 h-44 w-44 rounded-xl hover:shadow-2xl dark:shadow-white p-6">
                <div className="text-center">
                  <h1 className="text-white font-sans text-md">Victories</h1>
                  <h1 className="text-white font-bold text-7xl">11</h1>
                </div>
              </div>
              <div className="bg-gray-800 transition duration-300  hover:scale-115 h-44 w-44 rounded-xl hover:shadow-2xl dark:shadow-white p-6">
                <div className="text-center">
                  <h1 className="text-white font-sans text-md">Podiums</h1>
                  <h1 className="text-white font-bold text-7xl">29</h1>
                </div>
              </div>
              <div className="bg-gray-800 transition duration-300  hover:scale-115 h-44 w-44 rounded-xl hover:shadow-2xl dark:shadow-white p-6">
                <div className="text-center">
                  <h1 className="text-white font-sans text-md">Poles</h1>
                  <h1 className="text-white font-bold text-7xl">8</h1>
                </div>
              </div>
              <div className="bg-gray-800 transition duration-300  hover:scale-115 h-44 w-44 rounded-xl hover:shadow-2xl dark:shadow-white p-6">
                <div className="text-center">
                  <h1 className="text-white font-sans text-md">Races</h1>
                  <h1 className="text-white font-bold text-7xl">213</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="merchandise" className="container mx-auto mt-64 px-4">
        <h1 className="font-bold text-5xl italic dark:text-white mt-12 mb-22 text-center">Merchandise</h1>
        <button className="mt-4 object-right bg-red-500 hover:bg-red-700 text-white p-3 font-bold mb-4 rounded-lg">View All</button>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-300 border-2 border-gray-500 rounded-lg shadow-lg relative">
            <div className="absolute top-0 right-0">
              <div className="bg-red-600 rounded-bl-lg rounded-tr-lg">
                <h1 className="text-white font-sans p-2 text-sm">14%</h1>
              </div>
            </div>
            <div className="bg-white w-full h-64 overflow-hidden rounded-t-lg">
              <img src="merch1.jpg" alt="merchandise" className="w-full h-64 object-cover object-top hover:scale-105" />
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
              <img src="merch2.webp" alt="merchandise" className="w-full h-64 object-cover object-top hover:scale-105" />
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
              <img src="merch3.webp" alt="merchandise" className="w-full h-64 object-cover object-center hover:scale-105" />
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
              <img src="merch1.jpg" alt="merchandise" className="w-full h-64 object-cover object-center hover:scale-105" />
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
    </>
  )
}

export default App
