//import React, { Component } from 'react';

import { useState, useEffect } from "react";
import React from "react";
import Carousel from "bootstrap";
import ReactPaginate from "react-paginate";

import 'bootstrap/dist/css/bootstrap.min.css';

const Myhome = () =>{
    let [allproduct, updateProduct] = useState( [] );
    const getProduct = () =>{
        fetch("https://ecommerceapi-s1rv.onrender.com/product")
        .then(Response => Response.json())
        .then(productArray=>{
            updateProduct(productArray.reverse());      //.reverse() Newly added product will come on the top
        })
    }

    useEffect(()=>{
        getProduct();
    }, [1] );

    const addtocart = (product) =>{     //product is holding complete information
        product["qty"] = 1;             //Add new feature in the list of product
        let url= "https://ecommerceapi-s1rv.onrender.com/cart";  
        let postOption  = {
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(product)
        };

        fetch(url, postOption)
        .then(response=>response.json())
        .then(serverStatus =>{
            alert("Item Added in Cart");
        })
    }

    let [keyword, updateKeyword] = useState("");

    //pagination start
    const PER_PAGE = 5;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(allproduct.length / PER_PAGE);
    // pagination end 


    return(
        <main>
            <section>   
                <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                        
                    <div className="carousel-inner">
                        
                        <div className="carousel-item active">                            		
                            <div className="container bg-success">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="carousel-caption text-start">
                                            <h1 className="text-warning heading1"> O
                                                <span className="text-light heading1"> R </span>
                                                <span className="text-danger heading1"> G </span>
                                                <span className="text-warning heading1"> A </span>
                                                <span className="text-light heading1"> N </span>
                                                <span className="text-danger heading1"> I </span>
                                                <span className="text-warning heading1"> C </span>                                              
                                            </h1>
                                            <h3 className="m-4 logo1">Live Organic For <br/> Live Healthy </h3>
                                        </div> 
                                    </div>
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-7">
                                        <img src="a.png" height="400" width="100%"/> 
                                    </div>
                                </div>  
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="b.jpg" height="400" width="100%"/>
                            <div className="container">
                                <div className="carousel-caption text-start">
                                    <h4 className="text-success"> FRESH FOOD </h4>
                                    <h1 className="heading3 mb-3"> Organic </h1>
                                    <h6 className="text-dark"> How your food is grown or raised, can have <br/> 
                                                     a major impact on your mental and emotional <br/> 
                                                     health as well as the environment.
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="c.jpg" height="400" width="100%"/>
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1 className="heading2"> Healthy, Organic & </h1>
                                    <h1 className="heading2"> Fresh Fruits </h1>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="d.jpg" height="400" width="100%"/>
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1 className="heading2">Eat Clean & Green</h1>
                                    <h1 className="heading2"> Eat Green </h1>
                                </div>
                            </div>
                        </div>
                        
                        <div className="carousel-item">
                            <img src="e.png" height="400" width="100%"/>
                            <div className="container">
                                <div className="carousel-caption">
                                    <h4 className="lightgreen"> Save the Planet... Buy Organic ! </h4>
                                    <h1 className="logo5">Purity Promised !</h1>
                                    <h3 className="text-warning">Direct from Farms, to your Doorstep</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                                
                            
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                                
                            
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section className="m-5">
                <div className="row mt-5">
                    <div className="col-lg-7">
                        <h1 className="text-danger m-5"> Why Organic Food? </h1>
                
                        <h6 className="text-success p-2"> Organic food products and other organic ingredients
                            are grown under a system of agriculture without the use of chemical fertilizers
                            and pesticides, sewage sludge, or ionizing radiation with <br/>
                            an environmentally and socially responsible approach. 
                            Conventional fruits and vegetables are <br/>
                            often sprayed with pesticides. When you buy such fruits and vegetables, these stubborn <br/>
                            chemicals remain on the food.
                        </h6>
                        <h6 className="text-warning p-2">
                            This is a method of farming that works  at grass root level preserving the 
                            reproductive and regenerative capacity of the soil, good plant nutrition, 
                            and sound soil management, produces nutritious food rich in vitality which 
                            has resistance to diseases.
                        </h6>
                        <h6 className="text-primary p-2">
                            The second big difference between conventional and organic food is that many
                            conventional <br/>
                            foods are genetically modified or contain genetically modified organisms. 
                            Organic food is not easily available in the market. 
                            There are only some particular shops where organic food is available.
                        </h6>
                        <h6 className="text-danger p-2">
                            E-commerce is a process of doing business through computer network. 
                            Online shopping is a <br/>
                            form of electronic shopping store where the buyer is directly online to the 
                            seller's computer usually via the internet.
                        </h6>
                    </div>
                    <div className="col-lg-5 mt-5">
                        <img src="a22.png" width="100%" height="500px"/>  
                    </div>
                </div>
            </section>

            <section className="container mt-4">
                <div className='row mb-4'>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <input type="text"
                            className='form-control'
                            placeholder='Search here'
                            onChange={obj => updateKeyword(obj.target.value)} />
                    </div>
                    <div className="col-lg-4"></div>
                </div>

                <div className="row text-center">
                    {
                        allproduct.filter(post => {
                            if (post.name.toLowerCase().includes(keyword.toLowerCase())) {
                                return post;
                            }
                        }).slice(offset, offset + PER_PAGE).map((product, index) => {
                            return (
                                <div className="col-lg-4 mb-5 key={index}">
                                    <div className="p-4">
                                        <h2 className="text-primary text-center mb-3"> {product.name} </h2>
                                        <img src={product.photo} height="200" width="100%" className="rounded"/>
                                        <h5 className="m-3">
                                            <del className="text-danger m-3"> Rs. { parseInt(product.price) + parseInt(product.price) * 10 / 100}</del>
                                            <ins className="text-danger m-3"> Rs. {product.price}</ins>
                                        </h5>
                                        <p> {product.details} </p>
                                        <button className="btn btn-danger btn-sm" onClick={addtocart.bind(this, product)}> Add To Cart </button>
                                    </div>
                                </div>

                            )
                        })
                    }                            
                </div>
                <div className="mb-4 mt-4">
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            breakLabel={"..."}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination  justify-content-center"}
                            pageClassName={"page-item "}
                            pageLinkClassName={"page-link"}
                            previousClassName={"page-item"}
                            previousLinkClassName={"page-link"}
                            nextClassName={"page-item"}
                            nextLinkClassName={"page-link"}
                            breakClassName={"page-item"}
                            breakLinkClassName={"page-link"}
                            activeClassName={"active primary"}
                        />
                    </div>
            </section>
        </main>
    )
}

export default Myhome;


// Below <Main> tag
//<section id="banner"> React Shopping App </section> 
//with css for banner for animated banner