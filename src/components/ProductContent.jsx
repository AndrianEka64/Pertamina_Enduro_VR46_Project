import { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useEffect } from "react";
import api from "../service/api";
import Breadcrumb from "./Breadcrumb";
import Modal from "./Modal";
import FooterDashboard from "./FooterDashboard";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

const ProductContent = () => {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [openAddProduct, setOpenAddProduct] = useState(false)
    const [openEditProduct, setOpenEditProduct] = useState(false)
    const [products, setProducts] = useState([]);
    const handleAddSuccess = (newProduct) => {
        setProducts(prev => [...prev, newProduct]);
    };
    useEffect(() => {
        api.get("/product")
            .then(res => setProducts(res.data.data ?? res.data))
            .catch(err => console.log(err));
    }, []);
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Yakin mau menghapus product ini?"
        );
        if (!confirmDelete) return;
        try {
            await api.delete(`/product/delete/${id}`);
            setProducts(prev =>
                prev.filter(product => product.id !== id)
            );
            alert("Product berhasil dihapus");
        } catch (error) {
            console.error(error.response?.data || error);
            alert("Gagal menghapus data");
        }
    };
    return (
        <>
            <div className="max-w-full px-10 py-8 dark:bg-gray-900 min-h-screen">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold dark:text-white tracking-wide">Product</h1>
                    <p className="text-gray-400 text-sm mt-1">Manage your product inventory, pricing, and availability</p>
                    <Breadcrumb></Breadcrumb    >
                </div>
                <div className="rounded-xl bg-[#0B0F1A] border border-gray-800">
                    <div className="px-6 py-4 h-24 border-b border-gray-800">
                        <div className="flex items-center justify-between">
                            <h2 className="text-white font-semibold text-sm flex"><FaBoxOpen className="text-lg mr-2"></FaBoxOpen>Data Products | {products.length} Items</h2>
                            <div className="flex gap-2">
                                <div className="relative">
                                    <input className="text-white appearance-none border-2 pl-10 border-gray-800 hover:border-gray-800 transition-colors rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:ring-yellow-600 focus:border-yellow-600 focus:shadow-outline" id="username" type="text" placeholder="Search Product" />
                                    <div className="absolute right-0 inset-y-0 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div className="absolute left-0 inset-y-0 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <button onClick={() => setOpenAddProduct(true)} className="rounded-lg border border-yellow-600 bg-linear-to-b from-yellow-300 to-yellow-600 hover:bg-transparen dark:hover:from-yellow-600 dark:hover:to-yellow-900 p-1 md:p-2 text-sm font-medium dark:text-white transition-colors flex"><FaRegPlusSquare className="text-sm md:text-lg mr-2"></FaRegPlusSquare>Add Product</button>
                                <AddProduct apOpen={openAddProduct} apClose={() => setOpenAddProduct(false)} onSuccess={handleAddSuccess}></AddProduct>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-gray-400">
                            <h1 className="text-sm mt-2">Showing {products.length} of {products.length} product</h1>
                            <h1 className="text-sm mt-2">Last Update : 2 minutes ago</h1>
                        </div>
                    </div>
                    <div className="p-6 overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead className="text-gray-400 border-b border-gray-800">
                                <tr>
                                    <th className="py-2 text-center md:text-left">No</th>
                                    <th className="py-2 text-center md:text-left">Product Name</th>
                                    <th className="py-2 text-center md:text-left">Price</th>
                                    <th className="py-2 text-center md:text-left">Stock</th>
                                    <th className="py-2 text-center md:text-left">Category</th>
                                    <th className="py-2 text-center md:text-left">Status</th>
                                    <th className="py-2 text-center md:text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800 text-gray-200">
                                {products.map((p, i) => (
                                    <tr key={i} className="hover:bg-gray-800/40 transition">
                                        <td className="py-3">{i + 1}</td>
                                        <td className="py-3">{p.name}</td>
                                        <td className="py-3">${p.price}</td>
                                        <td className="py-3">{p.stock}</td>
                                        <td className="py-3">{p.category}</td>
                                        <td className="py-3">
                                            <div className={`text-center md:w-24 rounded-lg border p-1 text-sm font-medium ${p.status === "available"
                                                ? "border border-green-600 bg-linear-to-b from-green-400/50 to-green-600/50 hover:bg-transparen dark:hover:from-green-600 dark:hover:to-green-900"
                                                : "border border-red-600 bg-linear-to-b from-red-400 to-red-600 hover:bg-transparen dark:hover:from-red-600 dark:hover:to-red-900"}`}>
                                                {p.status}
                                            </div>
                                        </td>
                                        <td className="py-3">
                                            <div className="flex gap-2">
                                                <Modal isOpen={openModal} onClose={() => setOpenModal(false)} product={selectedProduct}></Modal>
                                                <button onClick={() => { setSelectedProduct(p); setOpenModal(true); }} className="rounded-lg border border-blue-600 bg-linear-to-b from-blue-300 to-blue-600 hover:bg-transparen dark:hover:from-blue-600 dark:hover:to-blue-900 p-2 text-sm font-medium dark:text-white transition-colors"><FaEye className="text-lg"></FaEye></button>
                                                <button onClick={() => { setSelectedProduct(p); setOpenEditProduct(true); }} className="rounded-lg border border-yellow-600 bg-linear-to-b from-yellow-300 to-yellow-600 hover:bg-transparen dark:hover:from-yellow-600 dark:hover:to-yellow-900 p-2 text-sm font-medium dark:text-white transition-colors"><FaPen className="text-lg"></FaPen></button>
                                                <button onClick={() => handleDelete(p.id)} className="rounded-lg border border-red-600 bg-linear-to-b from-red-400 to-red-600 hover:bg-transparen dark:hover:from-red-600 dark:hover:to-red-900 p-2 text-sm font-medium dark:text-white transition-colors"><FaTrashAlt className="text-lg"></FaTrashAlt></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                <EditProduct editOpen={openEditProduct}
                                    editClose={() => setOpenEditProduct(false)}
                                    product={selectedProduct}
                                    onSuccess={(updatedProduct) => {
                                        setProducts(prev =>
                                            prev.map(p => p.id === updatedProduct.id ? updatedProduct : p)
                                        );
                                    }}></EditProduct>
                            </tbody>
                        </table>
                    </div>
                </div>
                <FooterDashboard></FooterDashboard>
            </div>
        </>
    )
}
export default ProductContent