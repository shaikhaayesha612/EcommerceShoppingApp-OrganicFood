import { useState, useEffect } from "react";

const Myorder = () =>{

    let[allorder, updateOrder] = useState( [] );
    const getOrder = () =>{
        let sellerid = localStorage.getItem("sellerid");    //whenever we login, it will return sellerid
        let url = "https://ecommerceapi-s1rv.onrender.com/order";
        fetch(url)
        .then(response=>response.json())
        .then(productArray=>{
            updateOrder(productArray.reverse());   //.reverse() Newly added product will come on the top
        })
    }

    useEffect(()=>{
        getOrder();
    },[1]);

    return(
        <section className="container mt-4">
            <div className="row">
                <div className="col-lg-12 mt-4 mb-3">
                    <h3 className="text-center text-danger fw-bold"> Order Management </h3>
                    <h4 className="text-secondary text-center">Total {allorder.length} Orders</h4>
                    <hr/>
                </div>
            </div>
            {
                allorder.map((order, index)=>{
                    return(
                        <div className="row mb-5" key={index}>
                            <div className="col-lg-3">
                                <div className="mt-5 p-3 border shadow-sm">
                                    <h5 className="text-secondary fw-bold"> Customer Details: </h5>
                                    <p> {order.customername} </p>
                                    <p> {order.mobile} </p>
                                    <p> {order.email} </p>
                                    <p> {order.address} </p>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <h5 className="text-center text-primary mb-3"> Ordered Items </h5>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr className="bg-light">
                                            <th> Product Id </th>
                                            <th> Name </th>
                                            <th> Price </th>
                                            <th> Quantity </th>
                                            <th> Total Price </th>
                                            <th> Photo </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            order.orderitem.map((orderinfo, index2)=>{
                                                if(orderinfo.seller == localStorage.getItem("sellerid") ){
                                                    return(
                                                        <tr key={index2}> 
                                                            <td> {orderinfo.id} </td>
                                                            <td> {orderinfo.name} </td>
                                                            <td> {orderinfo.price} </td>
                                                            <td> {orderinfo.price * orderinfo.qty} </td>
                                                            <td> {orderinfo.id} </td>
                                                            <td> 
                                                                <img src={orderinfo.photo} height="50" width="50" />
                                                            </td>                                                    
                                                        </tr>
                                                    )
                                                }
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Myorder;