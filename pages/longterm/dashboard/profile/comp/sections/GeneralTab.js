
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { updateMyProfileData } from '../../../../../../store/reducers/MyProfile';
import moment from 'moment-timezone';
import { capitalizeFirstLetter } from '../../../../../../utils/form/Captitelize';
import { heightoption, MaritalOptions, profileOptions, Religionoptions, subcastOption, weightoption } from '../../../../../../utils/options/ProfileOptions/GeneralSection';
import SaveButton from '../../../../../../components/common/Buttons/SaveButton';
import { getFormattedTime } from '../../../../../../utils/helpers/getFormattedTime';
import { getFormattedDate } from '../../../../../../utils/helpers/GetFormatedDate';
import { useDispatch, useSelector } from 'react-redux';
import { useDarkMode } from '../../../../../../ContextProvider/DarkModeContext';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });


const GeneralTab = () => {


    const { data, status, totalLikes } = useSelector((state) => state.myprofile);

    const { darkMode, toggleDarkMode } = useDarkMode();

    const dispatch = useDispatch()

    const [userdata, setuserdata] = useState({
        caste: data?.caste && data?.caste,
        religion: data?.religion && data.religion,
        dateOfBirth: data?.dateOfBirth && data.dateOfBirth,
        birthTime: data?.birthTime && data.birthTime,
        name: data && data.name,
        gender: data?.gender && data.gender,
        writeBoutYourSelf: data?.writeBoutYourSelf && data.writeBoutYourSelf,
        creatingProfileFor: data?.creatingProfileFor

    })


    const handleUpdateGenProfile = () => {
        dispatch(updateMyProfileData(userdata));
    }

    const [CharCount, setCharCount] = useState(0)
    const [birthTime, SetBirthTime] = useState()


    const handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        if (name === 'gender') {
            setuserdata((prevValue) => ({ ...prevValue, [name]: value }))
        }
        else if (name === 'religion') {
            const selectedReligion = Religionoptions.find((option) => option.value === value);
            setSelectValue(selectedReligion);
            setuserdata((prevValue) => ({ ...prevValue, [name]: value }));
        }
        else if (name === 'caste') {
            console.log(userdata)

            const selectedcast = subcastOption.find((option) => option.value === value);
            SetSubCastValue(selectedcast)
            setuserdata((prevValue) => ({ ...prevValue, [name]: value }))

        }
        else if (name == "birthTime") {
            // Get the current date
            const currentDate = moment();

            // Extract the date parts
            const year = currentDate.year();
            const month = String(currentDate.month() + 1).padStart(2, '0'); // Months are 0-based in moment.js
            const day = String(currentDate.date()).padStart(2, '0');

            // Combine the date with the input time (value) to form an ISO string in UTC
            const isoDateString = moment(`${year}-${month}-${day}T${value}:00`).tz('Asia/Kolkata').format();

            // Update state with the ISO date string
            setuserdata((prevValue) => ({
                ...prevValue,
                [name]: isoDateString, // Use the field 'name' and ISO string
            }));

            // Also update birth time state (if needed)
            SetBirthTime(value);
        }

        else if (name === 'writeBoutYourSelf') {
            const maxChars = 150
            if (value.length <= maxChars) {
                setuserdata(prevValue => ({ ...prevValue, [name]: value }))
                setCharCount(value.length);
            }
        }
        else {
            setuserdata(prevValue => ({ ...prevValue, [name]: value }))
        }
    }

    const [showForm, setShowForm] = useState(false);

    const handleEditClick = () => {
        setShowForm(!showForm);
    };


    const genralbtnText = {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }
    const labelText = {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }


    const Text5 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "505",
        lineHeight: "normal"
    }


    const InputFonts = {
        fontFamily: "Poppins",
    }




    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            paddingRight: '10px',
            paddingLeft: "8px",
            width: "300px",
            height: "50px",
            borderRadius: "8px",
            border: "1px solid #e6e6e6",
            backgroundColor: darkMode ? "#141516" : "#FFF",
            borderColor: state.isFocused ? 'black' : provided.borderColor,
            '&:hover': {
                borderColor: darkMode ? "#787878" : 'black',
            },
            boxShadow: state.isFocused ? 'none' : provided.boxShadow, // Add padding on the right side
        }),

        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
            paddingRight: "20px"
            // Hide the vertical line behind the arrow
        }),
    };

    const [selectValue, setSelectValue] = useState(
        data?.religion
            ? Religionoptions.find((option) => option.value === data.religion)
            : null
    );



    const [SubCastValue, SetSubCastValue] = useState(
        data?.cast
            ? subcastOption.find((option) => option.value === data.cast)
            : null
    );

    return (
        <>
            <div className={`w-full ${showForm ? "" : "2xl:h-[360px] xl:h-[353px] lg:h-[353px] md:h-[353px] h-[370px]"} border-[1px] border-[#F1F1F1] rounded-[10px]  2xl:space-y-[20px] xl:space-y-[20px] lg:space-y-[20px] md:space-y-[20px] space-y-[10px]`}>

                <div className='pt-[10px] grid place-items-center'>
                    <ul className='w-[90%] flex justify-between items-center m-[10px]'>
                        <li><h1 style={Text2} className='dark:text-[#FFF] text-[16px]'>{showForm ? "Modify General Information" : "General Information"}</h1></li>
                        <li>

                            <div className='cursor-pointer w-[37px] h-[37px] dark:hover:bg-[#252525] hover:bg-[#F0F9FF] rounded-[50%] flex items-center justify-center'>
                                {!showForm ?
                                    <Image alt='editIcon' width={20} height={20} onClick={handleEditClick} src={darkMode ? '/assests/dashboard/icon/edit-details-icon-white.svg' : '/assests/dashboard/icon/edit-details-icon.svg'} />
                                    :
                                    <Image loading='lazy' alt='modifyIcon' width={15} height={15} onClick={handleEditClick} src={darkMode ? '/assests/profile/cross-edit-icon-white.svg' : '/assests/profile/cross-edit-icon.svg'} />

                                }
                            </div>
                        </li>
                    </ul>
                </div>


                {showForm ?
                    <>

                        <div className=' flex flex-col justify-center items-center'>

                            <div className='w-[90%]'>
                                <div className="inline-block  2xl:flex lg:flex  2xl:mt-0 xl:mt-0 lg:mt-0 mt-[10px] 2xl:ml-0 xl:ml-0 lg:ml-0 2xl:space-x-[12px] lg:space-x-[32px] xl:space-x-[20px]  pt-[10px]">
                                    {profileOptions.map((options) => {
                                        return (<button
                                            id={userdata?.creatingProfileFor == options.value ? "grad-button" : ""}
                                            style={genralbtnText}
                                            onClick={() => setuserdata(() => {
                                                return { ...userdata, creatingProfileFor: options.value }
                                            })}
                                            className={`2xl:mt-0 xl:mt-0 lg:mt-0 mt-[10px] 2xl:ml-0 xl:ml-0 lg:ml-0 ml-[10px] h-[50px] ${options.id === 3 ? "2xl:w-[120px] xl:w-[110px] lg:w-[128px] w-[100px]" : "w-[100px] 2xl:w-[102px] xl:w-[90px] lg:w-[102px]"} bg-[white] rounded-[23px] border-[1px] border-[#e6e6e6]`} key={options.id}>{options.label}</button>)
                                    })}
                                </div>
                            </div>
                            <div className='w-[90%] pt-[20px]'>
                                <div className='flex justify-between space-x-[20px]'>
                                    <div>
                                        <h1 style={labelText} className='dark:text-[#FFF] text-[#000] pb-[10px]' >First Name</h1>
                                        <input style={InputFonts} value={userdata.name} onChange={handleInputChange} name="name" type='text' placeholder='First Name' className='text-[14px] dark:text-[#FFF] dark:bg-[#141516] dark:border-[#787878] outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />
                                    </div>
                                    <div className=' w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px]'>
                                        <h1 style={labelText} className='dark:text-[#FFF] text-[#000] pb-[10px]' >Gender</h1>
                                        <div className='space-x-[15px] flex justify-between'>
                                            <button id={userdata.gender === "male" ? "grad-button" : ""} onClick={() => handleInputChange({ target: { name: 'gender', value: 'male' } })} style={genralbtnText} className='2xl:w-[80px] xl:w-[80px] w-[80px]  h-[50px] text-[black]  bg-[#F9F9F9] rounded-[23px]'>Male</button>
                                            <button id={userdata.gender === "female" ? "grad-button" : ""} onClick={() => handleInputChange({ target: { name: 'gender', value: 'female' } })} style={genralbtnText} className='2xl:w-[80px] xl:w-[80px] w-[80px]  h-[50px] text-[black]  bg-[#F9F9F9] rounded-[24px]'>Female</button>
                                            <button id={userdata.gender === "other" ? "grad-button" : ""} onClick={() => handleInputChange({ target: { name: 'gender', value: 'other' } })} style={genralbtnText} className='2xl:w-[80px] xl:w-[80px] w-[80px]  h-[50px] text-[black]  bg-[#F9F9F9] rounded-[24px]'>Other</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-[20px] flex justify-between'>
                                    <div>
                                        <h1 style={labelText} className='dark:text-[#FFF] text-[#000] pb-[10px]' >Date Of Birth</h1>
                                        <input name="dateOfBirth" value={userdata.dateOfBirth} onChange={handleInputChange} type='date' placeholder='First Name' className='dark:text-[#FFF] dark:bg-[#141516] dark:border-[#787878] outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />
                                    </div>
                                    <div>
                                        <h1 style={labelText} className='dark:text-[#FFF] text-[#000] pb-[10px]' >Time of Birth</h1>
                                        <input name="birthTime" onChange={handleInputChange} value={birthTime} type='time' placeholder='First Name' className='dark:text-[#FFF] dark:bg-[#141516] dark:border-[#787878] outline-none focus:border-[1px] focus:border-[black] h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px] ' />
                                    </div>
                                </div>
                                <div className='pt-[20px] flex justify-between space-x-[20px]'>
                                    <div>
                                        <h1 className='dark:text-[#FFF] text-[#000] pb-[10px]' style={labelText}>Religion</h1>
                                        <DynamicSelect
                                            className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                            styles={customStyles}
                                            options={Religionoptions}
                                            defaultValue={selectValue}
                                            placeholder={
                                                data && data.religion ? (data.religion) : ('Choose an option')
                                            }
                                            onChange={(selectedOption) => handleInputChange({ target: { name: "religion", value: selectedOption?.value } })}
                                        />
                                    </div>
                                    <div>
                                        <h1 style={labelText} className='dark:text-[#FFF] text-[#000] pb-[10px]' >Caste / Sub Caste</h1>
                                        <DynamicSelect
                                            className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                            styles={customStyles}
                                            options={subcastOption}
                                            defaultValue={SubCastValue}
                                            placeholder={data && data.caste ? (data.caste) : ('Choose an option')}
                                            onChange={(selectedOption) => handleInputChange({ target: { name: "caste", value: selectedOption?.value } })}
                                        />
                                    </div>
                                </div>
                                <div className='pt-[20px] flex justify-between space-x-[20px]'>
                                    <div className='flex justify-between w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px]'>
                                        <div>
                                            <h1 className='dark:text-[#FFF] text-[#000] pb-[10px]' style={labelText}>Height</h1>

                                            <DynamicSelect
                                                className="h-[50px] w-[100px] 2xl:w-[120px] xl:w-[120px] lg:w-[100px] flex justify-end"
                                                styles={customStyles}
                                                options={heightoption}
                                                placeholder={data?.height ? (data.height) : ('Select')}
                                                onChange={(selectedOption) => handleInputChange({ target: { name: "height", value: selectedOption?.value } })}
                                            />
                                        </div>
                                        <div>
                                            <h1 className='dark:text-[#FFF] text-[#000] pb-[10px]' style={labelText}>Weight</h1>

                                            <DynamicSelect
                                                className="h-[50px] w-[100px] 2xl:w-[120px] xl:w-[120px] lg:w-[100px] flex justify-end"
                                                placeholder={data?.weight ? (data.weight) : ('Select')}
                                                styles={customStyles}
                                                options={weightoption}
                                                onChange={(selectedOption) => handleInputChange({ target: { name: "weight", value: selectedOption?.value } })}

                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='dark:text-[#FFF] text-[#000] pb-[10px]' style={labelText}>MaritalStatus</h1>

                                        <DynamicSelect
                                            className="h-[50px] w-[280px] 2xl:w-[270px] xl:w-[235px] lg:w-[300px] flex justify-end"
                                            styles={customStyles}
                                            options={MaritalOptions}
                                            placeholder={data?.maritalStatus ? (data.maritalStatus) : ("Select")}
                                            onChange={(selectedOption) => handleInputChange({ target: { name: "maritalStatus", value: selectedOption?.value } })}

                                        />
                                    </div>
                                </div>
                                <div className='pt-[20px]'>
                                    <h1 style={labelText} className="dark:text-[#FFF] text-[#000] pb-[10px]">Write About Yourself</h1>
                                    <textarea style={InputFonts} type='text' name='writeBoutYourSelf' value={userdata.writeBoutYourSelf} onChange={handleInputChange} className='text-[14px] dark:text-[#FFF] dark:bg-[#141516] dark:border-[#787878] pt-[5px] outline-none focus:border-[1px] focus:border-[black]  2xl:h-[76px] xl:h-[76px] w-full border-[1px] border-[#e6e6e6] pl-[10px] rounded-[8px]' />
                                    <span className='dark:text-[#FFF] text-[#000]'>{CharCount}/150</span>
                                </div>
                                <div className='flex justify-end pb-[10px] mt-[10px]'>

                                    <SaveButton onClick={handleUpdateGenProfile} className={'rounded-[10px] text-[white] w-[80px] h-[40px]'} >Save</SaveButton>

                                </div>
                            </div>
                        </div>

                    </>
                    :
                    <>
                        <div className='flex justify-center '>
                            <div className='grid place-items-center w-[90%] h-[1px] bg-[#F1F1F1]'></div>
                        </div>
                        <div className='grid place-items-center'>
                            <div className="w-[90%] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                                <div>
                                    <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Date of Birth</p>
                                    <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'>{data?.birthTime ? getFormattedDate(data?.dateOfBirth) : "NA"}</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Birth of Time</p>
                                    <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'>{data?.birthTime ? getFormattedTime(data?.birthTime) : "NA"}</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Religion</p>
                                    <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'>{data && data.religion ? capitalizeFirstLetter(data.religion) : "NA"}</h1>
                                </div>
                                <div>
                                    <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>Caste/Sub Caste</p>
                                    <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'>{data && data.caste ? capitalizeFirstLetter(data.caste) : ("NA")}</h1>
                                </div>
                            </div>
                        </div>
                        <div className='grid place-items-center'>
                            <div className="w-[90%] relative top-[-15px] m-[12px] grid grid-cols-2 grid-rows-2 gap-[32px]">
                                <div>
                                    <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>{`Height & Weight`}</p>
                                    <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'>{data?.height + " " + "ft" || "NA"}, &nbsp;{data?.weight + " " + "kg" || "NA"} </h1>
                                </div>
                                <div>
                                    <p style={Text2} className='dark:text-[#FFF] 2xl:text-[14px] xl:text-[12px] text-[12px]'>{`Marital Status`}</p>
                                    <h1 style={Text5} className='dark:text-[#FFF] 2xl:text-[16px] xl:text-[14px] text-[14px]'>{capitalizeFirstLetter(data?.maritalStatus) || ("NA")}</h1>
                                </div>
                            </div>
                        </div>
                    </>}
            </div>
        </>
    )
}
export default GeneralTab;