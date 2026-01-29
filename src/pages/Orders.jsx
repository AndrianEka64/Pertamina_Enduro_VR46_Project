import OrdersContent from "../components/OrdersContent"
import Sidebar from "../components/Sidebar"

const Orders = () => {
    return (
        <>
            <div className="flex h-screen">
                <Sidebar></Sidebar>
                <div className="flex-1 overflow-auto">
                    <OrdersContent></OrdersContent>
                </div>
            </div>
        </>
    )
}
export default Orders