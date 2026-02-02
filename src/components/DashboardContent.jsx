import { FaDollarSign } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import FooterDashboard from "./FooterDashboard";

const Stats = ({ value, label, icon }) => {
    return (
        <div className="md:h-30 md:w-60 rounded-xl bg-[#0B0F1A] shadow-xl/20 hover:scale-105 transition duration-300 flex flex-col items-center justify-center hover:shadow-lg dark:shadow-white p-5">
            <div className="flex">
                <div className="text-white text-7xl mr-4">
                    {icon}
                </div>
                <div className="">
                    <p className="text-white font-bold tracking-widest">{label}</p>
                    <h2 className="text-white text-xl md:text-3xl lg:text-5xl font-bold text-center">{value}</h2>
                </div>
            </div>
        </div>
    )
}

const DashboardContent = () => {
    return (
        <>
            <div className="max-w-full px-4 sm:px-6 lg:px-10 py-6 sm:py-8 dark:bg-gray-900 min-h-screen">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold dark:text-white tracking-wide">Dashboard</h1>
                    <p className="text-gray-400 text-sm mt-1">Overview of your store performance</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <Stats value="20.0" label="Total Sales" icon={<FaDollarSign />} />
                    <Stats value="3" label="Total Orders" icon={<FaShoppingCart />} />
                    <Stats value="5" label="Products" icon={<FaBoxOpen />} />
                    <Stats value="2" label="Customers" icon={<FaUserFriends />} />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 rounded-xl bg-[#0B0F1A] border border-gray-800">
                        <div className="flex items-center justify-between px-6 h-12 border-b border-gray-800">
                            <h2 className="text-white font-semibold text-sm">Latest Products</h2>
                            <span className="text-xs text-gray-400">Updated today</span>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <table className="min-w-200 text-sm">
                                <thead className="text-gray-400 border-b border-gray-800">
                                    <tr>
                                        <th className="py-2 text-left">No</th>
                                        <th className="py-2 text-left">Name</th>
                                        <th className="py-2 text-left">Price</th>
                                        <th className="py-2 text-left">Category</th>
                                        <th className="py-2 text-left">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800 text-gray-200">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <tr key={i} className="hover:bg-gray-800/40 transition">
                                            <td className="py-3">{i}</td>
                                            <td className="py-3">Pertamina Enduro VR46 Racing Team T-Shirt</td>
                                            <td className="py-3">$29.99</td>
                                            <td className="py-3">T-Shirt</td>
                                            <td className="py-3">
                                                <div class="text-center w-24 rounded-lg border border-green-600 bg-linear-to-b from-green-400/50 to-green-600/50 hover:bg-transparen dark:hover:from-green-600 dark:hover:to-green-900 p-1 text-sm font-medium dark:text-white transition-colors mr-2">Available</div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="rounded-xl bg-[#0B0F1A] border border-gray-800">
                        <div className="px-6 h-12 flex items-center border-b border-gray-800">
                            <h2 className="text-white font-semibold text-sm">Orders Overview</h2>
                        </div>
                        <div className="p-6 space-y-4 text-sm">
                            <div className="flex justify-between text-gray-300">
                                <span>Order #1023</span>
                                <span className="text-yellow-400 font-medium">Completed</span>
                            </div>
                            <div className="flex justify-between text-gray-300">
                                <span>Order #1021</span>
                                <span className="text-gray-400">Pending</span>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterDashboard></FooterDashboard>
            </div>
        </>
    )
}
export default DashboardContent