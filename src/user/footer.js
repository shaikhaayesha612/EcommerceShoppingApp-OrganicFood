
const Myfooter = () =>{
    return(
        <footer className="mt-5 bg-lightgreen p-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h4 className="text-success mb-3"> About Us </h4>
                        <h6 className="text-danger"> Organic Shopping App </h6>
                        <img src="a33.png" width="50%" height="100px"/>
                        <p className="mt-2"> Fresh Organic Fruits & Vegetables </p>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="text-success mb-3"> Contact Us </h4>
                        <p className="text-danger"> Contact on- <span className="text-dark"> +91- 9999999999 </span> </p>
                        <p className="text-danger"> Get in Touch - <span className="text-dark"> organic@gmail.com </span> </p>
                        <p className="text-danger"> Timing: <span className="text-dark"> 10am to 8pm (Monday - Sunday) </span> </p>
                        <p className="text-danger"> Address: <span className="text-dark"> 123, ABC Park Bengaluru-560078 </span> </p>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="text-success mb-3"> Get in Touch </h4>
                        <p> <i className="fab fa-facebook fa-2x"></i> Facebook.com </p>
                        <p> <i className="fab fa-twitter fa-2x"></i> Twitter.com </p>
                        <p> <i className="fab fa-instagram fa-2x"></i> Instagram.com </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Myfooter;