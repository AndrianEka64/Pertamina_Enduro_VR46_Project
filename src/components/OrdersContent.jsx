import { FaRegPlusSquare } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";

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
                    <div className="flex items-center justify-between px-6 py-8 h-12 border-b border-gray-800">
                        <h2 className="text-white font-semibold text-sm flex"><FaShoppingBag className="text-lg mr-2"></FaShoppingBag>Data Orders</h2>
                        <button class="rounded-lg border border-yellow-600 bg-linear-to-b from-yellow-300 to-yellow-600 hover:bg-transparen dark:hover:from-yellow-600 dark:hover:to-yellow-900 p-2 text-sm font-medium dark:text-white transition-colors flex"><FaRegPlusSquare className="text-lg mr-2"></FaRegPlusSquare>Add Orders</button>
                    </div>
                    <div className="p-6 overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead className="text-gray-400 border-b border-gray-800">
                                <tr>
                                    <th className="py-2 text-left">No</th>
                                    <th className="py-2 text-left">Customer</th>
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
                                        <td className="py-3">Aleix Mardenboroug</td>
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
            </div>
        </>
    )
}
export default OrdersContent