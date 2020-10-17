import React , {useState} from 'react';

const Contact = ()=>{
    const [val,setVal]=useState({
        Name:"",
        Phone:"",
        Email:""
    });
    const change = (event)=>{
        let name = event.target.name;
        let value=event.target.value;
        setVal((pre)=>{
           return{ ...pre,[name]:value}
        })
    }
    const sub=(e)=>{
        // e.preventDefault();
        alert("Submited Successfully")
    }
    return(<>
    
    <form onSubmit={sub}>
        <h1>Contact Us</h1>
        <input type="text" placeholder="Enter your name" onChange={change} value={val.Name} name="Name" required autoComplete="off"/>
        <input type="email" placeholder="Enter your email" onChange={change} value={val.Email} name="Email" required autoComplete="off"/>
        <input type="text" placeholder="Enter your phone number" onChange={change} value={val.Phone} name="Phone" required autoComplete="off"/>
        <textarea placeholder="Enter your Address" required autoComplete="off"/>
        <textarea placeholder="Enter your Message" required autoComplete="off"/>
        <button>Submit</button>
    </form>
        
    
    </>)
}
export default Contact;