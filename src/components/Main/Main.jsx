import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../../pages/shared/Footer/Footer";

const Main = () => {
    return (
        <div className="px-2">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-250px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;