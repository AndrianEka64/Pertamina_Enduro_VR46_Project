import { useEffect } from "react";
import { CiCircleAlert } from "react-icons/ci";

const PopupFalse = ({message, show, onClose}) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);
    if (!show) return null;
    return (
        <>
            <div className="fixed top-5 right-5 z-50">
                <div className="px-6 py-3 rounded-lg border flex gap-2 border-red-600 bg-linear-to-b dark:from-red-600 dark:to-red-900 text-white shadow-lg font-semibold">
                    <CiCircleAlert className="text-2xl font-bold"></CiCircleAlert>
                    {message}
                </div>
            </div>
        </>
    );
}
export default PopupFalse