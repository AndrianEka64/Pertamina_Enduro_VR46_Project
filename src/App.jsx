import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Merchandise from "./pages/Merchandise";
import Login from "./pages/Login";
import Dahsboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import Detail from "./pages/Detail";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/merchandise" element={<Merchandise></Merchandise>}></Route>
          <Route path="/detail/:id" element={<Detail></Detail>}></Route>

          <Route path="/login" element={<Login></Login>}></Route>

          <Route element={<ProtectedRoute/>}>
            <Route path="/dashboard" element={<Dahsboard></Dahsboard>}></Route>
            <Route path="/product" element={<Product></Product>}></Route>
            <Route path="/orders" element={<Orders></Orders>}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
