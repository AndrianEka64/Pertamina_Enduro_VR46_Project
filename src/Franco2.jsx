const StatCard = ({ value, label }) => (
  <div className="h-44 w-44 rounded-tr-4xl rounded-bl-4xl bg-linear-to-b from-gray-700 to-black 
    border-2 border-yellow-500 shadow-lg hover:scale-115 transition duration-300
    flex flex-col items-center justify-center hover:shadow-2xl dark:shadow-yellow-300">
    <h2 className="text-white text-7xl font-bold">{value}</h2>
    <p className="text-white font-bold tracking-widest mt-2">{label}</p>
  </div>
);
const Franco = () => {
    return (
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
                    <StatCard value="1" label="Championship"></StatCard>
                    <StatCard value="13" label="Seasons"></StatCard>
                    <StatCard value="11" label="Victories"></StatCard>
                    <StatCard value="29" label="Podiums"></StatCard>
                    <StatCard value="8" label="Poles"></StatCard>
                    <StatCard value="213" label="Races"></StatCard>
                </div>
            </div>
        </div>
    );
}
export default Franco;