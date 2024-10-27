import axios from 'axios';
import { getCookie } from 'cookies-next';
import React, { useCallback, useEffect, useMemo, useState } from 'react'

function SearchBar({ SelectedValue, setResults }) {


    const Text = {
        color: "#AFAFAF",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }



    const [input, setInput] = useState(SelectedValue || null);

    useEffect(() => {
        setInput(SelectedValue || null)
    }, [SelectedValue])


    const token = useMemo(() => getCookie("authtoken"), []);

    const fetchData = useCallback(async (searchTerm) => {
        // setSearchTerm(searchTerm);
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/v1/user/user/userUniqueId/${searchTerm?.toLowerCase()}`,
                { headers: { 'Authorization': `Bearer ${token}` } }
            );

            // if (response.data?.data && response.data.data.length > 0) {

            const { name, id, userUniqueId } = response?.data?.data?.[0] || {};

            setResults({ name, id, userUniqueId } || {})
            // }
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    }, [token]);


    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <>
            <div className='relative h-[50px]'>
                <input
                    type="text"
                    placeholder="Enter Here"
                    className="outline-none pl-[20px] border-[1px] border-[#B5B5B5] hover:border-[#000] w-[90%] lg:w-[100%] 2xl:w-[100%] xl:w-[100%] h-[50px] rounded-[10px]"
                    value={input?.userID || ""}
                    onChange={(e) => handleChange(e.target.value)}
                />
                {input && typeof input === 'object' && Object.keys(input).length > 0 && (
                    <div className='absolute bottom-[12px] right-5'>
                        {input ? <p style={Text}>({input?.name})</p> : ""}
                    </div>
                )}
            </div>
        </>
    )
}

export default SearchBar