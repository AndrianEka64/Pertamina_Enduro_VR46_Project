import ProductContent from "../components/ProductContent"
import Sidebar from "../components/Sidebar"

const Product = () => {
    return (
        <>
            <div className="flex h-screen">
                <Sidebar></Sidebar>
                <div className="flex-1 overflow-auto">
                    <ProductContent></ProductContent>
                </div>
            </div>
        </>
    )
}
export default Product