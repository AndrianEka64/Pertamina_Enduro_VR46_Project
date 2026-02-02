import { FaRegPlusSquare } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import FooterDashboard from "./FooterDashboard";

const OrdersContent = () => {
    return (
        <>
            <div className="max-w-full px-10 py-8 dark:bg-gray-900 min-h-screen">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold dark:text-white tracking-wide">Orders</h1>
                    <p className="text-gray-400 text-sm mt-1">Track customer orders and manage order status</p>
                    <Breadcrumb></Breadcrumb    >
                </div>
                <div className="rounded-xl bg-[#0B0F1A] border border-gray-800">
                    <div className="px-6 py-4 h-24 border-b border-gray-800">
                        <div className="flex items-center justify-between">
                            <h2 className="text-white font-semibold text-sm flex"><FaShoppingBag className="text-lg mr-2"></FaShoppingBag>Data Orders | 5 items</h2>
                            <div className="flex gap-2">
                                <div class="relative">
                                    <input class="text-white appearance-none border-2 pl-10 border-gray-800 hover:border-gray-800 transition-colors rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:ring-yellow-600 focus:border-yellow-600 focus:shadow-outline" id="username" type="text" placeholder="Search Orders" />
                                    <div class="absolute right-0 inset-y-0 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div class="absolute left-0 inset-y-0 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <button class="rounded-lg border border-yellow-600 bg-linear-to-b from-yellow-300 to-yellow-600 hover:bg-transparen dark:hover:from-yellow-600 dark:hover:to-yellow-900 p-2 text-sm font-medium dark:text-white transition-colors flex"><FaRegPlusSquare className="text-lg mr-2"></FaRegPlusSquare>Add Orders</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-gray-400">
                            <h1 className="text-sm mt-2">Showing 5 of 5 orders</h1>
                            <h1 className="text-sm mt-2">Last Update : 2 minutes ago</h1>
                        </div>
                    </div>
                    <div className="p-6 overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead className="text-gray-400 border-b border-gray-800">
                                <tr>
                                    <th className="py-2 text-left">No</th>
                                    <th className="py-2 text-left">Customer Name</th>
                                    <th className="py-2 text-left">Order Date</th>
                                    <th className="py-2 text-left">Total Amount</th>
                                    <th className="py-2 text-left">Order Status</th>
                                    <th className="py-2 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800 text-gray-200">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="hover:bg-gray-800/40 transition">
                                        <td className="py-3">{i}</td>
                                        <td className="py-3">Aleix</td>
                                        <td className="py-3">12/12/2025</td>
                                        <td className="py-3">$29.99</td>
                                        <td className="py-3">
                                            <div class="text-center w-24 rounded-lg border border-green-600 bg-linear-to-b from-green-400/50 to-green-600/50 hover:bg-transparen dark:hover:from-green-600 dark:hover:to-green-900 p-1 text-sm font-medium dark:text-white transition-colors mr-2">Processing</div>
                                        </td>
                                        <td className="py-3">
                                            <div className="flex gap-2">
                                                <button class="rounded-lg border border-yellow-600 bg-linear-to-b from-yellow-300 to-yellow-600 hover:bg-transparen dark:hover:from-yellow-600 dark:hover:to-yellow-900 p-2 text-sm font-medium dark:text-white transition-colors"><FaPen className="text-lg"></FaPen></button>
                                                <button class="rounded-lg border border-red-600 bg-linear-to-b from-red-400 to-red-600 hover:bg-transparen dark:hover:from-red-600 dark:hover:to-red-900 p-2 text-sm font-medium dark:text-white transition-colors"><FaTrashAlt className="text-lg"></FaTrashAlt></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <FooterDashboard></FooterDashboard>
            </div>
        </>
    )
}
export default OrdersContent