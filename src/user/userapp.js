import { HashRouter, Routes, Route } from "react-router-dom";

import Myhome from "./home";
import Login from "./login";
import Mycart from "./cart";
import Register from "./register";
import Publicheader from "./publicheader";
import Myfooter from "./footer";

const UserApp = () =>{
    return(
        <HashRouter>
            <Publicheader/>
            <Routes>
                <Route exact path="/" element={<Myhome/> } /> 
                <Route exact path="/cart" element={<Mycart/>} /> 
                <Route exact path="/register" element={<Register/>} />
                <Route exact path="/login" element={<Login/>} />
            </Routes>
            <Myfooter/>   
        </HashRouter>
    )
}

export default UserApp;

//Myhome is a component that we are calling in userApp
//User is one module & its operation is controlled in userApp; so import & call all the components 
//like Myhome, Login, Mycart in userApp as all the components should be integrated with userApp