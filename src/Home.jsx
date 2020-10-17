import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Home = ()=>{
    const date = new Date();
    let year="";
    if(date.getHours()>=1 && date.getHours()<12)
    {
        year="Good Morning";
    }
    else if(date.getHours()>=12 && date.getHours()<19)
    {
        year="Good Aftenoon";
    }
    else{
        year="Good Evening";
    }
    const [val,setVal]=useState([]);
    useEffect(()=>{
        async function getData(){
            const res=await axios.get('https://api.covid19api.com/summary');
                setVal(res.data.Global);
        }
        getData()
    });
    return(<>

        <div className="Home">
        
            <div className="firstDiv">
                <img src="img2.png" alt="NotFound" id="imgC"/>
                <h1 id="greet">{year} Sir</h1>
                <h1>Stay Safe , Stay Home</h1>
                <h2>Get latest Covid Updates</h2>
                <a href="#con">About Covid</a>
            </div>
            <div className="secondDiv">
                <img  src="img1.png" alt="Not Found"/>
            </div>
        </div>



        <h1 id="conf">Confirmed Covid-19 Cases In World</h1>
        <div className="outerGlobal">
        <div className="innerGlobal">
            <h1>{val.NewConfirmed}</h1>
            <h2>New Confirmed Cases</h2>
        </div>
        <div className="innerGlobal">
            <h1>{val.TotalConfirmed}</h1>
            <h2>Total Confirmed Cases</h2>
        </div>
        <div className="innerGlobal">
            <h1>{val.TotalDeaths}</h1>
            <h2>Total Deaths</h2>
        </div>
        </div>
        
        <h2 id="con">About COVID-19</h2>
        <div className="about">
            <div className="aboutImg">

                <img src="co.png" alt="NotFound"/>

            </div>
            <div className="aboutContent">
                <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. 
                    Most people infected with the COVID-19 
                    virus will experience mild to moderate respiratory illness and recover without requiring special treatment.
                    COVID-19 is a new strain of coronavirus that has not been previously identified in humans. 
                    The COVID-19 is the cause of an outbreak of respiratory illness first detected in Wuhan, Hubei province, China.
                </p>

            </div>
        </div>


    </>)
}
export default Home;