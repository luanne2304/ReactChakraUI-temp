import { Outlet } from "react-router-dom";
import SidebarAdmin from "../Sidebar/SidebarAdmin";

const AppLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <SidebarAdmin />
        <Outlet />
    </div>;
};

export default AppLayout;