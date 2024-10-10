import { useState, useCallback, useMemo } from "react";
import { getCookie } from "cookies-next";
import useUserActivity from "../../utils/hooks/UserActivity";
import NavBar from "../_components/layout/NavBar";
import SideBar from "../_components/layout/SideBar";
import dynamic from "next/dynamic";
import axios from "axios";

// Dynamically import components
const UserStory = dynamic(() => import('../_components/Container/UserStory'), { ssr: false });
const SearchUsers = dynamic(() => import('./dashboard/commonCompo/SearchParams/SearcheUsers'), { ssr: false });
const SidePanel = dynamic(() => import("../../components/long-term/common/SideSections/SidePanel"), { ssr: false });
const Footer = dynamic(() => import("../_components/layout/Footer"), { ssr: false });

const Layout = ({ Section, Show, children }) => {
    useUserActivity();

    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Memoize the token to prevent unnecessary API calls
    const token = useMemo(() => getCookie("authtoken"), []);

    // Handle search functionality
    const handleSearch = useCallback(async (searchTerm) => {
        setSearchTerm(searchTerm);
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/v1/user/user/userUniqueId/${searchTerm?.toLowerCase()}`,
                { headers: { 'Authorization': `Bearer ${token}` } }
            );
            setSearchResults(response?.data.data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    }, [token]);

    return (
        <>
            <NavBar handleSearch={handleSearch} />
            <SideBar />

            {Section !== "profile" ? (
                <div id='main-centerlized-content' className='flex justify-center flex-col'>
                    <div id='first-child' className='pl-[0px] lg:pl-[240px] 2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]'>
                        <div className='h-full'>
                            <div id='story-centerlized-content' className='h-[60px] pl-[15px] md:pl-[15px] lg:pl-[10px] 2xl:pl-0 xl:pl-0'>
                                <UserStory />
                            </div>
                            {/* Search and Content Display */}
                            {searchTerm === '' ? (
                                <>
                                    {children}
                                </>
                            ) : (
                                <div>

                                    {searchResults.length === 0 ? (
                                        <div className='w-[48vw] h-screen grid place-items-center relative left-[-55px]'>
                                            <div className="">
                                                <p>No search results</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="translate-x-[10px]">
                                            <SearchUsers searchResults={searchResults} />
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Side Panel */}
                            <SidePanel Section={Section} />
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {children}
                </>
            )}

            {/* Footer Section */}
            <div className={`${Show ? "" : "hidden"} pt-[100px]`}>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
