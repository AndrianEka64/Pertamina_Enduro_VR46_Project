import { useEffect, useState } from "react";
import api from "../service/api";

const AddOrders = ({ apOpen, apClose, refreshData, onSuccess, onError }) => {
    const [customerName, setCustomerName] = useState("");
    const [productId, setProductId] = useState("");
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    useEffect(() => {
        if (apOpen) {
            api.get("/product").then(res => setProducts(res.data.data));
        }
    }, [apOpen]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!customerName || !productId) {
            onError("Customer name dan product wajib diisi");
            return;
        }
        try {
            await api.post("/orders", {
                customer_name: customerName,
                product_id: productId
            });
            onSuccess("Order added successfully");
            setCustomerName("");
            setProductId("");
            apClose();
            refreshData();

        } catch (error) {
            console.error(error.response?.data || error);
            onError(
                error.response?.data?.message ||
                "Orders added failed!"
            );
        }
    };
    const filteredProducts = search === ""
        ? products.slice(0, 3)
        : products
            .filter(p =>
                p.name.toLowerCase().includes(search.toLowerCase())
            )
            .slice(0, 3);;
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
                        <input type="text" placeholder="Search product..." value={search} onChange={(e) => { setSearch(e.target.value); setShowDropdown(true); }} onFocus={() => setShowDropdown(true)} className="w-full h-10 rounded ring-2 ring-gray-500 px-4 bg-gray-900 text-white focus:ring-yellow-500 outline-none" />
                        {showDropdown && (
                            <div className="absolute z-20 mt-2 w-full max-h-48 overflow-y-auto rounded-lg bg-gray-800 ring-1 ring-gray-600">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map(p => (
                                        <div key={p.id} onClick={() => { setProductId(p.id); setSearch(p.name); setShowDropdown(false); }} className="cursor-pointer px-4 py-2 text-sm text-white hover:bg-yellow-500 hover:text-black transition" >
                                            {p.name} - ${p.price}
                                        </div>
                                    ))
                                ) : (
                                    <div className="px-4 py-2 text-sm text-gray-400">
                                        Product not found
                                    </div>
                                )}
                            </div>
                        )}
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