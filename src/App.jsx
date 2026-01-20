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
            <li className="hover:text-blue-400"><a href="#news">News</a></li>
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
        <h1 className="font-bold text-5xl italic dark:text-white mt-12 mb-22 text-center">RIDERS TEAM</h1>
        <div className="relative flex">
          <img src="diggia.png" className="h-8/12 z-20" alt="" />
          <div className="mt-34 ml-48 mb-32">
            <div className="absolute top-12 right-2 z-30">
              <img src="italian.png" className="float-left h-38 mr-4 rounded-2xl" alt="" />
              <h1 className=" text-6xl font-extrabold leading-tight dark:text-white">FABIO DI GIANNANTONIO</h1>
            </div>
            <div className="absolute z-10 top-42 left-12 pl-96 mt-18 bg-linear-to-l from-white to-gray-800 text-white dark:text-black dark:bg-linear-to-r dark:from-white dark:to-white/50 p-4 h-96 right-0 rounded-lg">
              <img src="49.png" className="float-left h-38 mr-5 mt-2 mb-5" alt="" />
              <ul className="text-md">
                <li><span className="font-bold">Rider Name :</span> Fabio Di Gianantonio</li><hr className="my-3"></hr>
                <li><span className="font-bold">Nationality :</span> Italy</li><hr className="my-3"></hr>
                <li><span className="font-bold">Date of Birth :</span> 10/10/1998</li><hr className="my-3"></hr>
                <li><span className="font-bold">Place of Birth :</span> Rome, Italy</li><hr className="my-3"></hr>
                <li><span className="font-bold">Number :</span> FD49</li><hr className="my-3"></hr>
                <li><span className="font-bold">Team :</span> Pertamina Enduro VR46 Racing Team</li><hr className="my-3"></hr>
                <li><span className="font-bold">Bike :</span> Ducati</li>
              </ul>
            </div>
          </div>
          <div className="absolute bottom-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
