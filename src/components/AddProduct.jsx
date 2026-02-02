const AddProduct = ({ apOpen, apClose }) => {
    if (!apOpen) {
        return null
    }
    return (
        <>
            <div className="fixed inset-0 z-50 grid place-content-center bg-white/22 dark:bg-black/65 p-4" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                <div className="w-full max-w-7xl rounded-lg border border-gray-700 bg-white shadow-lg dark:bg-gray-900">
                    <div className="flex items-start justify-between p-6  border-b border-gray-700">
                        <h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">Add Product</h2>
                        <button onClick={apClose} type="button" className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <form action="#" method="#">
                        <div className="mt-4 p-6 text-white">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="flex justify-center">
                                    <div className="rounded-md border border-yellow-500 bg-gray-900 p-4 shadow-md w-64 mr-4">
                                        <label for="upload" className="flex flex-col items-center pt-8 gap-2 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-white stroke-yellow-500" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <span className="text-gray-200 font-medium">Upload file</span>
                                        </label>
                                        <input id="upload" type="file" className="hidden" />
                                    </div>
                                </div>
                                <div className="text-md">
                                    <div>
                                        <label for="ProductName" className="relative">
                                            <input type="text" id="ProductName" placeholder="" className="peer ring-2 ring-gray-500 p-4 w-full h-10 rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-slate-900 dark:text-white" />
                                            <span className="absolute inset-y-0 start-3 -translate-y-5 bg-gray-100 px-2 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white">Product Name</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label for="Price" className="relative">
                                            <input type="number" id="Price" placeholder="" className="peer ring-2 ring-gray-500 p-4 mt-7 w-full h-10 rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white" />
                                            <span className="absolute inset-y-0 start-3 -translate-y-5 bg-gray-100 px-2 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white">Price ($)</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label for="Stock" class="relative">
                                            <input type="number" id="Stock" placeholder="" className="peer ring-2 ring-gray-500 p-4 mt-7 w-full h-10 rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white" />
                                            <span className="absolute inset-y-0 start-3 -translate-y-5 bg-gray-100 px-2 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white">Stock</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative cursor-pointer py-3">
                                <div className="flex items-center justify-between space-x-5 border-2 border-gray-500 rounded px-4">
                                    <a className="py-2 text-base font-medium text-white lg:mx-4" onClick="">Category</a>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor" className="h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="invisible absolute z-50 flex w-full flex-col rounded-br rounded-bl bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                                    <a className="block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 hover:bg-gray-300 hover:rounded hover:px-2">T-Shirt</a>
                                    <a className="block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 hover:bg-gray-300 hover:rounded hover:px-2">Jacket</a>
                                    <a className="block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 hover:bg-gray-300 hover:rounded hover:px-2">Hat</a>
                                </div>
                            </div>
                            <button className="block w-full mt-7 rounded-lg border border-indigo-600 bg-linear-to-b from-yellow-300 to-yellow-600 px-12 hover:bg-transparen dark:hover:from-yellow-600 dark:hover:to-yellow-900 py-3 text-md font-medium dark:text-white transition-colors" type="submit">Add Product</button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}
export default AddProduct