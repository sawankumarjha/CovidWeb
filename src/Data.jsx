import React from 'react';

const Data = () => {
    let actual = {};
    fetch('https://api.covid19api.com/summary').then((apiData) => {
        return apiData.json();
    }).then((actualData) => {
        console.log(actualData);
        actual = actualData;
    }).catch((error) => {
        console.log(error)
    })
    return (
        <>  
            <tr>
                <td>Countries</td>
                <td>New Confirmed Case</td>
                <td>Total Confirmed</td>
                <td>Total Deaths</td>
                <td>Total Recovered</td>
            </tr>
        </>
    )


}
export default Data;