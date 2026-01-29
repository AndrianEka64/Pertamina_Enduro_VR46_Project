import { useState } from "react"
import ProductContent from "../components/ProductContent"
import Sidebar from "../components/Sidebar"
import { FaBars } from "react-icons/fa"

const Product = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <div className="flex h-screen">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}></Sidebar>
                <div className="flex-1 overflow-auto">
                    <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-800">
                        <img src="logovr46.jpg" className="h-8 rounded-lg" alt="" />
                        <button onClick={() => setSidebarOpen(true)} className="text-white text-xl"><FaBars></FaBars></button>
                    </div>
                    <ProductContent></ProductContent>
                </div>
            </div>
        </>
    )
}
export default Product