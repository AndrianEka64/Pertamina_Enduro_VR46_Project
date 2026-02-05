import { useEffect, useState } from "react";
import api from "../service/api";

const AddOrders = ({ apOpen, apClose, refreshData }) => {
    const [customerName, setCustomerName] = useState("");
    const [productId, setProductId] = useState("");
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (apOpen) {
            api.get("/product").then(res => setProducts(res.data.data));
        }
    }, [apOpen]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/orders", {
                customer_name: customerName,
                product_id: productId
            });
            alert("Order created successfully!");
            setCustomerName("");
            setProductId("");
            apClose();
            refreshData();
        } catch (error) {
            console.error(error);
            alert("Failed to add order");
        }
    };
    if (!apOpen) return null;
    return (
        <div className="fixed inset-0 z-50 grid place-content-center bg-black/65 p-4">
            <div className="w-full max-w-md rounded-lg border border-gray-700 bg-white dark:bg-gray-900 shadow-lg">
                <div className="flex items-start justify-between p-6 border-b border-gray-700">
                    <h2 className="text-xl font-bold dark:text-white">Add New Order</h2>
                    <button onClick={apClose} className="text-gray-400 hover:text-white">✕</button>
                </div>
                <form className="p-6 space-y-6 w-96" onSubmit={handleSubmit}>
                    <Input label="Customer Name" type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                    <div className="relative">
                        <label className="text-xs text-gray-400 absolute -top-2 left-3 bg-gray-900 px-1 z-10">Select Product</label>
                        <select required className="w-full h-10 rounded ring-2 ring-gray-500 px-4 bg-gray-900 text-white focus:ring-yellow-500 outline-none" value={productId} onChange={(e) => setProductId(e.target.value)} >
                            <option value="">-- Choose Product --</option>
                            {products.map(p => (
                                <option key={p.id} value={p.id}>{p.name} - ${p.price}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="w-full rounded-lg bg-yellow-500 py-3 font-bold text-black hover:bg-yellow-600 transition">
                        Submit Order
                    </button>
                </form>
            </div>
        </div>
    );
};

const Input = ({ label, type, value, onChange }) => (
    <label className="relative block">
        <input required type={type} value={value} onChange={onChange} className="peer w-full h-10 rounded ring-2 ring-gray-500 px-4 bg-transparent text-white focus:ring-yellow-500 outline-none" placeholder=" " />
        <span className="absolute left-3 -top-2 bg-white px-2 text-sm dark:bg-gray-900 dark:text-white">{label}</span>
    </label>
);

export default AddOrders;