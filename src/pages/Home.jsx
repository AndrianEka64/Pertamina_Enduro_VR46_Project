import { useState } from "react";
import Fabio from "../components/Fabio2";
import Franco from "../components/Franco2";
import { Link } from "react-router-dom";
import Footer from "../components/Footerr";
import Navbar from "../components/Navbarr";
import { FaShoppingCart } from "react-icons/fa";

const WideStatCard = ({ value, label }) => (
    <div className="md:h-44 md:w-96 rounded-tr-4xl rounded-bl-4xl bg-linear-to-t from-gray-600 to-black 
    border-2 border-yellow-500 shadow-lg hover:scale-115 transition duration-300
    flex flex-col items-center justify-center hover:shadow-2xl dark:shadow-yellow-500 p-5">
        <p className="text-white font-bold tracking-widest">{label}</p>
        <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold">{value}</h2>
    </div>
);
const StatCard = ({ value, label }) => (
    <div className="h-32 w-32 md:w-54 lg:h-44 lg:w-44 rounded-tr-4xl rounded-bl-4xl bg-linear-to-b from-gray-700 to-black 
    border-2 border-yellow-500 shadow-lg hover:scale-115 transition duration-300
    flex flex-col items-center justify-center hover:shadow-2xl dark:shadow-yellow-300">
        <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold">{value}</h2>
        <p className="text-white font-bold tracking-widest mt-2">{label}</p>
    </div>
);
const Home = () => {
    const [kondisiAktif, setkondisiAktif] = useState("fabio");
    const description = "The Pertamina Enduro VR46 Racing Team is a professional MotoGP team founded and owned by nine-time World Champion Valentino Rossi. Backed by title sponsor Pertamina Enduro and powered by Ducati Desmosedici machinery, the team competes in the MotoGP World Championship with a strong focus on performance, innovation, and rider development, embodying the long-term vision of the VR46 Riders Academy.";
    return (
        <>
            <Navbar></Navbar>
            <header id="home" className="relative h-96 lg:h-screen lg:w-full overflow-hidden">
                <video className="absolute inset-0 w-full h-full object-cover" src="motogp.mp4" autoPlay loop muted playsInline></video>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="container mx-auto">
                    <div className="absolute top-25 md:top-18 lg:top-45 max-w-2xl text-white space-y-6 backdrop-blur-xs p-6 rounded-lg">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-center md:text-start text-shadow-lg">PERTAMINA ENDURO VR46<br />RACING TEAM</h1>
                        <p className="text-sm md:text-md lg:text-lg text-white">Official team information, rider profiles, and exclusive VR46 merchandise</p>
                        <div className="flex gap-4 pt-4">
                            <a href="#riders" className="bg-yellow-400 text-black font-semibold p-2 md:px-6 md:py-3 rounded-full text-md hover:bg-yellow-600 transition dark:hover:text-white">Meet the Riders</a>
                            <a href="#merchandise" className="border border-white text-white font-semibold p-2 md:px-6 md:py-3 rounded-full text-md hover:bg-white hover:text-black transition">Shop Merchandise</a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="dark:bg-black ">
                <h1 id="about" className="font-bold text-2xl md:text-3xl lg:text-5xl italic dark:text-white w-50 md:w-64 lg:w-96 text-center p-2 mt-15 rounded-tr-4xl border-t-2 border-b-2 border-r-2 border-yellow-300"><span className="text-yellow-300">ABOUT</span> TEAM</h1>
                <div className="container mx-auto px-4 pb-28 border-t border-r rounded-tr-4xl border-yellow-300">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <img src="foto1.jpg" className="mt-5 w-full rounded-lg" alt="" />
                        <div className="dark:text-white space-y-6">
                            <h2 className="text-xl lg:text-3xl text-amber-300 font-bold italic md:mt-8">Pertamina Enduro VR46 Racing Team</h2>
                            <p className="text-sm lg:text-lg text-justify indent-8">{description}</p>
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
                    <h1 className="text-center text-5xl mb-10 lg:text-7xl font-extrabold italic text-amber-300 ">SEASON 2025 STATS</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
                        <div className="grid grid-cols-2 gap-6 justify-items-center order-2 lg:order-1 lg:justify-items-end">
                            <StatCard value="4" label="WINS"></StatCard>
                            <StatCard value="21" label="PODIUMS"></StatCard>
                        </div>
                        <div className="flex justify-center z-10 order-1 lg:order-2">
                            <img src="vr46.webp" className="w-52 sm:w-64 md:w-80 lg:w-96" alt="VR46 Bike" />
                        </div>
                        <div className="grid grid-cols-2 gap-6 justify-items-center order-3 lg:order-3 lg:justify-items-end">
                            <StatCard value="0" label="TITLES" ></StatCard>
                            <StatCard value="P3" label="STANDINGS" ></StatCard>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-between px-6 md:px-20 pb-20 mt-10 lg:-mt-50">
                        <WideStatCard value="13" label="DNF" ></WideStatCard>
                        <WideStatCard value="493" label="TOTAL POINTS" ></WideStatCard>
                    </div>
                </div>
            </div>
            <div className="dark:bg-radial-[at_0%_50%] from-yellow-300 to-black to-65% ">
                <div id="riders" className="container mx-auto pb-35 border-b border-r rounded-tr-4xl rounded-br-4xl border-yellow-300 ot-10">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl italic dark:text-white text-center border-t-2 border-b-2 border-l-2 dark:bg-none rounded-bl-4xl rounded-tr-4xl border-amber-400 p-2"><span className="text-yellow-300">RIDERS</span> TEAM</h1>
                    <div className="flex justify-end mb-12">
                        <div className="flex border-l-2 border-b-2 rounded-bl-4xl border-yellow-400 overflow-hidden">
                            <button onClick={() => setkondisiAktif("fabio")} className={`px-8 py-2 dark:text-white hover:bg-yellow-400/20 ${kondisiAktif === "fabio" ? "bg-red-600  text-white font-bold" : ""}`}>Fabio</button>
                            <button onClick={() => setkondisiAktif("franco")} className={`px-8 py-2 dark:text-white hover:bg-yellow-400/20 ${kondisiAktif === "franco" ? "bg-red-600 text-white font-bold" : ""}`}>Franco</button>
                        </div>
                    </div>
                    {kondisiAktif === "fabio" && <Fabio></Fabio>}
                    {kondisiAktif === "franco" && <Franco></Franco>}
                </div>
            </div>
            <div className="dark:bg-radial-[at_100%_50%] from-yellow-300 to-black to-65% ">
                <div className="container mx-auto pb-35 border-b border-l rounded-bl-4xl border-yellow-300 ot-10">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl italic dark:text-white w-50 md:w-96 text-center p-2 rounded-br-4xl border-t-2 border-b-2 border-r-2 border-yellow-300">MERCHANDISE</h1>

                    <div id="merchandise" className="container mx-auto px-4">
                        <div className="flex justify-end">
                            <Link to="/merchandise" className="mt-4 object-right bg-yellow-300 hover:bg-yellow-600 focus:outline-2 focus:outline-yellow-600 text-black p-3 font-bold mb-4 rounded-lg">View All</Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[1, 2, 3, 4, 5, 6,7 ,8].map((i) => (
                                <div key={i} className="bg-gray-300 border-2 border-gray-500 rounded-lg shadow-lg relative">
                                    <div className="absolute top-0 right-0">
                                        <div className="bg-red-600 rounded-bl-lg rounded-tr-lg">
                                            <h1 className="text-white font-sans p-2 text-sm">{i}</h1>
                                        </div>
                                    </div>
                                    <div className="bg-white w-full h-64 overflow-hidden rounded-t-lg">
                                        <Link to="/detail">
                                            <img src="merch2.webp" alt="merchandise" className="transition duration-300 w-full h-64 object-cover object-top hover:scale-105" />
                                        </Link>
                                    </div>
                                    <div className="container mx-auto p-5">
                                        <h2 className="text-xl font-bold text-black">Pertamina Enduro VR46 Racing Team T-Shirt</h2>
                                        <div className="flex">
                                            <p className="text-red-600 font-bold mt-2 mr-2">$29.99</p>
                                            <p className="text-gray-600 font-bold mt-2 line-through text-sm">$35</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <Link to="/detail" className="text-center mt-4 w-full bg-linear-to-b from-yellow-300 to-yellow-600 hover:bg-transparen dark:hover:from-yellow-600 dark:hover:to-yellow-900 text-black py-2 rounded-full font-bold">Details</Link>
                                            <button className="flex justify-center items-center mt-4 w-24 border-red-600 bg-linear-to-b from-red-500 to-red-600 hover:bg-transparen dark:hover:from-red-600 dark:hover:to-red-900 text-white py-2 rounded-full font-bold"> <FaShoppingCart className="text-lg"></FaShoppingCart></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end mb-15">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl italic dark:text-white w-50 md:w-96 text-center p-2 rounded-bl-4xl border-t-2 border-b-2 border-l-2 border-yellow-300"><span className="text-yellow-300">CONTACT</span> US</h1>
            </div>
            <div className="container mx-auto px-6">
                <h1 className="text-white text-xl font-bold py-5 text-center">Get in touch with
                    <span className="text-yellow-300"> Pertamina Enduro VR46 Racing Team</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <form action="#" className="space-y-4 rounded-tl-4xl rounded-br-4xl border-2 border-gray-300 p-6 bg-linear-to-b from-gray-700 to-black">
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
                        <div className="lg:flex justify-center">
                            <img src="logovr46.jpg" className="mb-5 lg:w-64 order-2 md:order-1" alt="" />
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
            <Footer></Footer>
        </>
    )
}
export default Home