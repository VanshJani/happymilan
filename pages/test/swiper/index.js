import React, { useState } from 'react';
import MultiSelectDating from '../../../components/Dating/register/sections/MusltiSelectDating';
import { CityOptions } from '../../../utils/options/Register/EducationSectionOptions';

const ParentComponent = () => {


    const [selectedInterests, setSelectedInterests] = useState([]);
   
    return (
        <div>
            <h2>Select Interests</h2>
            <MultiSelectDating
                options={CityOptions}
                setSelectedValues={setSelectedInterests}
            // initialSelected={initialSelected}
            />
            <button onClick={() => console.log(selectedInterests)}>Submit</button>
        </div>
    );
};

export default ParentComponent;
