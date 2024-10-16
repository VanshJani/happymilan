import React from "react";
import AuthNavbar from "../_components/layout/AuthNavbar";
import Image from "next/image";
import CustomAccordion from '../../components/common/Features/Accordion'
import GlobalFooter from "../_components/layout/GlobalFooter";


function index() {

  const AccordingBody = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const CardTitleText = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };

  const CardContentText = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const Textstyle = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };
  return (
    <>
      <AuthNavbar />
      <div className="w-full pt-[80px] lg:pt-[120px] mt-[37px] h-full lg:grid place-items-center pb-[40px]">
        <div>
          <h1 className="text-center">
            <span id="faq-title-1">Frequently asked questions</span>
            <span id="faq-title-2" className="block mt-[10px]">
              Have questions? We{"’"}re here to help
            </span>
          </h1>
        </div>

        <div className="w-full h-full grid place-items-center mt-[30px]">
          <ul className="w-full flex flex-col items-center space-y-[13px]">
            <li className="w-[55%]">
              <CustomAccordion title={"How do I create an account on HappyMilan.com?"}>
                <ul style={AccordingBody}>
                  <li>
                    Step 1: Click on{" "}
                    <span className="text-[#0F52BA]"> “Sign up.”</span>
                  </li>
                  <li>
                    Step 2: Enter your{" "}
                    <span className="text-[#0F52BA]">
                      {" "}
                      “Email or mobile number.”
                    </span>
                  </li>
                  <li>Step 3: Choose a password.</li>
                  <li>
                    Step 4: Select the registration type, either{" "}
                    <span className="text-[#0F52BA]">
                      {" "}
                      “Marriage or Dating”
                    </span>
                  </li>
                  <li className="mt-[30px]">
                    after selection of registration type , you’ll be redirecting
                    to your own dashboard and at this stage you’ll have
                    successfully registered on HappyMilan. But you’ll be
                    restricted to send request until you don’t complete the
                    registration form. Once we’ve all the information, we’ll be
                    able to give you perfect suggestion matches based on your
                    information.
                  </li>

                  <li className="mt-[21px]">
                    Wish you’ll have great experience on HappyMilan.com
                  </li>
                </ul>
              </CustomAccordion>
            </li>
            <li className="w-[55%]">

              <CustomAccordion title={"Is HappyMilan for dating or matrimony purposes?"}>
                <ul style={AccordingBody}>
                  <li>
                    HappyMilan is a social networking website that caters to
                    both categories: matrimony and dating. Users can select
                    either option when registering
                  </li>
                </ul>
              </CustomAccordion>
            </li>
            <li className="w-[55%]">

              <CustomAccordion title={" What are the top feature of HappyMilan?"}>
                <ul style={AccordingBody}>
                  <li>
                    HappyMilan is an advanced social media networking platform
                    where users have the option to choose between marriage or
                    dating.
                  </li>
                  <li className="mt-[21px]">
                    Both categories are highly secure, offering advanced
                    features to manage user privacy effectively.
                  </li>
                  <li className="mt-[21px]">
                    The subscription plans for both categories are
                    price-competitive and very affordable compared to other
                    social media networking platforms.
                  </li>
                  <li className="mt-[21px]">
                    The user interface is modern and user-friendly, making it
                    easy for users of all kinds to navigate.
                  </li>
                </ul>
              </CustomAccordion>

            </li>
            <li className="w-[55%]">

              <CustomAccordion title={" How can I manage my profile and account settings?"}>

                <ul style={AccordingBody}>
                  <li>
                    HappyMilan offers an advanced level of profile and account
                    management settings.
                  </li>
                  <li className="mt-[21px]">
                    You can manage your privacy settings by following the steps
                    below:
                  </li>
                  <li>Step 1: Click on the top profile icon.</li>
                  <li>
                    Step 2: Click on{" "}
                    <span className="text-[#0F52BA]"> “Account Settings.”</span>
                  </li>
                  <li className="mt-[21px]">
                    You can manage your privacy settings by following the steps
                    below:
                  </li>
                  <li>
                    Step 1: Click on
                    <span className="text-[#0F52BA]"> “Profile.”</span>
                  </li>
                  <li>Step 2: Click on</li>
                </ul>
              </CustomAccordion>
            </li>
            <li className="w-[55%]">
              <CustomAccordion title={" Are there any safety tips for online dating on HappyMilan?"}>
                <ul style={AccordingBody}>
                  <li>
                    Yes, HappyMilan is very concerned about the safety of its
                    users. HappyMilan provides a warning alert before users
                    start interacting with others
                  </li>
                  <li className="mt-[21px]">
                    In the warning, we clearly state,{" "}
                    <span className="text-[#0F52BA]">
                      {" "}
                      “Please do not share your personal information such as
                      bank details, mobile number, email address, or daily
                      activities”
                    </span>
                  </li>
                </ul>
              </CustomAccordion>
            </li>
            <li className="w-[55%]">
              <CustomAccordion title={"How can I contact customer support?"}>

                <ul style={AccordingBody}>
                  <li>
                    If you have any questions or concerns regarding this Privacy
                    Policy, or required any support, you can contact us;
                  </li>
                  <li className="mt-[21px]">
                    <span className="text-[#0F52BA]">Email:</span>{" "}
                    contact@mntechgroup.com
                  </li>
                  <li >
                    <span className="text-[#0F52BA]">Support:</span>{" "}
                    +91 91048 14072
                  </li>
                </ul>
              </CustomAccordion>
            </li>
            <li className="w-[55%]">
              <CustomAccordion title={"How to verify my account on HappyMilan?"}>

                <ul style={AccordingBody}>
                  <li>
                    HappyMilan is very strict about fake profiles, and we have implemented multiple authentication steps for users to verify their profiles
                  </li>
                  <li className="mt-[21px]">
                    <span className="text-[#0F52BA]">Email :</span>{" "}
                    Email and mobile verification are done through OTP.
                  </li>
                  <li className="mt-[21px]">
                    <span className="text-[#0F52BA]">Selfie :</span>{" "}
                    Profile verification involves 'taking a selfie' to ensure that the person matches the uploaded picture and is real.
                  </li>
                  <li className="mt-[21px]">
                    <span className="text-[#0F52BA]">Government ID:</span>{" "}
                    Members are required to upload their government ID to verify their name and location.
                  </li>

                  <li className="mt-[21px]">
                    If the provided information does not match your profile, your account may be terminated after a deadline warning.
                  </li>

                </ul>
              </CustomAccordion>
            </li>
            <li className="w-[55%]">
              <CustomAccordion title={"What is your cancellation policy?"}>

                <ul style={AccordingBody}>
                  <li>
                    You can terminate your membership anytime by deleting your profile or contacting HappyMilan.com. No refunds for unused subscription fees unless expressly guaranteed in writing
                  </li>
                  <li className="mt-[21px]">
                    If the business is disrupted, the Company will reimburse you with 50% of the unused membership fees you've paid.
                  </li>
                  <li className="mt-[21px]">
                    HappyMilan.com may terminate your access or membership for reasons like violating terms, commercial use, prohibited communication, or inappropriate activity. Termination notice will be sent to your provided email, and no refund of subscription fees will be granted for breaches of the agreement.
                  </li>

                </ul>
              </CustomAccordion>
            </li>
            <li className="w-[55%]">
              <CustomAccordion title={"Can I change my plan later?"}>


                <ul style={AccordingBody}>
                  <li>
                    Yes, subscription plans are changeable. Members only need to pay an additional amount for add-ons
                  </li>
                </ul>
              </CustomAccordion>
            </li>
            <li className="w-[55%]">
              <CustomAccordion title={"How’s I delete my account?"}>


                <ul style={AccordingBody}>
                  <li>
                    HappyMilan users can delete or hide their profile after finding a match or determining that this platform is not compatible.
                  </li>
                  <li className="mt-[21px]">
                    To do so, you can email us with your member ID at support@happymilan.com.
                  </li>
                  <li className="mt-[21px]">
                    Follow these steps:
                  </li>
                  <li >
                    Step 1: Go to your profile and click on <span className="text-[#0F52BA]">“Account Settings.”</span>
                  </li>
                  <li >
                    Step 2: Select<span className="text-[#0F52BA]"> “Hide or Delete.”</span>
                  </li>
                  <li >
                    Step 3: Click on <span className="text-[#0F52BA]">“Delete my profile.”</span>
                  </li>
                </ul>
              </CustomAccordion>
            </li>
            <li className="w-[55%]">
              <CustomAccordion title={"How I change my login details?"}>
                <ul style={AccordingBody}>
                  <li>
                    Yes, HappyMilan users can change their login details by following these steps:
                  </li>
                  <li className="mt-[21px]" >
                    Step 1: Go to your profile and click on <span className="text-[#0F52BA]">“Account Settings.”</span>
                  </li>
                  <li >
                    Step 2: Select<span className="text-[#0F52BA]"> “Credentials.”</span>
                  </li>
                  <li className="flex gap-[1%]" >
                    Step 3: Click on <span className="mt-[3px]"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                      <path d="M1.06412 10.9904H1.84447L9.70123 3.75601L8.92087 3.03747L1.06412 10.2719V10.9904ZM11.9536 3.0538L9.68349 0.963498L10.4284 0.277618C10.6294 0.0925393 10.8777 0 11.1733 0C11.4688 0 11.7171 0.0925393 11.9181 0.277618L12.6985 0.996159C12.8995 1.18124 13 1.40986 13 1.68204C13 1.95421 12.8995 2.18284 12.6985 2.36792L11.9536 3.0538ZM11.2087 3.73968L2.27012 11.9702H0V9.87994L8.93861 1.64938L11.2087 3.73968ZM9.31105 3.39674L8.92087 3.03747L9.70123 3.75601L9.31105 3.39674Z" fill="black" />
                    </svg></span>
                  </li>

                </ul>
              </CustomAccordion>
            </li>
          </ul>
        </div>

        <div className="md:pl-0 md:pr-0 md:pb-0 pb-[20px] pl-[25px] pr-[25px]">
          <div
            id="bg-grad-color-faq"
            className=" w-full h-full lg:grid place-items-center lg:w-[750px] lg:h-[266px]  rounded-[20px] mt-[46px]"
          >
            <div className="w-full grid place-items-center pb-[20px] pt-[20px] md:pt-[20px] 2xl:pt-[40px] xl:pt-[40px]">
              <Image
                width={121}
                height={47}
                alt="img"
                loading="lazy"
                // src="/assests/common/group-rounded.svg"
                src="/assests/common/group-rounded.svg"
              />
            </div>
            <div className="lg:pl-0 lg:pr-0 pl-[10px] pr-[10px] text-center">
              <h1 style={CardTitleText}>Still have questions?</h1>
              <p className="pt-[10px]" style={CardContentText}>
                Can{"’"}t find the answer you{"’"}re looking for? Please chat to
                our friendly team
              </p>
            </div>

            <div className="pl-[10px] md:pl-0 2xl:pb-0 xl:pb-0 md:pb-[20px] pb-[20px] md:flex p-[10px] justify-evenly w-full md:m-[40px]">
              <div className="mt-[10px] md:mt-0">
                <Image
                  width={16}
                  height={16}
                  alt="img"
                  loading="lazy"
                  className="inline mr-[14px]"
                  src="/assests/common/contact-icon.svg"
                />
                <h1 className="inline" style={Textstyle}>
                  +91 91048 14072
                </h1>
              </div>

              <div className="hidden lg:block w-[1px] h-[18px] bg-[#CECECE] relative left-[25px]"></div>

              <div className="mt-[20px] md:mt-0 md:ml-[50px]">
                <Image
                  width={21}
                  height={16}
                  alt="img"
                  loading="lazy"
                  className="inline mr-[14px]"
                  src="/assests/common/email-icon.svg"
                />
                <h1 className="inline" style={Textstyle}>
                  contact@mntechgroup.com
                </h1>
              </div>

              <div className="hidden lg:block w-[1px] h-[18px] bg-[#CECECE] relative left-[25px]"></div>

              <div className="mt-[20px] md:mt-0 md:ml-[50px]">
                <Image
                  width={17}
                  height={16}
                  alt="img"
                  loading="lazy"
                  className="inline mr-[14px]"
                  src="/assests/common/message-icon.svg"
                />
                <h1 className="inline" style={Textstyle}>
                  Chat with us
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Footer Section Started --> */}


        {/* <!-- Footer Section End --> */}
      </div>

      <div className="pt-[10px] border-t-[1px] border-t-[#E1E1E1] ">
        <GlobalFooter />
      </div>
    </>
  );
}

export default index;

8866428582