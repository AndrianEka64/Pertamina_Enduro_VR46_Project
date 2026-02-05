import { useEffect, useState } from "react"
import DashboardContent from "../components/DashboardContent"
import Sidebar from "../components/Sidebar"
import { FaBars } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import api from "../service/api"

const Dahsboard = () => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    useEffect(() => {
        api.get("/user")
            .then(res => {
                console.log("USER:", res.data);
            })
            .catch(() => {
                console.log("UNAUTHORIZED");
                navigate("/login");
            });
    }, []);
    return (
        <>
            <div className="flex h-screen flex-col md:flex-row">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}></Sidebar>
                <div className="flex-1 overflow-auto">
                    <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-800">
                        <img src="logovr46.jpg" className="h-8 rounded-lg" alt="" />
                        <button onClick={() => setSidebarOpen(true)} className="text-white text-xl"><FaBars></FaBars></button>
                    </div>
                    <DashboardContent></DashboardContent>
                </div>
            </div>
        </>
    )
}
export default Dahsboard