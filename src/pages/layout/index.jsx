import { Outlet } from "react-router-dom";
import Header from "./header";
import SideBar from "./sidebar";
import './style.scss';

const LayoutComponent = () => {
    return (
        <div className="layout-container">
            <SideBar />
            <div className="layout-container__content">
                <Header />
                <div className="layout-container__inner">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default LayoutComponent