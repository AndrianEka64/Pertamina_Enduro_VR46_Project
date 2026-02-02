import { Swiper } from "swiper/react"
import { SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { Pagination } from "swiper/modules"
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Footer from "../components/Footerr"
import Navbar from "../components/Navbarr"

const Detail = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="dark:bg-radial-[at_0%_0%] from-yellow-300 to-black to-80%">
                <div className="max-w-7xl mx-auto px-6 py-24 text-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div>
                            <Swiper className="rounded-2xl" modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>
                                <SwiperSlide>
                                    <img src="/merch2.webp" className="h-11/12 w-full object-cover rounded-2xl" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/merch2_2.webp" className="h-11/12 w-full object-cover" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/merch2_3.webp" className="h-11/12 w-full object-cover" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/merch2_4.webp" className="h-11/12 w-full object-cover" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="text-white">
                            <p className="text-md text-gray-200">Merchadise</p>
                            <h1 className="text-4xl font-bold">Pertamina Enduro VR46 Racing Team T-Shirt (yellow)</h1>
                            <p className="mt-2 text-yellow-400"><span className="text-gray-200">( 4,5 )</span> ★★★★★</p>
                            <div className="flex gap-2">
                                <p className="mt-4 text-5xl bg-red-600 p-2 rounded-tl-2xl rounded-br-2xl">$ 29.99</p>
                                <p className="mt-4 text-gray-200 text-lg line-through">$ 35.50</p>
                            </div>
                            <hr className="my-8"></hr>
                            <p className="text-md text-gray-200">Description</p>
                            <p className="text-md text-gray-200 mt-3">
                                <p className="text-justify">
                                    Official replica T-shirt of the Pertamina Enduro VR46 Racing Team worn by Franco Morbidelli, Fabio Di Giannantonio and the entire team during the 2026 season. Made of polyester, in collaboration with Kappa, it features the Pertamina Enduro VR46 Racing Team logo on the chest and back and the team's sponsor logos on the sleeves. Contrasting black and red details complete the design.
                                </p><br></br>
                                <span className="block">Washing: Medium washing in cold water ; Do not bleach ; No drum ; Ironing Max 110 ; Do not dry clean</span>
                                <span className="block">Composition: 100%POLYESTER</span>
                            </p>
                            <hr className="my-8"></hr>
                            <form action="" method="post">
                                <p className="text-gray-200 mb-2">Size</p>
                                <div className="grid grid-cols-5 gap-2">
                                    <label className="cursor-pointer">
                                        <input type="radio" name="size" value="S" defaultChecked className="hidden peer" />
                                        <div className="border-2 border-gray-400 p-3 text-center font-bold peer-checked:bg-yellow-400 peer-checked:text-black peer-checked:border-yellow-400">S</div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input type="radio" name="size" value="M" className="hidden peer" />
                                        <div className="border-2 border-gray-400 p-3 text-center font-bold peer-checked:bg-yellow-400 peer-checked:text-black peer-checked:border-yellow-400">M</div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input type="radio" name="size" value="L" className="hidden peer" />
                                        <div className="border-2 border-gray-400 p-3 text-center font-bold peer-checked:bg-yellow-400 peer-checked:text-black peer-checked:border-yellow-400">L</div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input type="radio" name="size" value="XL" className="hidden peer" />
                                        <div className="border-2 border-gray-400 p-3 text-center font-bold peer-checked:bg-yellow-400 peer-checked:text-black peer-checked:border-yellow-400">XL</div>
                                    </label>
                                    <label className="cursor-pointer">
                                        <input type="radio" name="size" value="XXL" className="hidden peer" />
                                        <div className="border-2 border-gray-400 p-3 text-center font-bold peer-checked:bg-yellow-400 peer-checked:text-black peer-checked:border-yellow-400">XXL</div>
                                    </label>
                                </div>
                                <div className="my-6">
                                    <p className="text-gray-200 mb-2">Quantity</p>
                                    <input type="number" name="quantity" min="1" defaultValue="1" className="w-24 px-4 py-2 border-2 border-gray-400 bg-transparent text-white focus:outline-none focus:border-yellow-400" />
                                </div>
                                <button type="submit" className="w-full py-3 bg-linear-to-b from-yellow-300 to-yellow-600 hover:from-yellow-400 hover:to-yellow-700 font-semibold text-black rounded-lg transition">Add to Cart</button>
                            </form>
                        </div>
                    </div>
                    <div className="flex justify-center border-b-2 border-yellow-300">
                        <h1 className="font-bold text-xl md:text-3xl lg:text-5xl italic dark:text-white w-50 md:w-64 lg:w-full text-center p-2 mt-15 rounded-tr-4xl rounded-tl-4xl border-2 border-yellow-300"><span className="text-yellow-300">COMPLETE </span>YOUR LOOK</h1>
                    </div>
                    <div className="flex gap-4 overflow-y-auto my-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
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
            <Footer></Footer>
        </>
    )
}
export default Detail