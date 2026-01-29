import { Link } from "react-router-dom"
import Navbar from "../components/Navbarr"
import Footer from "../components/Footerr"
const Merchandise = () => {
    return (
        <>
            <Navbar></Navbar>
            <h1 id="about" className="font-bold text-2xl md:text-3xl lg:text-5xl italic dark:text-white w-64 md:w-74 lg:w-5/12 text-center p-2 mt-32 rounded-tr-4xl border-t-2 border-b-2 border-r-2 border-yellow-300"><span className="text-yellow-300">ALL</span> MERCHANDISE</h1>
            <div className="dark:bg-radial-[at_100%_50%] from-yellow-300 to-black to-65% ">
                <div className="container mx-auto p-8 border-t-2 border-r-2 border-b-2 rounded-br-4xl rounded-tr-4xl border-yellow-300">
                    <div className="flex justify-end">
                        <Link to="/" className="mt-4 object-right bg-yellow-300 hover:bg-yellow-600 focus:outline-2 focus:outline-yellow-600 text-black p-3 font-bold mb-4 rounded-tl-2xl rounded-br-2xl">Back to Menu</Link>
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
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Merchandise