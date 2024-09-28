import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import useRazorpay from "react-razorpay";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../../../../utils/form/Captitelize";

function UpgradePage() {
    const Styling = useMemo(() => ({
        TitleText: {
            color: "#000",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
        },
        Text1: {
            color: "#000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
        },
        Text2: {
            color: "#000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
        },
        Text3: {
            color: "#000",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
        },
        Text4: {
            color: "#000",
            fontFamily: "Poppins",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
        },
        btnText: {
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
        },
        btnText2: {
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
        },
        ListText: {
            color: "#000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "28px",
        },
    }));

    const router = useRouter();

    const { loading, data, error } = useSelector(
        (state) => state.upgradeplans.ChoosedPlan,
    );

    const [Razorpay] = useRazorpay();

    const PayNow = async () => {
        const axios = require("axios");
        const token = getCookie("authtoken");

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/v1/user/razorpay/order`,
                { planId: data?.id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "ngrok-skip-browser-warning": "true",
                    },
                },
            );

            const callbackUrl = `${process.env.NEXT_PUBLIC_API_URL}/v1/user/razorpay/is-order-complete?authToken=${token}&paymentHistoryToken=${response.data.paymentHistoryToken}`;
            const options = {
                key: "rzp_live_2SoKzqAUA6FY69",
                name: "Acme Corp",
                description: "Test Transaction",
                // "order_id": response.data.data.id,
                order_id: response.data.id,
                callback_url: callbackUrl, // Include the token in the callback URL
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp1 = new Razorpay(options);
            rzp1.on("payment.failed", (response) => {
                console.log(response.error);
                // Handle payment failure here
            });

            rzp1.open();
            // e.preventDefault();
        } catch (error) {
            // Handle error
            console.log("=== var error ===>", error);
        }
    };

    const SkeletonLoad = () => {
        return (
            <div className="pb-[40px] 2xl:space-y-[30px] xl:space-y-[18px] lg:space-y-[20px] space-y-[10px] w-full h-full grid place-items-center 2xl:mt-[100px] xl:mt-[80px] lg:mt-[70px]">
                <div
                    className="space-y-[5px] 
                      2xl:w-[650px] 2xl:h-[435px]
                      xl:w-[550px] xl:h-[350px]
                      lg:w-[650px] lg:h-[435px]
                      w-[650px] h-[435px]
                      border border-gray-200  shadow animate-pulse md:p-6 dark:border-gray-700
                      rounded-[18px]"
                >
                    <div className="p-[20px] 2xl:p-[20px] xl:p-[12px] lg:p-[10px] w-full flex justify-between items-center">
                        <div
                            className="pl-[10px] flex flex-col 
                              2xl:space-y-[14px]
                              xl:space-y-[12px]
                              lg:space-y-[10px]
                              space-y-[10px]"
                        >
                            <div class="h-[11px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-[10px]"></div>
                            <div class="h-[30px] bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-[10px]"></div>
                            <div class="h-[27px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-[5px]"></div>
                        </div>
                        <div className="pr-[10px]">
                            <div class="h-[25px] bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-[5px]"></div>
                        </div>
                    </div>
                    <div className="w-full grid place-items-center">
                        <div className="w-[90%] 2xl:w-[90%] xl:w-[95%] lg:w-[90%] h-[1px] bg-[#DEDEDE] grid place-items-center"></div>
                    </div>
                    <div className="p-[20px] 2xl:p-[20px] xl:p-[12px] lg:p-[10px]">
                        <div
                            className="pl-[10px] 
                              2xl:space-y-[20px]
                              xl:space-y-[15px]
                              space-y-[20px]"
                        >
                            <div class="h-[20px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-[5px]"></div>
                            <ul className="space-y-[10px]">
                                <li
                                    style={Styling?.ListText}
                                    className="2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px] flex items-center space-x-[21px]"
                                >
                                    <div className="h-[14px] bg-gray-200 rounded-full dark:bg-gray-700 w-[14px] "></div>
                                    <div class="h-[20px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 "></div>
                                </li>
                                <li
                                    style={Styling?.ListText}
                                    className="2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px] flex items-center space-x-[21px]"
                                >
                                    <div className="h-[14px] bg-gray-200 rounded-full dark:bg-gray-700 w-[14px] "></div>

                                    <div class="h-[20px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 "></div>
                                </li>
                                <li
                                    style={Styling?.ListText}
                                    className="2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px] flex items-center space-x-[21px]"
                                >
                                    <div className="h-[14px] bg-gray-200 rounded-full dark:bg-gray-700 w-[14px] "></div>
                                    <div class="h-[20px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 "></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full grid place-items-center">
                        <div className="w-[90%] 2xl:w-[90%] xl:w-[95%] lg:w-[90%] h-[1px] bg-[#DEDEDE] grid place-items-center"></div>
                    </div>
                    <div className="p-[20px] 2xl:p-[20px] xl:p-[12px] lg:p-[10px] flex justify-between">
                        <div className="pl-[10px] space-y-[10px]">
                            <div class="h-[20px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-[5px]"></div>
                            <div class="h-[10px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-[5px]"></div>
                        </div>
                        <div className="pr-[10px]">
                            <div class="h-[20px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-[5px]"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="pb-[40px] 2xl:space-y-[30px] xl:space-y-[18px] lg:space-y-[20px] space-y-[10px] w-full h-full grid place-items-center 2xl:mt-[100px] xl:mt-[80px] lg:mt-[70px]">
                <div>
                    <h1 style={Styling?.TitleText}>Your Plan Summary</h1>
                </div>
                {loading ? (
                    <SkeletonLoad />
                ) : (
                    <div
                        className="space-y-[5px] 
                2xl:w-[650px] 2xl:h-[435px]
                xl:w-[550px] xl:h-[350px]
                lg:w-[650px] lg:h-[435px]
                w-[650px] h-[435px]
                border-[1px] border-[#0F52BA] rounded-[18px]"
                    >
                        <div className="p-[20px] 2xl:p-[20px] xl:p-[12px] lg:p-[10px] w-full flex justify-between items-center">
                            <div
                                className="pl-[10px] flex flex-col 
                        2xl:space-y-[14px]
                        xl:space-y-[12px]
                        lg:space-y-[10px]
                        space-y-[10px]"
                            >
                                <h1
                                    className="2xl:text-[14px] xl:text-[12px] lg:text-[12px] text-[12px]"
                                    style={Styling?.Text1}
                                >
                                    Selected Plan{" "}
                                </h1>
                                <h1
                                    className="2xl:text-[20px] xl:text-[14px] lg:text-[14px] text-[14px]"
                                    style={Styling?.Text2}
                                >
                                    {capitalizeFirstLetter(data?.planName)} :{" "}
                                    {data?.planDuration === "monthly" ? "One Month" : "One Year"}
                                </h1>
                                <button
                                    onClick={() => router.back()}
                                    style={Styling?.btnText2}
                                    className="cursor-pointer hover:bg-[#F3F8FF] w-[112px] h-[27px] border-[1px] border-[#8225AF] rounded-[25px]"
                                >
                                    Change Plan
                                </button>
                            </div>
                            <div className="pr-[10px]">
                                <h1
                                    className="2xl:text-[20px] xl:text-[18px] lg:text-[14px] text-[14px]"
                                    style={Styling?.Text2}
                                >
                                    INR {data?.price}.00
                                </h1>
                            </div>
                        </div>
                        <div className="w-full grid place-items-center">
                            <div className="w-[90%] 2xl:w-[90%] xl:w-[95%] lg:w-[90%] h-[1px] bg-[#DEDEDE] grid place-items-center"></div>
                        </div>
                        <div className="p-[20px] 2xl:p-[20px] xl:p-[12px] lg:p-[10px]">
                            <div
                                className="pl-[10px] 
                        2xl:space-y-[20px]
                        xl:space-y-[15px]
                        space-y-[20px]"
                            >
                                <h1 style={Styling?.Text3}>Benefits You’ll Received</h1>
                                <ul>
                                    <li
                                        style={Styling?.ListText}
                                        className="2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px] flex items-center space-x-[21px]"
                                    >
                                        <Image
                                            alt="verify-tick"
                                            width={14}
                                            height={14}
                                            className="w-[14px] h-[14px]"
                                            src="/assests/dashboard/menu/verfied-tick.svg"
                                        />
                                        <h1> Message to {data?.allowNumberOfProfile} Profiles</h1>
                                    </li>
                                    <li
                                        style={Styling?.ListText}
                                        className="2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px] flex items-center space-x-[21px]"
                                    >
                                        <Image
                                            alt="verify-tick"
                                            width={14}
                                            height={14}
                                            className="w-[14px] h-[14px]"
                                            src="/assests/dashboard/menu/verfied-tick.svg"
                                        />
                                        <h1>
                                            Send request to {data?.allowNumberOfRequest} Profiles
                                        </h1>
                                    </li>
                                    <li
                                        style={Styling?.ListText}
                                        className="2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px] flex items-center space-x-[21px]"
                                    >
                                        <Image
                                            alt="verify-tick"
                                            width={14}
                                            height={14}
                                            className="w-[14px] h-[14px]"
                                            src="/assests/dashboard/menu/verfied-tick.svg"
                                        />
                                        <h1>Online Support</h1>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full grid place-items-center">
                            <div className="w-[90%] 2xl:w-[90%] xl:w-[95%] lg:w-[90%] h-[1px] bg-[#DEDEDE] grid place-items-center"></div>
                        </div>
                        <div className="p-[20px] 2xl:p-[20px] xl:p-[12px] lg:p-[10px] flex justify-between">
                            <div className="pl-[10px]">
                                <h1
                                    className="2xl:text-[20px] xl:text-[14px] lg:text-[14px] text-[14px]"
                                    style={Styling?.Text2}
                                >
                                    You’ll Pay Only
                                </h1>
                                <span style={Styling?.Text4}>Included All taxes (18% GST)</span>
                            </div>
                            <div className="pr-[10px]">
                                <h1
                                    className="2xl:text-[20px] xl:text-[18px] lg:text-[14px] text-[14px]"
                                    style={Styling?.Text2}
                                >
                                    INR {data?.price}.00
                                </h1>
                            </div>
                        </div>
                    </div>
                )}
                <div>
                    <button
                        id="grad-button"
                        style={Styling?.btnText}
                        onClick={PayNow}
                        className="w-[142px] 2xl:h-[50px] xl:h-[40px] lg:h-[40px] h-[40px] rounded-[25px]"
                    >
                        Pay Now
                    </button>
                </div>
            </div>
        </>
    );
}

export default UpgradePage;