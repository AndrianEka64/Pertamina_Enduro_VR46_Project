import { Link } from "react-router-dom"
import Navbar from "../components/Navbarr"
import Footer from "../components/Footerr"
import { useEffect, useState } from "react";
import api from "../service/api";
import { FaShoppingCart } from "react-icons/fa";
const Merchandise = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get("/product");
                setProducts(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    return (
        <>
            <Navbar></Navbar>
            <h1 id="about" className="font-bold text-2xl md:text-3xl lg:text-5xl italic dark:text-white w-64 md:w-74 lg:w-5/12 text-center p-2 mt-32 rounded-tr-4xl border-t-2 border-b-2 border-r-2 border-yellow-300"><span className="text-yellow-300">ALL</span> MERCHANDISE</h1>
            <div className="dark:bg-radial-[at_100%_50%] from-yellow-300 to-black to-65% ">
                <div className="container mx-auto p-8 border-t-2 border-r-2 border-b-2 rounded-br-4xl rounded-tr-4xl border-yellow-300">
                    <div className="flex justify-end">
                        <Link to="/" className="mt-4 object-right bg-yellow-300 hover:bg-yellow-600 focus:outline-2 focus:outline-yellow-600 text-black p-3 font-bold mb-4 rounded-tl-2xl rounded-br-2xl">Back to Menu</Link>
                    </div>
                    {loading ? (
                        <div className="text-white text-center py-10">Loading Products...</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {products.map((product, index) => (
                                <div key={product.id} className="bg-gray-300 border-2 border-gray-500 rounded-lg shadow-lg relative overflow-hidden">
                                    <div className="absolute top-0 right-0 z-10">
                                        <div className="bg-red-600 rounded-bl-lg">
                                            <h1 className="text-white font-sans p-2 text-sm">{index + 1}</h1>
                                        </div>
                                    </div>

                                    <div className="bg-white w-full h-64 overflow-hidden">
                                        <Link to={`/detail/${product.id}`}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="transition duration-300 w-full h-64 object-cover object-top hover:scale-105"
                                            />
                                        </Link>
                                    </div>

                                    <div className="p-5">
                                        <h2 className="text-xl font-bold text-black line-clamp-1">{product.name}</h2>
                                        <div className="flex items-center mt-2">
                                            <p className="text-red-600 font-bold text-lg mr-2">${product.price}</p>
                                            <p className="text-gray-600 font-bold line-through text-sm">$35</p>
                                        </div>

                                        <div className="flex gap-3 mt-4">
                                            <Link
                                                to={`/detail/${product.id}`}
                                                className="text-center w-full bg-linear-to-b from-yellow-300 to-yellow-600 text-black py-2 rounded-full font-bold hover:from-yellow-400"
                                            >
                                                Details
                                            </Link>
                                            <button className="flex justify-center items-center w-24 bg-linear-to-b from-red-500 to-red-600 text-white py-2 rounded-full font-bold hover:from-red-600 transition">
                                                <FaShoppingCart className="text-lg" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Merchandise