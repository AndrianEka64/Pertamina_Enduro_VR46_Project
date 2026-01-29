import { useState } from "react"
import OrdersContent from "../components/OrdersContent"
import Sidebar from "../components/Sidebar"
import { FaBars } from "react-icons/fa"

const Orders = () => {
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
                    <OrdersContent></OrdersContent>
                </div>
            </div>
        </>
    )
}
export default Orders