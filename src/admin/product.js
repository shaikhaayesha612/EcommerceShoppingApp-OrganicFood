import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Myproduct = () =>{
    let[allproduct, updateProduct] = useState([ ]);
    
    const getProduct = () =>{
        let sellerid = localStorage.getItem("sellerid");    //whenever we login, it will return sellerid
        let url = "http://localhost:1234/product?seller="+sellerid;
        fetch(url)
        .then(response=>response.json())
        .then(productArray=>{
            updateProduct(productArray.reverse());          //.reverse() Newly added product will come on the top
        })
    }

    useEffect(()=>{
        getProduct();
    },[1]);

    //Removing the product from product list
    const delProduct = (pid) =>{
        let url = "http://localhost:1234/product/"+pid;
        let postOption = {method:"DELETE"};
        fetch(url, postOption)
        .then(response => response.json())
        .then(serResponse =>{
            getProduct();
        })
        alert("Product Deleted Successfully!");
    }

    return(
      <section className="container mt-4">
        <div className="row">
            <div className="col-lg-12">
                <h1 className="text-center text-success"> Product List : {allproduct.length} </h1>
                <table className="table mt-4 shadow-lg">
                    <thead>
                        <tr className="bg-light test-primary">
                            <th> Id </th>
                            <th> Product Name </th>
                            <th> Price </th>
                            <th> Details </th>
                            <th> Photo </th>
                            <th className="text-center"> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allproduct.map((product, index)=>{
                                return(
                                    <tr key={index}>
                                        <td> {product.id} </td>
                                        <td> {product.name} </td>
                                        <td> {product.price} </td>
                                        <td> {product.details} </td>
                                        <td> <img src={product.photo} height="50" width="50" /> </td>
                                        <td className="text-center">
                                            <button className="btn btn-danger btn-sm"
                                                    onClick={delProduct.bind(this, product.id)}> 
                                                    <i className="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
      </section>
    )
}

export default Myproduct;