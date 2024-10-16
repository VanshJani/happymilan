import Image from 'next/image';
import React, { useState, useRef } from 'react';

const CustomDropdown = () => {
    const allOptions = [
        { name: "OrderOnline", content: "By selecting this option, the customer can place an order online." },
        { name: "inquiry Online", content: "By selecting this option, the customer can inquire via messaging." }
    ];

    const [filteredOptions, setFilteredOptions] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [ImageValue, setImageValue] = useState("");
    const [showOptions, setShowOptions] = useState(false);
    const dropdownRef = useRef(null);

    // Handle input change and filter options
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value) {
            const filtered = allOptions.filter((option) =>
                option.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredOptions(filtered);
        } else {
            setFilteredOptions(allOptions); // Show all options when no input
        }
        setShowOptions(true); // Show the dropdown when typing
    };

    // Handle option click
    const handleOptionClick = (option) => {
        console.log("🚀 ~ handleOptionClick ~ option:", option)
        setImageValue(option?.img)
        setInputValue(option?.name); // Set selected value
        setShowOptions(false); // Close dropdown
    };

    // Handle focus to show all options if no input
    const handleFocus = () => {
        if (inputValue === "") {
            setFilteredOptions(allOptions); // Show all options on focus if no input
        }
        setShowOptions(true); // Show dropdown on focus
    };

    // Handle outside click to close dropdown
    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setShowOptions(false); // Close dropdown when clicking outside
        }
    };

    // Add event listener for outside click
    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div ref={dropdownRef} className="dropdown-container relative w-[250px]">
                <div className="border p-2 rounded bg-white">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Type to search..."
                        className="w-full outline-none"
                        onFocus={handleFocus} // Handle focus event
                    />
                </div>
                {showOptions && (
                    <ul className="absolute z-10 bg-white border mt-1 w-full rounded max-h-[200px] overflow-y-auto">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, index) => (
                                <li
                                    key={index}
                                    className="p-2 cursor-pointer hover:bg-gray-200 flex items-center space-x-2 border-b-[1px] border-b-blue-gray-200"
                                    onClick={() => handleOptionClick(option)}
                                >
                                    <div>
                                        <p className='text-[red]'>{option?.name}</p>
                                        <p> {option.content}</p>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li className="p-2 text-gray-500">No options found</li>
                        )}
                    </ul>
                )}
            </div>

            <div className='relative left-[300px] w-[400px] h-[400px]'>
                <Image width={300} height={300} src={ImageValue} />
            </div>
        </>
    );
};

export default CustomDropdown;
