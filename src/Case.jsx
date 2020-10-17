import React, { useState,useEffect } from 'react';
// import Data from './Data'
import axios from 'axios';

const Case = () => {
    const [val,setVal]=useState([]);
    useEffect(()=>{
        async function getData(){
            const res=await axios.get('https://api.covid19api.com/summary');
                setVal(res.data.Countries)
        }
        getData()
    });
    
  
    return (<>

        <h1 id="coc">Covid Cases in the World</h1>
        <table>
            <tr id="th">
                <td>Countries</td>
                <td>New Case</td>
                <td>Total Confirmed</td>
                <td>Deaths</td>
                <td>Recovered</td>
            </tr>
            {  val.map((val)=>{
        return(<>
            <tr>
                <td>{val.Country}</td>
                <td>{val.NewConfirmed}</td>
                <td>{val.TotalConfirmed}</td>
                <td>{val.TotalDeaths}</td>
                <td>{val.TotalRecovered}</td>
            </tr>
        
        </>)
    })
}
        </table>


    </>)
}
export default Case;