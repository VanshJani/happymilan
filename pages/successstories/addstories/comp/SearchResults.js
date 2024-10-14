import React, { useState } from 'react'

function SearchResults({ results, SetSelectedValue }) {


    // const [SelectedValue,SetSelectedValue] = useState("");

    return (
        <div className=''>

            <div id="theresults-list">
                {results?.map((result, id) => {
                    // return <SearchResult result={result.name} key={id} />;
                    return (
                        <div
                            id="thesearch-result"
                            onClick={(e) => SetSelectedValue(result?.name)}
                        >
                            {result?.name}
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default SearchResults