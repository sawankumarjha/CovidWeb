import React, { useState,useEffect } from 'react';
import axios from 'axios';

const India = () => {
    const [val,setVal]=useState([]);
    useEffect(()=>{
        async function getData(){
            const res=await axios.get('https://api.covid19india.org/data.json');
                setVal(res.data.statewise)
                
        }
        getData()
    });
    
  
    return (<>

        <h1 id="coc">Covid-19 Cases in the India</h1>
        <table id="tbl">
            <tr id="th1">
                <td>States</td>
                <td>Active Cases</td>
                <td>Confirmed</td>
                <td>Deaths</td>
                <td>Recovered</td>
            </tr>
            {  val.map((val,index)=>{
                if(index>0)
                {return(<>
                    <tr>
                        <td>{val.state}</td>
                        <td>{val.active}</td>
                        <td>{val.confirmed}</td>
                        <td>{val.deaths}</td>
                        <td>{val.recovered}</td>
                    </tr>
                
                </>)}
    })
}
        </table>


    </>)
}
export default India;