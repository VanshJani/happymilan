import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DatingProfileSelection from "../sections/DatingProfileSelection";
import { useDispatch, useSelector } from "react-redux";
import {
    DatingAdditionalInfo,
    DatingGenerealInfo,
    DatingHobbyInfo,
    DatingImageUpload,
    DatingPreferencesInfo,
} from "../../../../store/dating-services/Redux-actions/register/registerAction";

function RegisterLayout({ slug, children }) {
    const [activeTab, setActiveTab] = useState(0);

    const Title = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "34px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
    };

    const Content = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    const HelpText = {
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    const router = useRouter();
    const dispatch = useDispatch();

    const { userType, general, address, hobby, upload, partnerpref } =
        useSelector((state) => state?.datingregister?.datingForm);

    const steps = [
        { name: "ProfileSelect", slug: "profileselect" },
        { name: "General Details", slug: "general" },
        { name: "Additional Details", slug: "details" },
        { name: "Hobbies & Interests", slug: "hobby" },
        { name: "Upload Photos", slug: "uplaod" },
        { name: "Preferences", slug: "preferences" },
    ];

    // Sync activeTab with URL slug
    const [isNext, setIsNext] = useState(true); // Track whether user clicked "Next" or "Prev"

    // Track the active tab based on the current slug
    useEffect(() => {
        const stepIndex = steps.findIndex((step) => step.slug === slug);
        if (stepIndex >= 0) {
            setActiveTab(stepIndex);
        }
    }, [slug]);

    const apiCalls = {
        2: async () => {
            try {
                dispatch(DatingGenerealInfo({ userType, general }));
                // Make the API call for general details
            } catch (error) {
                console.error("Error in General Details API:", error);
            }
        },
        3: async () => {
            try {
                dispatch(DatingAdditionalInfo(address));
            } catch (error) {
                console.error("Error in Additional Details API:", error);
            }
        },
        4: async () => {
            try {
                dispatch(DatingHobbyInfo(hobby?.hobbyval));
            } catch (error) {
                console.error("Error in Hobbies API:", error);
            }
        },
        5: async () => {
            try {
                dispatch(DatingImageUpload(upload));
            } catch (error) {
                console.error("Error in Hobbies API:", error);
            }
        },
        // Add more API calls as needed for other steps
    };

    // API calls based on the current step, but only if moving forward (isNext === true)
    useEffect(() => {
        if (activeTab >= 1 && isNext) {
            apiCalls[activeTab]?.(); // Trigger the respective API call based on the active tab
        }
    }, [activeTab, isNext]);

    const goToNextStep = () => {
        setIsNext(true); // Set flag to true when moving forward
        if (activeTab < steps.length - 1) {
            router.push(`/dating/register/${steps[activeTab + 1].slug}`);
        }
        if (activeTab === 5) {
            try {
                dispatch(DatingPreferencesInfo(partnerpref));
                setTimeout(() => {
                    router.push("/dating/dashboard");
                }, 1000);
            } catch (error) {
                console.error("Error in Hobbies API:", error);
            }
        }
    };

    const goToPrevStep = () => {
        setIsNext(false); // Set flag to false when moving backward
        if (activeTab > 0) {
            router.push(`/dating/register/${steps[activeTab - 1].slug}`);
        }
    };

    if (activeTab === 0) {
        return <DatingProfileSelection goToNextStep={goToNextStep} />;
    }

    return (
        <>
            <div className="w-full h-full grid place-items-center pt-[100px]">
                <div className="flex justify-evenly items-center w-full">
                    <div className="xl:block hidden w-[332px]">
                        <ul className="fixed left-[120px] top-[200px] space-y-[40px]">
                            <li className="space-y-[11px] w-[335px]">
                                <h1 style={Title}>{steps?.[activeTab]?.name}</h1>
                                <p style={Content} className="w-[332px]">
                                    Welcome to Matrimoney, the premier online platform for finding
                                    your perfect life partner!{" "}
                                </p>
                            </li>
                            <li>
                                <div className="h-[1px] w-full bg-[#EBEBEB]"></div>
                            </li>
                            <li>
                                <p style={HelpText} className="text-[#000]">
                                    Need any help?{" "}
                                    <span className="text-[#0F52BA]">Contact Us</span>
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="h-[511px] w-[707px] border-l-[1px] border-l-[#EBEBEB]">
                        <div className="ml-[66px] w-[647px]">
                            <div className="w-full">
                                <ul className="flex justify-between">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="20"
                                            viewBox="0 0 22 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M10.515 9.30166C9.16558 9.30166 8.05309 8.86387 7.17752 7.9883C6.30195 7.11273 5.86416 5.99799 5.86416 4.6441C5.86416 3.29019 6.30195 2.17769 7.17752 1.3066C8.05309 0.435533 9.16558 0 10.515 0C11.8644 0 12.9769 0.435533 13.8525 1.3066C14.728 2.17769 15.1658 3.29019 15.1658 4.6441C15.1658 5.99799 14.728 7.11273 13.8525 7.9883C12.9769 8.86387 11.8644 9.30166 10.515 9.30166ZM0 20V17.3389C0 16.5858 0.199517 15.9298 0.59855 15.3708C0.997584 14.8118 1.51615 14.3822 2.15425 14.082C3.62993 13.4259 5.05245 12.9316 6.42181 12.5991C7.79119 12.2666 9.15544 12.1003 10.5146 12.1003C11.8737 12.1003 13.2345 12.2702 14.597 12.6099C15.9594 12.9496 17.3756 13.4435 18.8454 14.0915C19.5084 14.3909 20.0383 14.8187 20.4349 15.3749C20.8316 15.9312 21.03 16.5858 21.03 17.3389V20H0ZM1.59071 18.4093H19.4393V17.3389C19.4393 16.9741 19.3238 16.6245 19.0928 16.2901C18.8618 15.9558 18.5603 15.6934 18.1882 15.5028C16.8096 14.8324 15.5092 14.3628 14.2871 14.0941C13.065 13.8254 11.8076 13.691 10.515 13.691C9.22239 13.691 7.95559 13.8254 6.71458 14.0941C5.47357 14.3628 4.17543 14.8324 2.82016 15.5028C2.4481 15.6934 2.15017 15.9558 1.92639 16.2901C1.7026 16.6245 1.59071 16.9741 1.59071 17.3389V18.4093ZM10.515 7.71098C11.3903 7.71098 12.1192 7.41979 12.7016 6.8374C13.2839 6.25503 13.5751 5.52617 13.5751 4.65083C13.5751 3.77549 13.2839 3.04664 12.7016 2.46427C12.1192 1.8819 11.3903 1.59071 10.515 1.59071C9.63965 1.59071 8.91079 1.8819 8.32843 2.46427C7.74606 3.04664 7.45487 3.77549 7.45487 4.65083C7.45487 5.52617 7.74606 6.25503 8.32843 6.8374C8.91079 7.41979 9.63965 7.71098 10.515 7.71098Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="20"
                                            viewBox="0 0 16 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M7.94624 9.66109C8.41776 9.66109 8.81976 9.49321 9.15224 9.15745C9.48474 8.82167 9.65099 8.41803 9.65099 7.94653C9.65099 7.47501 9.4831 7.07302 9.14732 6.74053C8.81154 6.40803 8.4079 6.24178 7.9364 6.24178C7.46489 6.24178 7.06289 6.40967 6.73041 6.74545C6.39791 7.08123 6.23166 7.48487 6.23166 7.95637C6.23166 8.42789 6.39955 8.82989 6.73532 9.16237C7.0711 9.49485 7.47474 9.66109 7.94624 9.66109ZM7.94132 18.4178C10.1386 16.458 11.8125 14.5891 12.9631 12.8114C14.1136 11.0336 14.6889 9.48038 14.6889 8.15174C14.6889 6.12105 14.044 4.45202 12.7541 3.14466C11.4642 1.83728 9.85996 1.18359 7.94132 1.18359C6.02269 1.18359 4.41844 1.83728 3.12856 3.14466C1.83866 4.45202 1.19372 6.12105 1.19372 8.15174C1.19372 9.48038 1.77878 11.0336 2.94891 12.8114C4.11904 14.5891 5.78318 16.458 7.94132 18.4178ZM7.94132 20C5.29355 17.7056 3.30805 15.5704 1.98482 13.5944C0.661606 11.6183 0 9.80409 0 8.15174C0 5.72384 0.785368 3.75824 2.3561 2.25495C3.92682 0.751649 5.78856 0 7.94132 0C10.0941 0 11.9558 0.751649 13.5265 2.25495C15.0973 3.75824 15.8826 5.72384 15.8826 8.15174C15.8826 9.80409 15.221 11.6183 13.8978 13.5944C12.5746 15.5704 10.5891 17.7056 7.94132 20Z"
                                                fill={activeTab >= 2 ? "#000" : "#C0C0C0"}
                                            />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M1.2105 9.40284H4.97775C4.87519 8.527 4.63294 7.68927 4.25101 6.88968C3.8691 6.09008 3.38596 5.40147 2.80161 4.82386C2.35087 5.47165 1.98009 6.17881 1.68927 6.94533C1.39844 7.71188 1.23885 8.53105 1.2105 9.40284ZM15.0222 9.40284H18.7895C18.7611 8.53779 18.6016 7.72368 18.3107 6.96052C18.0199 6.19736 17.6491 5.49189 17.1984 4.84412C16.5546 5.47435 16.0567 6.17274 15.7044 6.93928C15.3522 7.70581 15.1248 8.527 15.0222 9.40284ZM2.80161 15.1397C3.42511 14.5095 3.91803 13.8138 4.28038 13.0526C4.64273 12.2915 4.87519 11.473 4.97775 10.5972H1.2105C1.24559 11.469 1.40686 12.282 1.69432 13.0364C1.98178 13.7908 2.35087 14.4919 2.80161 15.1397ZM17.1984 15.1397C17.6491 14.4919 18.0199 13.7891 18.3107 13.0314C18.6016 12.2736 18.7611 11.4622 18.7895 10.5972H15.0222C15.1248 11.473 15.3522 12.2915 15.7044 13.0526C16.0567 13.8138 16.5546 14.5095 17.1984 15.1397ZM6.17812 9.40284H9.40284V1.2105C8.26789 1.29957 7.20918 1.57859 6.22673 2.04756C5.24425 2.51652 4.36907 3.14304 3.60119 3.92712C4.32725 4.64642 4.91159 5.47638 5.35422 6.41702C5.79687 7.35763 6.07151 8.35291 6.17812 9.40284ZM10.5972 9.40284H13.8219C13.9285 8.35291 14.2041 7.35594 14.6488 6.41194C15.0935 5.46795 15.6822 4.63968 16.415 3.92712C15.6539 3.14304 14.7777 2.51652 13.7864 2.04756C12.7952 1.57859 11.7321 1.29957 10.5972 1.2105V9.40284ZM9.40284 18.7895V10.5972H6.17812C6.07151 11.6606 5.79857 12.6548 5.3593 13.58C4.92002 14.5051 4.33398 15.3239 3.60119 16.0364C4.36907 16.8205 5.22569 17.4531 6.17104 17.9342C7.11639 18.4153 8.19366 18.7004 9.40284 18.7895ZM10.5972 18.7895C11.7996 18.7004 12.8795 18.4187 13.837 17.9443C14.7945 17.47 15.6539 16.8408 16.415 16.0567C15.6822 15.3441 15.0935 14.5219 14.6488 13.5901C14.2041 12.6582 13.9285 11.6606 13.8219 10.5972H10.5972V18.7895ZM10 20C8.61808 20 7.31883 19.7372 6.10223 19.2115C4.88563 18.6859 3.82726 17.973 2.92714 17.0729C2.027 16.1727 1.31411 15.1144 0.788476 13.8978C0.262825 12.6812 0 11.3819 0 10C0 8.61808 0.262825 7.31883 0.788476 6.10223C1.31411 4.88563 2.027 3.82726 2.92714 2.92714C3.82726 2.027 4.88563 1.31411 6.10223 0.788477C7.31883 0.262826 8.61808 0 10 0C11.3819 0 12.6812 0.262826 13.8978 0.788477C15.1144 1.31411 16.1727 2.027 17.0729 2.92714C17.973 3.82726 18.6859 4.88563 19.2115 6.10223C19.7372 7.31883 20 8.61808 20 10C20 11.3819 19.7372 12.6812 19.2115 13.8978C18.6859 15.1144 17.973 16.1727 17.0729 17.0729C16.1727 17.973 15.1144 18.6859 13.8978 19.2115C12.6812 19.7372 11.3819 20 10 20Z"
                                                fill={activeTab >= 3 ? "#000" : "#C0C0C0"}
                                            />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M2.01937 20C1.44396 20 0.963542 19.8073 0.578125 19.4219C0.192708 19.0365 0 18.556 0 17.9806V2.01937C0 1.44396 0.192708 0.963542 0.578125 0.578125C0.963542 0.192708 1.44396 0 2.01937 0H17.9806C18.556 0 19.0365 0.192708 19.4219 0.578125C19.8073 0.963542 20 1.44396 20 2.01937V17.9806C20 18.556 19.8073 19.0365 19.4219 19.4219C19.0365 19.8073 18.556 20 17.9806 20H2.01937ZM2.01937 18.75H17.9806C18.1731 18.75 18.3495 18.6699 18.5097 18.5097C18.6699 18.3495 18.75 18.1731 18.75 17.9806V2.01937C18.75 1.82687 18.6699 1.65052 18.5097 1.49031C18.3495 1.3301 18.1731 1.25 17.9806 1.25H2.01937C1.82687 1.25 1.65052 1.3301 1.49031 1.49031C1.3301 1.65052 1.25 1.82687 1.25 2.01937V17.9806C1.25 18.1731 1.3301 18.3495 1.49031 18.5097C1.65052 18.6699 1.82687 18.75 2.01937 18.75ZM4.375 15.625H15.8172L12.2838 10.9134L9.01437 15.0481L6.82687 12.4038L4.375 15.625Z"
                                                fill={activeTab >= 4 ? "#000" : "#C0C0C0"}
                                            />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="20"
                                            viewBox="0 0 22 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M10.515 9.30166C9.16558 9.30166 8.05309 8.86387 7.17752 7.9883C6.30195 7.11273 5.86416 5.99799 5.86416 4.6441C5.86416 3.29019 6.30195 2.17769 7.17752 1.3066C8.05309 0.435533 9.16558 0 10.515 0C11.8644 0 12.9769 0.435533 13.8525 1.3066C14.728 2.17769 15.1658 3.29019 15.1658 4.6441C15.1658 5.99799 14.728 7.11273 13.8525 7.9883C12.9769 8.86387 11.8644 9.30166 10.515 9.30166ZM0 20V17.3389C0 16.5858 0.199517 15.9298 0.59855 15.3708C0.997584 14.8118 1.51615 14.3822 2.15425 14.082C3.62993 13.4259 5.05245 12.9316 6.42181 12.5991C7.79119 12.2666 9.15544 12.1003 10.5146 12.1003C11.8737 12.1003 13.2345 12.2702 14.597 12.6099C15.9594 12.9496 17.3756 13.4435 18.8454 14.0915C19.5084 14.3909 20.0383 14.8187 20.4349 15.3749C20.8316 15.9312 21.03 16.5858 21.03 17.3389V20H0ZM1.59071 18.4093H19.4393V17.3389C19.4393 16.9741 19.3238 16.6245 19.0928 16.2901C18.8618 15.9558 18.5603 15.6934 18.1882 15.5028C16.8096 14.8324 15.5092 14.3628 14.2871 14.0941C13.065 13.8254 11.8076 13.691 10.515 13.691C9.22239 13.691 7.95559 13.8254 6.71458 14.0941C5.47357 14.3628 4.17543 14.8324 2.82016 15.5028C2.4481 15.6934 2.15017 15.9558 1.92639 16.2901C1.7026 16.6245 1.59071 16.9741 1.59071 17.3389V18.4093ZM10.515 7.71098C11.3903 7.71098 12.1192 7.41979 12.7016 6.8374C13.2839 6.25503 13.5751 5.52617 13.5751 4.65083C13.5751 3.77549 13.2839 3.04664 12.7016 2.46427C12.1192 1.8819 11.3903 1.59071 10.515 1.59071C9.63965 1.59071 8.91079 1.8819 8.32843 2.46427C7.74606 3.04664 7.45487 3.77549 7.45487 4.65083C7.45487 5.52617 7.74606 6.25503 8.32843 6.8374C8.91079 7.41979 9.63965 7.71098 10.515 7.71098Z"
                                                fill={activeTab >= 5 ? "black" : "#C0C0C0"}
                                            />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <div className="">{children}</div>
                            <div className="w-full h-full grid place-items-center">
                                <div className="fixed  z-10 bottom-0 flex justify-center bg-[#FFF]  w-full 2xl:h-[100px] xl:h-[100px] lg:h-[80px] h-[80px]">
                                    {activeTab > 0 ? (
                                        <>
                                            <div className="w-[647px] mt-[20px]">
                                                <ul className="flex justify-between w-[647px]">
                                                    <li className="">
                                                        <button
                                                            onClick={goToPrevStep}
                                                            className="w-[97px] h-[44px] border-[1px] border-[#000] rounded-[22px]"
                                                        >
                                                            Back
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={goToNextStep}
                                                            className="w-[153px] h-[44px] border-[1px] border-[#000] rounded-[22px] bg-[#000] text-[#FFF]"
                                                        >
                                                            {"Continue"}
                                                            <Image
                                                                width={24}
                                                                height={24}
                                                                alt="next"
                                                                src={"/assests/login/Arrow-reg.svg"}
                                                                className="relative left-[8px] inline"
                                                            />
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterLayout;