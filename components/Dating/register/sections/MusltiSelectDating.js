import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const DynamicSelect = dynamic(() => import('react-select'), { ssr: false });
import { LabelStyle3 } from '../../../../utils/options/styles/SelectBoxStyle'; // Adjust the path as needed

const ReusableMultiSelect = ({
    options,             // Pass in the options dynamically
    placeholder,  // Default placeholder
    styles = LabelStyle3,
    setSelectedValues// Custom styles or default styles
}) => {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [datastore, setDatastore] = useState([]);

    useEffect(() => {
        const selectedValues = selectedOptions.map(option => option.value);
        setDatastore(selectedValues);
        setSelectedValues(selectedValues)

    }, [selectedOptions]);

    // Handle selection
    const handleSelectChange = (selected) => {
        setSelectedOptions(selected || []);
    };

    // Handle removal of selected option
    const handleRemoveOption = (optionToRemove) => {
        setSelectedOptions(selectedOptions.filter(option => option.value !== optionToRemove.value));
    };

    // Filter options to not show already selected options
    const filteredOptions = options.filter(option =>
        !selectedOptions.some(selectedOption => selectedOption.value === option.value)
    );

    return (
        <div className="relative">
            <DynamicSelect
                options={filteredOptions}
                isMulti
                value={selectedOptions}
                onChange={handleSelectChange}
                placeholder={placeholder || "Select your option"}
                components={{ MultiValueContainer }}
                styles={styles}
                closeMenuOnSelect={false}
            />
            <div className="selected-options mt-2 flex flex-wrap">
                {selectedOptions.map(option => (
                    <div
                        key={option.value}
                        className="bg-gray-200 text-gray-700 rounded-full px-4 py-1 mr-2 mb-2 cursor-pointer"
                        onClick={() => handleRemoveOption(option)}
                    >
                        {option.label} <span className="ml-2">&times;</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Custom MultiValueContainer to hide selected items in the input
const MultiValueContainer = ({ children, ...props }) => {
    return null; // Hide selected options in the input itself
};

export default ReusableMultiSelect;
