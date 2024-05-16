import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <div>
            <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-380px)]">
                <Outlet></Outlet>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;