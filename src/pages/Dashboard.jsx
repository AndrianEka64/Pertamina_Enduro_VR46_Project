import DashboardContent from "../components/DashboardContent"
import Sidebar from "../components/Sidebar"

const Dahsboard = () => {
    return (
        <>
            <div className="flex h-screen">
                <Sidebar></Sidebar>
                <div className="flex-1 overflow-auto">
                    <DashboardContent></DashboardContent>
                </div>
            </div>
        </>
    )
}
export default Dahsboard