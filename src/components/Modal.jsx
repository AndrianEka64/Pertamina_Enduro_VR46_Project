const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null
    }
    return (
        <>
            <div className="fixed inset-0 z-50 grid place-content-center bg-white/22 dark:bg-black/22 p-4" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
                    <div className="flex items-start justify-between">
                        <h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">Preview</h2>
                        <button onClick={onClose} type="button" className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="mt-4">
                        <p className="text-pretty text-gray-700 dark:text-gray-200">
                            <div className="flex gap-3">
                                <img src="merch2.webp" className="h-64 rounded-2xl" alt="" />
                                <ul className="text-md">
                                    <li className="my-3"><span className="font-bold">Product Name :</span> Pertamina Enduro VR46 Racing Team T-Shirt (yellow)</li><hr></hr>
                                    <li className="my-3"><span className="font-bold">Category :</span> T-Shirt</li>
                                    <li className="my-3"><span className="font-bold">Price :</span> $29.99</li>
                                    <li className="my-3"><span className="font-bold">Stock :</span> 200</li>
                                    <li className="my-3">
                                        <span className="font-bold block">Status :</span>
                                        <div class="text-center w-full mt-4 rounded-lg border border-green-600 bg-linear-to-b from-green-400/50 to-green-600/50 hover:bg-transparen dark:hover:from-green-600 dark:hover:to-green-900 p-1 text-sm font-medium dark:text-white transition-colors">Available</div>
                                    </li>
                                </ul>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Modal