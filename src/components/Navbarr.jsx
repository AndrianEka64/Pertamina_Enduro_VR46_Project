import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
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
        </>
    );
}
export default Navbar