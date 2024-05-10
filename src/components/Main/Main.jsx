import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="px-2 md:px-24">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;