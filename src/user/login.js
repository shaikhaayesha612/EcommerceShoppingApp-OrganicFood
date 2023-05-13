import { useState } from "react";
import Swal from "sweetalert2";

const Login = () =>{
    let[msg, updateMsg] = useState("Enter Your Login Details");
    let[useremail, pickUseremail] =  useState("");
    let[password, pickPassword] = useState("");

    const goLogin = () =>{
        if( useremail == "" || password == ""){
            updateMsg("Please Enter Email-Id or Password !");
        }else{
            updateMsg("Please Wait Validating...");
        
            //let url = "http://localhost:1234/account?email="+useremail+"&password="+password;      //Query String
            let url = "https://github.com/shaikhaayesha612/EcommerceShoppingApp-OrganicFood/blob/main/api/data.json/account?email="+useremail+"&password="+password;
            fetch(url)
            .then(Response=>Response.json())
            .then(userInfo=>{
                //console.log( userInfo );        //if userInfo i.e. both useremail & password is matching simultaneously, 
                                                 //it gives all the user details otherwise empty array will come
                
                if(userInfo.length>0){                //length>0 i.e. user has found
                    updateMsg("Success : Redirecting...");
                    localStorage.setItem("sellerid", userInfo[0].id);    //adminid value is coming from backend, change it to sellerid
                    localStorage.setItem("adminname", userInfo[0].fname);
                    //window.location.reload();       //refresh the current page i.e. redirecting to the admin page
                    Swal.fire ({
                        title: "Suceess!",
                        text: "You have logged in successfully!",
                        icon: "success",
                        timer: 3000,
                        button: "OK!",
                      }).then(function(){
                        window.location.reload(); 
                    });
                }
                else{
                    alert("Failed: Invalid Email or Password !");
                    window.location.reload();
                }
            })
        }
    }

    return(
        <section className="container mt-4">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <p className="text-center text-danger"> {msg} </p>
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <i className="fa fa-lock"></i> Login
                        </div>

                        <div className="card-body">
                            <div className="mb-3">
                                <label>e-Mail Id</label> <i className="text-danger">*</i>
                                <input type="text" className="form-control"
                                 onChange={obj=>pickUseremail(obj.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label>Password</label> <i className="text-danger">*</i>
                                <input type="password" className="form-control"
                                 onChange={obj=>pickPassword(obj.target.value)} />
                            </div>
                        </div>
                        
                        <div className="card-footer text-center">
                            <button className="btn btn-danger" onClick={goLogin}> 
                                Login <i className="fa fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </section>
    )
}

export default Login;
