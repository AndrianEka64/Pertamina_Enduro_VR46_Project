import { useEffect, useState } from "react";
import api from "../service/api";

const Input = ({ label, type, name, value, onChange }) => (
    <div>
        <label className="relative block">
            <input type={type} name={name} value={value} onChange={onChange} className="peer w-full h-10 rounded ring-2 ring-gray-500 px-4 dark:bg-gray-900 dark:text-white" placeholder=" " />
            <span className="absolute left-3 -top-2 bg-white px-2 text-sm dark:bg-gray-900 dark:text-white">
                {label}
            </span>
        </label>
    </div>
);
const EditProduct = ({ editOpen, editClose, product, onSuccess }) => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        stock: "",
        category: "",
        description: "",
        image: null,
    });
    const [preview, setPreview] = useState(null);
    useEffect(() => {
        if (product) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setForm({
                name: product.name,
                price: product.price,
                stock: product.stock,
                category: product.category,
                description: product.description,
                image: null,
            });
            if (product.image) {
                setPreview(
                    product.image.startsWith("http")
                        ? product.image
                        : `${import.meta.env.VITE_API_URL}/storage/${product.image}`
                );
            }
        }
    }, [product]);
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            const file = files[0];
            if (!file) {
                return;
            }
            setForm(prev => ({
                ...prev,
                image: file
            }))
            setPreview(URL.createObjectURL(file));
        } else {
            setForm(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append("_method", "PUT");
        fd.append("name", form.name);
        fd.append("price", form.price);
        fd.append("stock", form.stock);
        fd.append("category", form.category);
        fd.append("description", form.description);
        if (form.image) {
            fd.append("image", form.image);
        }
        try {
            const res = await api.post(
                `/product/update/${product.id}`,
                fd,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                }
            );
            if (res?.data?.data) {
                onSuccess(res.data.data);
            }
            alert("Product updated successfully!");
            editClose();
        } catch (err) {
            console.log(err.response?.data);
            alert("Failed to update product!");
        }
    }
    if (!editOpen) return null;
    return (
        <>
            <div className="fixed inset-0 z-50 grid place-content-center bg-white/20 dark:bg-black/25 p-4" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                <div className="w-full max-w-7xl rounded-lg border border-gray-700 bg-white shadow-lg dark:bg-gray-900">
                    <div className="flex items-start justify-between p-6 border-b border-gray-700">
                        <h2 id="modalTitle" className="text-xl font-bold sm:text-2xl dark:text-white">
                            Update Product
                        </h2>
                        <button onClick={editClose} type="button" className="rounded-full p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                            ✕
                        </button>
                    </div>
                    <form className="p-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex justify-center">
                                <div className="w-64 rounded-md border border-yellow-500 bg-gray-900 p-4">
                                    <label htmlFor="upload" className="flex flex-col items-center gap-2 cursor-pointer">
                                        {preview ? (
                                            <img src={preview} alt="Preview" className="h-40 w-full object-cover rounded-md" />
                                        ) : (
                                            <>
                                                <span className="text-yellow-400 text-3xl">＋</span>
                                                <span className="text-gray-200 text-sm">Upload Image</span>
                                            </>
                                        )}
                                    </label>
                                    <input id="upload" type="file" name="image" onChange={handleChange} className="hidden" />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <Input name="name" label="Product Name" type="text" value={form.name} onChange={handleChange} />
                                <Input name="price" label="Price ($)" type="number" value={form.price} onChange={handleChange} />
                                <Input name="stock" label="Stock" type="number" value={form.stock} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="block mb-1 text-sm dark:text-white">
                                Category
                            </label>
                            <select name="category" value={form.category} onChange={handleChange} className="w-full rounded border ring-2 ring-gray-500 p-2 dark:bg-gray-900 dark:text-white">
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
                                <textarea id="Description" name="description" onChange={handleChange} value={form.description} rows="3" className="peer ring-2 ring-gray-500 p-4 w-full rounded border-gray-300 shadow-sm sm:text-sm resize-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"></textarea>
                            </label>
                        </div>
                        <button type="submit" className="border border-yellow-600 mt-8 w-full rounded-lg bg-linear-to-b from-yellow-300 to-yellow-600 hover:bg-transparen dark:hover:from-yellow-600 dark:hover:to-yellow-900 py-3 font-semibold transition">
                            Update Product
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
export default EditProduct;
