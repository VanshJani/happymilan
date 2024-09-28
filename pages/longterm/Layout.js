// app/layout.js

import SidePanel from "../../components/long-term/common/SideSections/SidePanel";
import useUserActivity from "../../utils/hooks/UserActivity";
import Footer from "../_components/layout/Footer";
import NavBar from "../_components/layout/NavBar";
import SideBar from "../_components/layout/SideBar";



const Layout = ({ Section, Show, children, handleSearch }) => {

    useUserActivity();


    return (
        <>
            <NavBar handleSearch={handleSearch} />
            <SideBar />

            {
                Section != "profile" ?
                    <>
                        <div id='main-centerlized-content' className='flex justify-center flex-col'>
                            <div id='first-child' className='pl-[0px] lg:pl-[240px] 2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]'>

                                {children}

                                <SidePanel Section={Section} />
                            </div>
                        </div>
                    </>
                    :
                    <>
                        {children}
                    </>
            }
            <div className={`${Show ? "" : "hidden"} pt-[100px]`}>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
