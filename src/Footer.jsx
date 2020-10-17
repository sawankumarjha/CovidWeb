import React from 'react';

const Footer = ()=>{
    let date =new Date();
    return(
        <>
        <footer>
            <h2>@Copyright {date.getFullYear()} Design by <span>skDevelopment</span> </h2>
        </footer>
        </>
    )
}
export default Footer;