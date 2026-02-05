import { FaRegPlusSquare } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import FooterDashboard from "./FooterDashboard";
import AddOrders from "./addOrders";
import { useEffect, useState } from "react";
import api from "../service/api";
import EditOrders from "./EditOrders";

const OrdersContent = () => {
    const [orders, setOrders] = useState([]);
    const [openAddOrders, setOpenAddOrders] = useState(false)
    const [openEditOrders, setOpenEditOrders] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState(null);
    const fetchOrders = async () => {
        try {
            const response = await api.get("/orders");
            setOrders(response.data.data);
        } catch (error) {
            console.error("Gagal mengambil data orders:", error);
        }
    };
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchOrders();
    }, []);
    const handleEditClick = (order) => {
        setSelectedOrder(order); 
        setOpenEditOrders(true); 
    };
    const handleDelete = async (id) => {
        if (window.confirm("Yakin ingin menghapus order ini?")) {
            try {
                await api.delete(`/orders/delete/${id}`);
                fetchOrders();
            } catch (err) {
                console.error(err.response?.data || err);
                alert("Gagal menghapus data");
            }
        }
    };
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
                            <h2 className="text-white font-semibold text-sm flex"><FaShoppingBag className="text-lg mr-2"></FaShoppingBag>Data Orders | {orders.length} items</h2>
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
                                <button onClick={() => setOpenAddOrders(true)} class="rounded-lg border border-yellow-600 bg-linear-to-b from-yellow-300 to-yellow-600 hover:bg-transparen dark:hover:from-yellow-600 dark:hover:to-yellow-900 p-2 text-sm font-medium dark:text-white transition-colors flex"><FaRegPlusSquare className="text-lg mr-2"></FaRegPlusSquare>Add Orders</button>
                                <AddOrders apOpen={openAddOrders} apClose={() => setOpenAddOrders(false)} refreshData={fetchOrders}></AddOrders>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-gray-400">
                            <h1 className="text-sm mt-2">Showing {orders.length} of {orders.length} orders</h1>
                            <h1 className="text-sm mt-2">Last Update : 2 minutes ago</h1>
                        </div>
                    </div>
                    <div className="p-6 overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead className="text-gray-400 border-b border-gray-800">
                                <tr>
                                    <th className="py-2 text-left">No</th>
                                    <th className="py-2 text-left">Customer Name</th>
                                    <th className="py-2 text-left">Product</th>
                                    <th className="py-2 text-left">Order Date</th>
                                    <th className="py-2 text-left">Total Amount</th>
                                    <th className="py-2 text-left">Order Status</th>
                                    <th className="py-2 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800 text-gray-200">
                                {orders.map((order) => (
                                    <tr key={order} className="hover:bg-gray-800/40 transition">
                                        <td className="py-3">{order.id}</td>
                                        <td className="py-3">{order.name}</td>
                                        <td className="py-3">{order.product_name}</td>
                                        <td className="py-3">{order.order_date}</td>
                                        <td className="py-3">${order.total_amount}</td>
                                        <td className="py-3">
                                            <span className={`px-3 py-1 rounded-lg border font-medium ${order.order_status === 'completed'
                                                ? 'border border-green-600 bg-linear-to-b from-green-400/50 to-green-600/50 hover:bg-transparen dark:hover:from-green-600 dark:hover:to-green-900'
                                                : order.order_status === 'cancelled'
                                                    ? 'border border-red-600 bg-linear-to-b from-red-400 to-red-600 hover:bg-transparen dark:hover:from-red-600 dark:hover:to-red-900'
                                                    : 'border border-yellow-600 bg-linear-to-b from-yellow-300 to-yellow-600 hover:bg-transparen dark:hover:from-yellow-600 dark:hover:to-yellow-900'}`}>
                                                {order.order_status}
                                            </span>
                                        </td>
                                        <td className="py-3">
                                            <div className="flex gap-2">
                                                <EditOrders apOpen={openEditOrders} apClose={() => setOpenEditOrders(false)} refreshData={fetchOrders} orderData={selectedOrder}></EditOrders>
                                                <button onClick={() => handleEditClick(order)} class="rounded-lg border border-yellow-600 bg-linear-to-b from-yellow-300 to-yellow-600 hover:bg-transparen dark:hover:from-yellow-600 dark:hover:to-yellow-900 p-2 text-sm font-medium dark:text-white transition-colors"><FaPen className="text-lg"></FaPen></button>
                                                <button onClick={() => handleDelete(order.id)} class="rounded-lg border border-red-600 bg-linear-to-b from-red-400 to-red-600 hover:bg-transparen dark:hover:from-red-600 dark:hover:to-red-900 p-2 text-sm font-medium dark:text-white transition-colors"><FaTrashAlt className="text-lg"></FaTrashAlt></button>
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