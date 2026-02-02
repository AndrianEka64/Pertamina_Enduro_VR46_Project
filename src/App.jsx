import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Merchandise from "./pages/Merchandise";
import Login from "./pages/Login";
import Dahsboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/merchandise" element={<Merchandise></Merchandise>}></Route>
          <Route path="/detail" element={<Detail></Detail>}></Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dahsboard></Dahsboard>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/orders" element={<Orders></Orders>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
