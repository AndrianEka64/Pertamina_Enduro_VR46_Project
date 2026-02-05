const Footer = () => {
    return (
        <>
            <footer className="bg-black border-t-2 border-yellow-400 mt-32">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-yellow-300">
                        <div className="dark:text-white font-semibold">
                            <img src="/logovr46.jpg" className="mb-5 md:w-64" alt="" />
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
export default Footer