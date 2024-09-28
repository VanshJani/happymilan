import { FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, TwitterIcon, WhatsappIcon, WhatsappShareButton } from "next-share";
import Image from "next/image";
import React, { useState } from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";

function ShareModal({ isOpen, onClose, data, }) {
  if (!isOpen) return null;
  const TitleText = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const SocialText = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  };
  const Btntext = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  };

  const [Copied, IsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(data)
      .then(() => {
        IsCopied(true)
        setTimeout(() => {
          IsCopied(false)
        }, 2000);
      })
      .catch((error) => console.error("Failed to copy:", error));
  };

  const NewTabOpen = () => {
    const url = data;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 max-w-xl md:h-[80%] lg:h-[359px]">
          <div className="flex">
            <div className="lg:w-[500px] w-full items-center flex  justify-between">
              <div className="place-items-center">
                <h1
                  className=" relative 2xl:left-[10px] xl:left-[8px] text-[14px] text-[black]"
                  style={TitleText}
                >
                  {"Share with Friends"}
                </h1>
              </div>
              <div>
                <Image
                  width={24}
                  height={24}
                  alt="close-icon"
                  className="cursor-pointer"
                  onClick={onClose}
                  loading='lazy'
                  src="/assests/social/close.svg"
                />
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <div className="flex items-center justify-center">
              <div className="flex lg:justify-evenly flex-wrap lg:flex-nowrap lg:w-[520px] gap-y-[20px] gap-x-[30px]">
                <div className="group grid place-items-center space-y-[5px]">
                  <div className="grid place-items-center w-[70px] h-[70px] rounded-[50%] cursor-pointer bg-[#e5f1ff] group-hover:bg-[#cce4fe]">
                    <WhatsappShareButton url={data} title="Check out this profile!">
                      <WhatsappIcon size={40} style={{ borderRadius: "50%" }}></WhatsappIcon>
                    </WhatsappShareButton>
                  </div>
                  <div>
                    <label
                      style={SocialText}
                      className="text-[12px]  group-hover:text-[black] text-[#a9acb4]"
                    >
                      Whatsapp
                    </label>
                  </div>

                  {/* <Image width={55} height={55} src="/assests/social/whatsapp.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>WhatsApp</span> */}
                </div>
                <div className="group grid place-items-center space-y-[5px]">
                  <div className="grid place-items-center w-[70px] h-[70px] rounded-[50%] cursor-pointer bg-[#e5f1ff] group-hover:bg-[#cce4fe]">

                    <Image
                      width={40}
                      height={40}
                      loading='lazy'
                      src="/assests/social/icons8-messenger.svg"
                    />
                  </div>
                  <div>
                    <label
                      style={SocialText}
                      className="text-[12px]  group-hover:text-[black] text-[#a9acb4]"
                    >
                      Messenger
                    </label>
                  </div>
                  {/* <Image width={55} height={55} src="/assests/social/tweeter.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>Twitter</span> */}
                </div>
                <div className="group grid place-items-center space-y-[5px]">
                  <div className="grid place-items-center w-[70px] h-[70px] rounded-[50%] cursor-pointer bg-[#e5f1ff] group-hover:bg-[#cce4fe]">
                    <FacebookShareButton url={data} title="Check out this profile!">
                      <FacebookIcon size={40} style={{ borderRadius: "50%" }}></FacebookIcon>
                    </FacebookShareButton>
                    {/* <Image
                      width={40}
                      height={40}
                      loading='lazy'
                      src="/assests/social/icons8-facebook.svg"
                    /> */}
                  </div>
                  <div>
                    <label
                      style={SocialText}
                      className="text-[12px]  group-hover:text-[black] text-[#a9acb4]"
                    >
                      Facebook
                    </label>
                  </div>
                  {/* <Image width={55} height={55} src="/assests/social/facebook.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>Facebook</span> */}
                </div>
                <div className="group grid place-items-center space-y-[5px]">
                  <div className="grid place-items-center w-[70px] h-[70px] rounded-[50%] cursor-pointer bg-[#e5f1ff] group-hover:bg-[#cce4fe]">
                    <Image
                      width={35}
                      height={35}
                      loading='lazy'
                      src="/assests/social/icons8-gmail.svg"
                    />
                  </div>
                  <div>
                    <label
                      style={SocialText}
                      className="text-[12px]  group-hover:text-[black] text-[#a9acb4]"
                    >
                      Gmail
                    </label>
                  </div>
                  {/* <Image width={55} height={55} src="/assests/social/linkedin.svg" />
                                    <span className=" pt-[10px] text-[10px] text-[black]" style={TitleText}>LinkedIn</span> */}
                </div>
                <div className="group grid place-items-center space-y-[5px]">
                  <div className="grid place-items-center w-[70px] h-[70px] rounded-[50%] cursor-pointer bg-[#e5f1ff] group-hover:bg-[#cce4fe]">
                    <TwitterShareButton url={`https://happymilanweb.web.app/`}>
                      <Image
                        width={35}
                        height={35}
                        loading='lazy'
                        src="/assests/social/icons8-twitterx.svg"
                      />
                    </TwitterShareButton>
                  </div>
                  <div>
                    <label
                      style={SocialText}
                      className="text-[12px]  group-hover:text-[black] text-[#a9acb4]"
                    >
                      twitterx
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[35px]">
            <div className="w-full  lg:w-[500px] grid place-items-center">
              <input
                value={data}
                type="text"
                className="text-[14px] outline-none border-none bg-[#F7F7F7] rounded-[8px] w-full pr-[80px] pl-[10px]  h-[50px]"
              />
              <button onClick={handleCopy} id="grad-btn" class="relative right-[-210px] top-[-43px] text-[#FFF] dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5  bg-white border-gray-200 border">
                {!Copied ?
                  <span id="default-message" class="inline-flex items-center">

                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 18 20">
                      <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                  </span>
                  :
                  <span id="success-message" class=" inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span class="text-xs font-semibold text-[#FFF] dark:text-blue-500">Copied</span>
                  </span>
                }
              </button>
            </div>
          </div>
          <div className="group grid place-items-center mt-[-20px]">
            <div>
              <button
                style={Btntext}
                // onClick={() => window.open(data, "_blank")}
                onClick={NewTabOpen}
                className="w-[500px] h-[50px] border-[1px] group-hover:border-[black] duration-150 border-[#B9BABC] rounded-[10px] bg-[white] outline-none group-hover:text-[#3c41b5]"
              >
                Visit page (opens in new tab)
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShareModal;