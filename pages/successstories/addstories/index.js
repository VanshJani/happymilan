import React, { useEffect, useState } from "react";
import AuthNavbar from "../../_components/layout/AuthNavbar";
import Footer from "../../_components/layout/Footer";
import { useRouter } from "next/router";
import UploadImage from "./UploadImage";
import GlobalFooter from "../../_components/layout/GlobalFooter";
import SearchResults from "./comp/SearchResults";
import SearchBar from "./comp/SearchBar";

function index() {
    const router = useRouter();
    const TitleText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    const Text1 = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    }
    const Text2 = {
        color: "#9D9D9D",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const SubmitStories = () => {

    }

    const [results, setResults] = useState([]);
    const [SelectedValue, SetSelectedValue] = useState("")

    useEffect(() => {
        setResults([])
        console.log("Selected : ", SelectedValue)
    }, [SetSelectedValue, SelectedValue])


    return (
        <>
            <AuthNavbar />
            <div className="w-full h-full grid place-items-center">
                <div className=" mt-[100px] w-full  lg:w-[900px] 2xl:w-[1100px] xl:w-[1200px] 2xl:h-[full] xl:h-[full">
                    {/* <div className="flex flex-col lg:flex-row lg:w-full 2xl:w-[1200px] xl:w-[1200px] justify-center gap-x-[25px] 2xl:gap-x-[25px] xl:gap-x-[25px] lg:gap-x-[25px] md:gap-x-[25px] gap-x-[25px] pt-[39px]"> */}
                    <div className="flex justify-between space-x-[20px] w-full ">
                        <div className="space-y-[32px] w-full lg:w-full pl-[20px] 2xl:pl-0 xl:pl-0  2xl:w-[670px] xl:w-[670px] h-[full]  rounded-[8px]">
                            <div className="space-y-[10px]">
                                <div className="">
                                    <h1 className="text-[18px] text-[#000]" style={Text1}>
                                        Share Your Story<br />
                                        <span className="" style={Text2}>Found your partner on HappyMilan?</span>
                                    </h1>

                                </div>
                                <div className="w-[full] h-[1px] bg-[#E9E9E9]"></div>
                            </div>
                            <div className="w-full flex flex-col gap-y-[45px]">
                                <ul className="space-y-[20px]">
                                    <li className="space-y-[20px]">

                                        <div>
                                            <h1 style={TitleText} className="text-[14px]">Your & Your Partner Name</h1>
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Rohan & Priya" className="outline-none pl-[20px] border-[1px] border-[#B5B5B5] hover:border-[#000] w-[90%] lg:w-[100%] 2xl:w-[100%] xl:w-[100%] h-[50px] rounded-[10px]" />
                                        </div>
                                    </li>
                                    <li className="space-y-[20px]">

                                        <div>
                                            <h1 style={TitleText} className="text-[14px]">When did you get married?</h1>
                                        </div>
                                        <div>
                                            <input type="text" placeholder="DD/MM/YYYY" className="outline-none pl-[20px] border-[1px] border-[#B5B5B5] hover:border-[#000] w-[90%] lg:w-[100%] 2xl:w-[100%] xl:w-[100%] h-[50px] rounded-[10px]" />
                                        </div>
                                    </li>
                                    <li className="space-y-[20px]">

                                        <div>
                                            <h1 style={TitleText} className="text-[14px]">
                                                Your Partner’s ID <span className="text-[#8D8D8D]">(Ex. B100023)</span>
                                            </h1>
                                        </div>
                                        <div>
                                            {/* <input type="text" placeholder="Enter Here" className="outline-none pl-[20px] border-[1px] border-[#B5B5B5] hover:border-[#000] w-[90%] lg:w-[100%] 2xl:w-[100%] xl:w-[100%] h-[50px] rounded-[10px]" /> */}
                                            <SearchBar  setResults={setResults} SelectedValue={SelectedValue} />
                                            {results && results?.length > 0 && <SearchResults SetSelectedValue={SetSelectedValue} results={results} />}
                                        </div>
                                    </li>
                                    <li className="space-y-[20px]">


                                        <div className="">
                                            <h1 style={TitleText} className="text-[14px] ">
                                                Type or Paste Your Story
                                            </h1>
                                        </div>
                                        <div>
                                            <textarea
                                                type="text"
                                                className="outline-none pl-[20px] pt-[5px] border-[1px] border-[#B5B5B5] hover:border-[#000] w-[90%] lg:w-[100%] 2xl:w-[100%] xl:w-[100%] h-[256px] rounded-[10px]"
                                            />
                                        </div>

                                    </li>

                                </ul>

                                <div className="w-full h-full">
                                    <ul className="flex justify-between">
                                        <li>
                                            <button onClick={() => router.back()} className="w-[104px] h-[50px] bg-[#FFF] outline-none rounded-[23px]  hover:bg-[#F3F8FF]  border-[1px] border-[#8225AF] ">Back</button>
                                        </li>
                                        <li>
                                            <button onClick={() => router.push("/successstories")} id="grad-button" className="w-[104px] h-[50px]  outline-none border-none rounded-[23px]">Publish</button>
                                        </li>
                                    </ul>

                                </div>

                            </div>
                        </div>

                        <UploadImage />
                        <div className=" lg:hidden  w-full lg:w-auto  flex justify-center items-center space-x-[20px]  lg:mt-[0px] mt-[10px]">
                            <button
                                onClick={SubmitStories}
                                className="w-[104px] h-[50px] rounded-[10px] border-[1px] bg-[#0F52BA]"
                                style={TitleText}
                            >
                                {" "}
                                <span className="text-[14px] text-[#fff]" style={TitleText}>
                                    Publish
                                </span>
                            </button>
                            <h1
                                onClick={() => router.back()}
                                className="inline text-[14px] lg:mr-[20px]  pb-[10px] text-[#000] lg:pb-[0px]"
                                style={TitleText}
                            >
                                Not now
                            </h1>
                        </div>
                    </div>
                </div>

                <div id="footer-section" className="border-t-[1px] border-t-[#DEDEDE] w-full mt-[50px]">
                    <GlobalFooter />
                </div>
            </div >
        </>
    );
}

export default index;
