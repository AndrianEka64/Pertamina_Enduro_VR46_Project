const StatCard1 = ({ value, label }) => (
  <div className="h-38 w-40 md:h-44 md:w-44 rounded-tr-4xl rounded-bl-4xl bg-linear-to-b from-gray-700 to-black 
    border-2 border-yellow-500 shadow-lg hover:scale-115 transition duration-300
    flex flex-col items-center justify-center hover:shadow-2xl hover:shadow-yellow-300">
    <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold">{value}</h2>
    <p className="text-white font-bold mt-2">{label}</p>
  </div>
);
const Fabio = () =>{
    return(
    <div className="relative md:flex">
        <img src="diggia.png" className="h-96 lg:h-1/12 z-10 md:z-20" alt="" />
        <div className="mt-34 ml-48 mb-32">
            <div className="absolute top-4 md:top-12 right-0 md:right-18 z-30">
                <img src="49.png" className="md:float-left h-24 md:h-26 lg:h-32 mr-5 mt-2" alt="" />
                <h1 className="hidden md:block text-2xl md:text-4xl lg:text-6xl md:font-extrabold md:leading-tight md:text-black md:dark:text-white">FABIO DI GIANNANTONIO</h1>
            </div>
            <div className="absolute z-20 md:z-10 top-42 left-0 md:left-12 md:pl-96 mt-18 bg-linear-to-l from-white to-gray-800 text-white dark:text-black dark:bg-linear-to-r dark:from-white dark:to-white/50 p-6 md:p-4 h-96 right-0 rounded-lg">
                <img src="italian.png" className="float-left h-20 md:h-38 my-5 mx-5 rounded-2xl" alt="" />
                <ul className="md:text-md">
                    <li><span className="font-bold">Rider Name :</span> Fabio Di Gianantonio</li><hr className="my-3"></hr>
                    <li><span className="font-bold">Nationality :</span> Italy</li><hr className="my-3"></hr>
                    <li><span className="font-bold">Date of Birth :</span> 10/10/1998</li><hr className="my-3"></hr>
                    <li><span className="font-bold">Place of Birth :</span> Rome, Italy</li><hr className="my-3"></hr>
                    <li><span className="font-bold">Number :</span> FD49</li><hr className="my-3"></hr>
                    <li><span className="font-bold">Team :</span> Pertamina Enduro VR46 Racing Team</li><hr className="my-3"></hr>
                </ul>
            </div>
        </div>
        <div className="flex justify-center pt-34 md:absolute md:-bottom-15 md:left-12 z-30">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-center">
                <StatCard1 value="0" label="Championship"></StatCard1>
                <StatCard1 value="11" label="Season"></StatCard1>
                <StatCard1 value="4" label="Victories"></StatCard1>
                <StatCard1 value="28" label="Podiums"></StatCard1>
                <StatCard1 value="2" label="Poles"></StatCard1>
                <StatCard1 value="186" label="Races"></StatCard1>
            </div>
        </div>
    </div>
    );
}
export default Fabio;