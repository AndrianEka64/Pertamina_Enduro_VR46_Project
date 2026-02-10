import { NavLink } from "react-router-dom"
import { FaTachometerAlt } from "react-icons/fa"
import { FaShoppingBag } from "react-icons/fa"
import { FaBoxOpen } from "react-icons/fa"
import { FaSignOutAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import api from "../service/api"

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await api.get("/logout");
        } catch (err) {
            console.log("Logout error:", err);
        } finally {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login", {
                state: {
                    popupSuccess: true,
                    message: "Logout successfully"
                }
            });
        }
    };
    return (
        <>
            <div onClick={() => setSidebarOpen(false)} className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}></div>
            <div className={`fixed md:static z-50 h-full w-64 bg-yellow-400 dark:bg-[#0B0F1A] border-r border-white dark:border-gray-800 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
                <div className="px-4 py-6">
                    <span className="grid h-10 w-32 place-content-center rounded-lg bg-transparent text-xs text-gray-600">
                        <img src="logovr46.jpg" className="h-12 rounded-lg" alt="" />
                    </span>
                    <ul className="mt-6 space-y-1 text-sm">
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) =>
                                `flex items-center gap-x-3 rounded-lg px-4 py-2 text-sm font-medium transition 
                                ${isActive ? "bg-white dark:bg-yellow-400 text-black" : "text-black dark:text-gray-300 dark:hover:bg-gray-600 hover:bg-yellow-700/50 hover:text-white"}`}>
                                <FaTachometerAlt className="text-lg"></FaTachometerAlt>Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/product" className={({ isActive }) =>
                                `flex items-center gap-x-3 rounded-lg px-4 py-2 text-sm font-medium transition 
                                ${isActive ? "bg-white dark:bg-yellow-400 text-black" : "text-black dark:text-gray-300 dark:hover:bg-gray-600 hover:bg-yellow-700/50 hover:text-white"}`}>
                                <FaBoxOpen className="text-lg"></FaBoxOpen>Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/orders" className={({ isActive }) =>
                                `flex items-center gap-x-3 rounded-lg px-4 py-2 text-sm font-medium transition 
                                ${isActive ? "bg-white dark:bg-yellow-400 text-black" : "text-black dark:text-gray-300 dark:hover:bg-gray-600 hover:bg-yellow-700/50 hover:text-white"}`}>
                                <FaShoppingBag className="text-lg"></FaShoppingBag>Orders
                            </NavLink>
                        </li>
                        <li>
                            <button onClick={handleLogout} className="flex w-full items-center gap-x-3 rounded-lg px-4 py-2 text-sm font-medium text-black dark:text-gray-300 dark:hover:bg-gray-600 hover:bg-yellow-700/50 hover:text-white transition">
                                <FaSignOutAlt className="text-lg" />Logout
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="absolute inset-x-0 bottom-0 border-t dark:border-gray-100">
                    <a href="#" className="flex items-center gap-2 bg-[#0B0F1A] border-t border-gray-800 p-4">
                        <img alt="" src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&amp;fit=crop&amp;q=80&amp;w=1160" className="size-9 rounded-full object-cover" />
                        <div>
                            <p className="text-xs text-gray-400 dark:text-white">
                                <strong className="block font-medium">UserTester</strong>
                                <span>usertes@email.com</span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Sidebar