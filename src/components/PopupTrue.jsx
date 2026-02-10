import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const PopupTrue = ({message, show, onClose}) => {
    useEffect(()=>{
        if (show) {
            const timer = setTimeout(()=>{
                onClose();
            },3000);
            return () => clearTimeout(timer);
        }
    },[show, onClose]);
    if(!show) return null;
    return (
        <>
            <div className="fixed top-5 right-5 z-50">
                <div className="px-6 py-3 rounded-lg border flex gap-2 border-green-600 bg-linear-to-b dark:from-green-600 dark:to-green-900 text-white shadow-lg font-semibold">
                    <FaCheckCircle className="text-2xl font-bold"></FaCheckCircle>
                    {message}
                </div>
            </div>
        </>
    );
}
export default PopupTrue