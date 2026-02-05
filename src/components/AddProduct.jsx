import { useState } from "react";
import api from "../service/api";
const AddProduct = ({ apOpen, apClose, onSuccess }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const resetForm = () => {
        setName("");
        setPrice("");
        setStock("");
        setCategory("");
        setDescription("");
        setImage(null);
        setPreview(null);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append("name", name);
        fd.append("price", price);
        fd.append("stock", stock);
        fd.append("category", category);
        fd.append("description", description);
        fd.append("image", image);
        try {
            const res = await api.post("/product", fd, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            onSuccess(res.data.data);
            resetForm();
            alert("Product added successfully!");
            apClose();
        } catch (err) {
            console.log(err.response?.data);
            alert("Product added failed!");
        }
    };
    if (!apOpen) return null;

    return (
        <div className="fixed inset-0 z-50 grid place-content-center bg-white/20 dark:bg-black/65 p-4" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
            <div className="w-full max-w-7xl rounded-lg border border-gray-700 bg-white shadow-lg dark:bg-gray-900">
                <div className="flex items-start justify-between p-6 border-b border-gray-700">
                    <h2 id="modalTitle" className="text-xl font-bold sm:text-2xl dark:text-white">
                        Add Product
                    </h2>
                    <button  onClick={apClose} type="button" className="rounded-full p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                        ✕
                    </button>
                </div>
                <form className="p-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex justify-center">
                            <div className="w-64 rounded-md border border-yellow-500 bg-gray-900 p-4">
                                {preview ? (
                                    <img src={preview} alt="Preview" className="w-full h-50 object-cover rounded" />) : (
                                    <label htmlFor="upload" className="flex flex-col items-center gap-2 cursor-pointer">
                                        <span className="text-yellow-400 text-3xl">＋</span>
                                        <span className="text-gray-200 text-sm">Upload Image</span>
                                    </label>
                                )}
                                <input id="upload" type="file" className="hidden" onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (!file) return;
                                    setImage(file);
                                    setPreview(URL.createObjectURL(file));
                                }} />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <Input label="Product Name" type="text" onChange={e => setName(e.target.value)} />
                            <Input label="Price ($)" type="number" onChange={e => setPrice(e.target.value)} />
                            <Input label="Stock" type="number" onChange={e => setStock(e.target.value)} />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label className="block mb-1 text-sm dark:text-white">
                            Category
                        </label>
                        <select onChange={(e) => setCategory(e.target.value)} className="w-full rounded border ring-2 ring-gray-500 p-2 dark:bg-gray-900 dark:text-white">
                            <option value="">Select category</option>
                            <option value="t-shirt">T-Shirt</option>
                            <option value="jacket">Jacket</option>
                            <option value="hat">Hat</option>
                            <option value="hoodie">Hoodie</option>
                            <option value="accessories">Accessories</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 mt-7 text-sm dark:text-white">
                            Description
                        </label>
                        <label htmlFor="Description" className="relative">
                            <textarea id="Description" onChange={(e) => setDescription(e.target.value)} rows="3" className="peer ring-2 ring-gray-500 p-4 w-full rounded border-gray-300 shadow-sm sm:text-sm resize-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"></textarea>
                        </label>
                    </div>
                    <button type="submit" className="border border-yellow-600 mt-8 w-full rounded-lg bg-linear-to-b from-yellow-300 to-yellow-600 hover:bg-transparen dark:hover:from-yellow-600 dark:hover:to-yellow-900 py-3 font-semibold transition">
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};
/* 🔹 Reusable Input Component */
const Input = ({ label, type, onChange }) => (
    <div>
        <label className="relative block">
            <input type={type} onChange={onChange} className="peer w-full h-10 rounded ring-2 ring-gray-500 px-4 dark:bg-gray-900 dark:text-white" placeholder=" " />
            <span className="absolute left-3 -top-2 bg-white px-2 text-sm dark:bg-gray-900 dark:text-white">
                {label}
            </span>
        </label>
    </div>
);

export default AddProduct;
