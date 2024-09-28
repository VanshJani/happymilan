import React, { useEffect, useState } from 'react'

function SearchBar({ SelectedValue, setResults }) {

    const [input, setInput] = useState(SelectedValue);

    useEffect(() => {
        setInput(SelectedValue)
    }, [SelectedValue])

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value)
                    );
                });
                setResults(results);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Enter Here"
                className="outline-none pl-[20px] border-[1px] border-[#B5B5B5] hover:border-[#000] w-[90%] lg:w-[100%] 2xl:w-[100%] xl:w-[100%] h-[50px] rounded-[10px]"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </>
    )
}

export default SearchBar