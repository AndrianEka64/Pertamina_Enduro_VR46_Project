import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className="bg-linear-to-bl from-yellow-300 to-white fixed top-0 inset-x-0 z-50 dark:bg-linear-to-bl dark:from-yellow-300 dark:to-black">
                <div className="container mx-auto flex items-center justify-between px-4 py-4">
                    <img src="lgo_atas.png" className="h-5 md:h-10" alt="" />
                    <ul className="text-gray-800 dark:text-white font-bold text-xl hidden md:flex space-x-10">
                        <li className="hover:text-yellow-400"><Link to="/#home">Home</Link></li>
                        <li className="hover:text-yellow-400"><a href="#about">About</a></li>
                        <li className="hover:text-yellow-400"><a href="#riders">Riders</a></li>
                        <li className="hover:text-yellow-400"><a href="#merchandise">Merchandise</a></li>
                    </ul>
                    <button onClick={() => setOpen(!open)} className="md:hidden text-3xl font-bold">☰</button>
                </div>
                <div className={`md:hidden ${open ? "block" : "hidden"} bg-transparent px-6 pb-6`}>
                    <ul className="flex flex-col space-y-4 font-bold text-lg dark:text-white">
                        <li className="hover:text-yellow-400"><Link to="/#home">Home</Link></li>
                        <li className="hover:text-yellow-400"><a href="#about">About</a></li>
                        <li className="hover:text-yellow-400"><a href="#riders">Riders</a></li>
                        <li className="hover:text-yellow-400"><a href="#merchandise">Merchandise</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default Navbar