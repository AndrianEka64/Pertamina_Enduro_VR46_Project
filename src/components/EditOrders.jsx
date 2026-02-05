import { useEffect, useState } from "react";
import api from "../service/api";

const EditOrders = ({ apOpen, apClose, refreshData, orderData }) => {
    const [status, setStatus] = useState("");
    useEffect(() => {
        if (apOpen && orderData) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setStatus(orderData.order_status || "processing");
        }
    }, [apOpen, orderData])
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/orders/update/${orderData.id}`, {
                status: status
            });
            alert("Order status updated!");
            apClose();
            refreshData();
        } catch (error) {
            console.error(error);
            alert("Failed to update status");
        }
    };
    if (!apOpen) return null;
    return (
        <div className="fixed inset-0 z-50 grid place-content-center bg-black/35 p-4">
            <div className="w-full max-w-md rounded-lg border border-gray-700 bg-white dark:bg-gray-900 shadow-lg">
                <div className="flex items-start justify-between p-6 border-b border-gray-700">
                    <h2 className="text-xl font-bold dark:text-white">Edit Order</h2>
                    <button onClick={apClose} className="text-gray-400 hover:text-white">✕</button>
                </div>
                <form className="p-6 space-y-6 w-96" onSubmit={handleUpdate}>
                    <div className="relative">
                        <label className="text-xs text-gray-400 absolute -top-2 left-3 bg-gray-900 px-1 z-10">Select New Status</label>
                        <select required className="w-full h-12 rounded ring-2 ring-gray-500 px-4 bg-gray-900 text-white focus:ring-yellow-500 outline-none transition-all" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="completed">🟢 Completed</option>
                            <option value="processing">🟡 Processing</option>
                            <option value="cancelled">🔴 Cancelled</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full rounded-lg bg-yellow-500 py-3 font-bold text-black hover:bg-yellow-600 transition">
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditOrders;