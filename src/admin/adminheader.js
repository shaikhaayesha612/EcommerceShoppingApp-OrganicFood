import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Adminheader =() =>{

    const Logout = () =>{
        localStorage.clear();               //clear the localStorage info
       // window.location.reload();           //it will send you back to public page
       Swal.fire({
        title: "Success!",
        text : "You have logged out successfully !",
        icon : "success", 
        timer: 3000,
        confirnButtonText : "OK",
    }).then(function(){
        window.location.reload(); 
    });
    } 
    
    return(
        <nav className="navbar navbar-expand-lg bg-success p-3 sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#"><i className="fa fa-shopping-bag fa-lg"></i>React Shopping App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ps-5">
                        <Link className="nav-link text-white" to="/">
                            <i className="fa fa-cogs"></i> Dashboard 
                        </Link>
                    </li>
                    <li className="nav-item ps-5">
                        <Link className="nav-link text-white" to="/order">
                            <i className="fa fa-suitcase fa-lg"></i> My Order 
                        </Link>
                    </li>
                    <li className="nav-item ps-5">
                        <Link className="nav-link text-white" to="/product">
                            <i className="fa fa-table"></i> All Products 
                        </Link>
                    </li>
                    <li className="nav-item ps-5">
                        <Link className="nav-link text-white" to="/addproduct">
                            <i className="fa fa-plus"></i> Add Product 
                        </Link>
                    </li>
                    <li className="nav-item ps-5">
                        <a className="nav-link text-warning logout" onClick={Logout}> 
                            Welcome - {localStorage.getItem("adminname") } <i className="fa fa-power-off"></i> Logout 
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        
    )
}

export default Adminheader;

