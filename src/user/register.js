import { useState } from "react";
import Swal from "sweetalert2";
//import { ToastContainer, toast } from "react-toastify";

const Register = () =>{

    let[fname, pickFname] = useState("");
    let[lname, pickLname] = useState("");
    let[mobile, pickMobile] = useState("");
    let[email, pickEmail] = useState("");
    let[password, pickPassword] = useState("");
    let[cpassword, pickCpassword] = useState("");
    let[address, pickAddress] = useState("");

    let [msg, updateMsg] = useState("Enter details to create an admin account");

    let[mobileError, updateMobileError] = useState("");
    let[emailError, updateEmailError] = useState("");

    const submit = () =>{
        let formstatus = true;
        if(fname === "" || mobile === "" || email === "" || password === "" || cpassword === ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fields with * cannot be left blank!',
              })
        }else{
            let mpattern = /^[0]?[6789]\d{9}$/;

            if( ! mpattern.test(mobile)){
                updateMobileError("Invalid Mobile No.");
                formstatus = false;
            }
            else{
                updateMobileError();
            }

            var epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

            if( ! epattern.test(email)){
                updateEmailError("Invalid Email");
                formstatus = false;
            }
            else{
                updateEmailError("");
            }

            if(formstatus == true){
                let url = "https://ecommerceapi-s1rv.onrender.com/account/";
                let sellerinfo = {
                    "fname" : fname,
                    "lname" : lname,
                    "mobile" : mobile,
                    "email" : email,
                    "password" : password,
                    "cpassword" : cpassword,
                    "address" : address
                };

                if(password != cpassword){
                    alert("Confirm the password correctly!");
                }else{
                    let postoption = {
                        headers:{'Content-Type':'application/json'},
                        method:"POST",
                        body:JSON.stringify(sellerinfo)
                    }
                    fetch(url, postoption)
                    .then(Response=>Response.json())
                    .then(serverRes=>{
                        // alert(email + " Saved Successfully !");
                        Swal.fire({
                            icon: 'success',
                            title: 'You have registered successfully!',
                            showConfirmButton: true,
                            timer: 1500
                        })
                        //toast(email + "Registered Successfully !");
                        let inputs = document.querySelectorAll("input");
                        inputs.forEach(input => input.value = '');
                        pickFname("");
                        pickLname("");
                        pickMobile("");
                        pickEmail("");
                        pickPassword("");
                        pickCpassword("");
                        pickAddress("");
                    })
                }

            }
                
        }
        
    }

    return(
        <section className="container mt-5 ">     
            <div className="row">
            {/* <ToastContainer/> */}
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <p className="text-danger text-center"> <i>{msg}</i> </p>
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-success text-white text-center">
                            <i className="fa fa-user-plus"></i> Register
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <label> First Name </label> <i className="text-danger">*</i> 
                                    <input type="text" className="form-control" value={fname}
                                     onChange={obj=>pickFname(obj.target.value)} />    
                                </div>
                                <div className="col-lg-6">
                                    <label> Last Name </label>
                                    <input type="text" className="form-control" value={lname}
                                     onChange={obj=>pickLname(obj.target.value)}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label> Mobile No. </label> <i className="text-danger">* {mobileError} </i>
                                    <input type="number" className="form-control" value={mobile}
                                     onChange={obj=>pickMobile(obj.target.value)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label> Email-Id </label> <i className="text-danger">* {emailError} </i>
                                    <input type="email" className="form-control" value={email}
                                     onChange={obj=>pickEmail(obj.target.value)}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label> Password </label> <i className="text-danger">*</i>
                                    <input type="password" className="form-control" value={password}
                                     onChange={obj=>pickPassword(obj.target.value)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label> Confirm Password </label> <i className="text-danger">*</i>
                                    <input type="password" className="form-control" value={cpassword}
                                     onChange={obj=>pickCpassword(obj.target.value)}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <label> Address </label>
                                    <textarea className="form-control" value={address}
                                     onChange={obj=>pickAddress(obj.target.value)}></textarea>
                                </div>   
                            </div>
                        </div>
                            
                        <div className="card-footer bg-light text-center ">
                            <button className="btn btn-danger" onClick={submit}> Submit </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>

        </section>        
    )
}

export default Register;