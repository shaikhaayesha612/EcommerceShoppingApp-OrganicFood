import { useEffect, useState } from "react";

const Mycart = () =>{
    let [cartitems, updateCart] = useState( [] );
    let url= "https://ecommerceapi-s1rv.onrender.com/cart";
    
    const getCart = () =>{
        fetch(url)
        .then(Response=> Response.json())
        .then(cartArray=>{
            updateCart(cartArray);
        })
    }
    
    useEffect(()=>{
        getCart();
    }, [1] );

    let total = 0;

    const one = (cid, cart, actionid) =>{
        //Adding and  Removing Item quantity in cart
        if(actionid === "minus"){
            cart["qty"] = cart.qty - 1;
        }
        else{
            cart["qty"] = cart.qty + 1;
        }

        if(cart.qty > 0){
            let url = "https://ecommerceapi-s1rv.onrender.com/cart/"+cid;
            let postOption = {
                headers:{'Content-Type':'application/json'},
                method:"PUT",
                body:JSON.stringify(cart)
            }
            //send information to backend using fetch method
            fetch(url, postOption)
            .then(response => response.json())
            .then(serResponse =>{
                getCart();
            })
        }
        else{
            deleteCart(cid);
        }
    }

    //Remove or Delete Item from thhe cart if qty goes below to 0
    const deleteCart = (cid) =>{
        let url = "https://ecommerceapi-s1rv.onrender.com/cart/"+cid;
        let postOption = { method:"DELETE" };
        fetch(url, postOption)
        .then(response => response.json())
        .then(serResponse =>{
            getCart();      //Reload the List
        })
    }

    //Order placement code starts here
    let[fullname, pickName] = useState("");
    let[mobile, pickMobile] = useState("");
    let[email, pickMail] = useState("");
    let[address, pickAddress] = useState("");

    //Function for placing the order
    const placeOrder = () =>{
        let url = "https://ecommerceapi-s1rv.onrender.com/order/";
        let orderData = {
            customername : fullname,            //property:variable
            mobile : mobile, 
            email : email, 
            address : address,
            orderitem : cartitems      
        };
        let postOption = {
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(orderData)
        };

        //place order by fetch method
        fetch(url, postOption)
        .then(response => response.json())
        .then(serResponse =>{
            alert("Order Received, Order Id : " + serResponse.id);
        })
    }

    return(
        <section className="container mt-5">
            <div className="row text-center">
                <div className="col-lg-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-primary text-white"> Customer Details</div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label> Customer Name </label> 
                                <input type="text" className="form-control"
                                 onChange={obj=>pickName(obj.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label> Mobile No </label>
                                <input type="number" className="form-control"
                                 onChange={obj=>pickMobile(obj.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label> Email Id </label>
                                <input type="email" className="form-control"
                                 onChange={obj=>pickMail(obj.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label> Address </label>
                                <textarea className="form-control"
                                onChange={obj=>pickAddress(obj.target.value)}> </textarea> 
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-success" onClick={placeOrder}> Place Order </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                <table className="table table-bordered">
                    <thead>
                        <tr className=" bg-light text-primary">
                            <th> Sr. No.</th>
                            <th> Item Name </th>
                            <th> Photo </th>
                            <th> Price </th>
                            <th> Quantity </th>
                            <th> Total </th>
                            <th> Action </th>
                        </tr>
                    </thead>            
                    <tbody>
                        {
                            cartitems.map((cart, index)=>{
                                total = total + cart.qty * cart.price;
                                return(        
                                    <tr key={index}>
                                        <td> {cart.id} </td>
                                        <td> {cart.name} </td>
                                        <td> <img src={cart.photo} height="50" width="50"/> </td>
                                        <td> {cart.price} </td>
                                        <td>
                                            <div className="input-group">
                                                <button className="btn btn-warning"
                                                 onClick={one.bind(this, cart.id, cart, "minus")}> - </button>
                                                <input type="number" className="form-control" value={cart.qty}/>
                                                <button className="btn btn-info"
                                                 onClick={one.bind(this, cart.id, cart, "plus")}> + </button>
                                            </div>
                                        </td>
                                        <td> {cart.qty * cart.price} </td>
                                        <td>
                                            <button className="btn btn-danger btn-sm"
                                             onClick={deleteCart.bind(this, cart.id)}> Remove </button>
                                        </td>
                                    </tr>         
                                )    
                            })
                        } 
                        <tr>
                            <td> SGST - {total * 9 /100} </td>
                            <td> CGST - {total * 9 /100} </td>
                            <td colSpan="2"> GST Amount - {(total * 9 /100) + (total * 9 /100)} </td>
                            <td colSpan="4">
                                Rs. {total}
                            </td>    
                        </tr>
                        <tr>
                            <th colSpan="8" className="text-end"> 
                                Rs. {total + (total * 18 /100)} : Total Amount to Pay
                            </th>
                        </tr>
                    </tbody>               
                </table>  
                </div>  
            </div>                  
        </section> 
    )
}

export default Mycart;

/*
    fetch data from cart api and display in cart page
    Note-
        cart  page
        row
            ->5 -> empty
            ->7
                ->display cart items in table format
*/