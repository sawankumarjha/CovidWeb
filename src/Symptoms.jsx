import React from 'react';

const Symptoms = ()=>{
    return(<>
    
    <div className="symp">
        <div className="sympFirst">
            <img src="sy.png" alt="Not Found"/>
        </div>
        <div className="sympSecond">
            <h1>Doctors are learning new things about this virus every day.</h1> 
            <h2>we know that COVID-19 may not initially cause any symptoms for some people.</h2>
            <a href="#emer">Emercency</a>
        </div>
    </div>
        
        <h1 id="heading">Symptoms Of COVID-19</h1>

        <h2 id="secondH">
                People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness.
                 Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19:
        </h2>

        <div className="symp2">
            <div>
                <img src="fev.png" alt="NotFound"/>  
                <h2>Fever or Chills</h2>  
            </div>
            <div>
                <img src="coug.png" alt="NotFound"/>  
                <h2>Cough</h2>  
            </div>
            <div>
                <img src="coug.png" alt="NotFound"/>  
                <h2>Shortness of breath or difficulty breathing</h2>  
            </div>
            <div>
                <img src="sor.png" alt="NotFound"/>  
                <h2>Sore thoats</h2>  
            </div>
            <div>
                <img src="nos.png" alt="NotFound"/>  
                <h2>Congestion or runny nose</h2>  
            </div>
            <div>
                <img src="hea.png" alt="NotFound"/>  
                <h2>Headache</h2>  
            </div>
        </div>

        <div className="emerg">
            <h1 id="emer">National Coronavirus Helpline Number  <span>+91-11-23978046</span></h1>
            <h2>National Coronavirus Helpline Email ID : <span>ncov2019@gmail.com</span></h2>
        </div>
    
    </>)
}
export default Symptoms;