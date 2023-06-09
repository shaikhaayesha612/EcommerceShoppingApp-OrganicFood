import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Newproduct = () =>{
    let[pname, pickName] = useState("");
    let[pprice, pickPrice] = useState("");
    let[pphoto, pickPhoto] = useState("");
    let[pdetails, pickDetails] = useState("");

    const save = () =>{
        if(pname === "" || pprice === "" || pphoto === "" || pdetails === "" ){
            alert("Please fill the details");
        }else{
            let sellerid = localStorage.getItem("sellerid");    //whenever we login, it will return sellerid
            let url = "https://ecommerceapi-s1rv.onrender.com/product";
            let pinfo = {
                "name" : pname,
                "price" : pprice,
                "photo" : pphoto,
                "details" : pdetails,
                "seller" : sellerid
            };

            let postoption = {
                headers:{'Content-Type':'application/json'},
                method:"POST",
                body:JSON.stringify(pinfo)
            }
            fetch(url, postoption)
            .then(Response=>Response.json())
            .then(serverRes=>{
                toast(pname + " Saved Successfully !");
                pickName(""); 
                pickPrice(""); 
                pickPhoto(""); 
                pickDetails("");
            })
        }
        
    }

    return(
        <section className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center mb-3">
                    <h1 className="text-primary"> Enter New Product Details </h1>
                    <ToastContainer/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="mb-3">
                        <label> Enter Product Name </label>
                        <input type="text" className="form-control" value={pname}
                                onChange={obj=>pickName(obj.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label> Enter Product Price (Per Unit) </label>
                        <input type="number" className="form-control" value={pprice}
                                onChange={obj=>pickPrice(obj.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label> Enter Product Pic URL </label>
                        <input type="text" className="form-control" value={pphoto}
                                onChange={obj=>pickPhoto(obj.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label> Enter Product Details </label>
                        <textarea className="form-control" value={pdetails}
                                onChange={obj=>pickDetails(obj.target.value)}>
                        </textarea>                     
                    </div>
                    <div className="text-center">
                        <button className="btn btn-danger"onClick={save}> 
                                Save Product 
                        </button>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </section>
    )
}

export default Newproduct;