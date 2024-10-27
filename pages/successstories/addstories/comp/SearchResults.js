import React, { useState } from 'react'

function SearchResults({ results, SetSelectedValue }) {


    // const [SelectedValue, SetSelectedValue] = useState("");

    const HandleClick = () => {
        SetSelectedValue({
            name: results?.name || "",
            userID: results?.userUniqueId || "",
            ID: results?.id || ""
        })
    }

    return (
        <div className=''>

            <div id="theresults-list">

                <div
                    id="thesearch-result"
                    onClick={HandleClick}
                >
                    {results?.name}  {" "}  {`(${results?.userUniqueId})`}
                </div>
            </div>
        </div >
        // <></>
    )
}

export default SearchResults