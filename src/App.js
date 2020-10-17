import React,{useState}from 'react';
import {Route,Switch, Redirect,useLocation} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Case from './Case';
import India from './India';
import Contact from './Contact';
import Prevention from './Prevention';
import Symptoms from './Symptoms';
import './index.css'
import Footer from './Footer';
const App = ()=>{
    const [disp,setDisplay]=useState('none')
    const loc=useLocation();
    console.log(loc)

    function set()
    {if(window.scrollY>300)
    {
        setDisplay('flex')
    }
    else{
        setDisplay('none')
    }
}
setInterval(set,0)
    return(<>
    <Navigation id="na"/>
    <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/prevention" component={Prevention}/>
            <Route exact path="/case" component={Case}/>
            <Route exact path="/symptom" component={Symptoms}/>
            <Route exact path="/indiacase" component={India}/>
            <Redirect component={Home} />
    </Switch>
    <div id="up" style={{ content: "0px",
                            width: "100%",
                            top:"90%",
                            display:disp,
                            justifyContent:"right",
                            flexDirection: "row-reverse",
                            alignItems: "center",
                            position:"fixed",
                            marginBottom: "20px"
                            }}>
            <h1><a href={loc.pathname}>^</a></h1>
    </div>
    <Footer/>


    </>)
}
export default App;