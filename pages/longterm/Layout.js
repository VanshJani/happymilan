// app/layout.js

import useUserActivity from "../../utils/hooks/UserActivity";
import Footer from "../_components/layout/Footer";
import NavBar from "../_components/layout/NavBar";
import SideBar from "../_components/layout/SideBar";
import ProtectedRoutes from "../routes/ProtectedRoutes";



const Layout = ({ Show, children, handleSearch }) => {

    useUserActivity();


    return (
        <>
            <ProtectedRoutes />
            <NavBar handleSearch={handleSearch} />
            <SideBar />

            {/* Main Section */}



            {children}

            <div className={`${Show ? "" : "hidden"} pt-[100px]`}>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
