import { useState } from "react";
import api from "../service/api"
import { useNavigate } from "react-router-dom";
import PopupTrue from "../components/PopupTrue";
import PopupFalse from "../components/PopupFalse";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
    const [popupSuccess, setPopupSuccess] = useState(false);
    const [popupError, setPopupError] = useState(false);
    const [popupMessage, setPopupMessage] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.state?.popupSuccess) {
            setPopupMessage(location.state.message);
            setPopupSuccess(true);
        }
    }, [location.state]);
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await api.post("/login", {
                email,
                password,
            });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            console.log("LOGIN SUCCESS:", res.data);
            navigate("/dashboard", {
                state: {
                    popupSuccess: true,
                    message: "login successfully"
                }
            });
        } catch (err) {
            if (err.response?.status === 401) {
                setPopupMessage("Email atau password salah");
                setPopupError(true);
            } else if (err.response?.status === 422) {
                setPopupMessage("Form Tidak Valid");
                setPopupError(true);
            } else {
                setPopupMessage("Terjadi Kesalahan Server");
                setPopupError(true);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <PopupTrue message={popupMessage} show={popupSuccess} onClose={() => setPopupSuccess(false)}></PopupTrue>
            <PopupFalse message={popupMessage} show={popupError} onClose={() => setPopupError(false)}></PopupFalse>
            <div className="min-h-screen flex items-center justify-center bg-radial-[at_0%_0%] from-yellow-300 to-white to-75% dark:to-black dark:to-75%">
                <div className="w-screen mx-auto max-w-md space-y-4 rounded-2xl shadow-xl/30 dark:shadow-yellow-300 border-2 border-gray-300 bg-gray-100 p-10 dark:border-yellow-300 dark:bg-linear-to-bl dark:from-gray-700 dark:to-black">
                    <div className="flex justify-center">
                        <img src="logovr46.jpg" className="h-14 md:h-20 lg:h-26" alt="" />
                    </div>
                    <h1 className="text-md font-semibold text-center dark:text-white">Sign in to continue</h1>
                    <form onSubmit={handleLogin}>
                        <div>
                            {error && <p>{error}</p>}
                            <label htmlFor="Email" className="relative">
                                <input onChange={(e) => setEmail(e.target.value)} type="text" id="Email" placeholder="" className="peer ring-2 ring-gray-500 p-4 w-full h-10 rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-slate-900 dark:text-white" />
                                <span className="absolute inset-y-0 start-3 -translate-y-5 bg-gray-100 px-2 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white">Email</span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="Password" className="relative">
                                <input onChange={(e) => setPassword(e.target.value)} type="password" id="Password" placeholder="" className="peer ring-2 ring-gray-500 p-4 mt-7 w-full h-10 rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white" />
                                <span className="absolute inset-y-0 start-3 -translate-y-5 bg-gray-100 px-2 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white">Password</span>
                            </label>
                        </div>
                        <button disabled={loading} className="block w-full mt-7 rounded-lg border border-indigo-600 bg-linear-to-b from-yellow-300 to-yellow-600 px-12 hover:bg-transparen dark:hover:from-yellow-600 dark:hover:to-yellow-900 py-3 text-md font-medium dark:text-white transition-colors" type="submit">{loading ? "Loading..." : "Login"}</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login