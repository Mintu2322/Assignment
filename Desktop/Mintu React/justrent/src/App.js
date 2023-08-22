import React from "react";
import "./App.css";
import Grid from '@mui/material/Grid'



// import { FaHome, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa"
// import { FaPhone } from "react-icons/fa"
// import { FaMailBulk } from "react-icons/fa";




export default function App() {
  return (
    <>
      <div className="top-navbar text-center p-2  bg-success">
        <p className="m-0 text-light">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi.
        </p>
      </div>

      <div className="bg-slider">
        <nav className="navbar navbar-expand-lg navbar-light  border-bottom">
          <div className="container">
            <a className="navbar-brand" href="#">
              Justleassy
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    List an item
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Log in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="bg-slider-content">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1>Rent Anything From Anyone</h1>

                <p>
                  Access thousands of items, safely and for sustainable living
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="searchwrapper">
            <div className="searchbox">
              <div className="align-items-center d-flex justify-content-between">
                <div className="d-flex align-items-center d-flex justify-content-between">
                  <i className="bi bi-gem"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by Keywords..."
                  />
                </div>
                <div className="d-flex align-items-center d-flex justify-content-between">
                  <i className="bi bi-geo-alt-fill"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                  />
                </div>

                <div className="btn">
                  <i className="bi bi-search"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-area">
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  {/* <i className="bi bi-emoji-kiss-fill"></i> */}
                </div>
                <h3 style={{ color: 'black' }}>Access More</h3>
                <p style={{ color: 'black' }}>Pursue passions, Get things done</p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-wrapper icon-wrapper1">
                  {/* <i className="bi bi-emoji-heart-eyes-fill"></i> */}
                </div>
                <h3>Help The Planet</h3>
                <p style={{ color: 'black' }}>Live lighter, Reduce waste</p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-wrapper icon-wrapper2">
                  {/* <i className="bi bi-emoji-smile-fill"></i> */}
                </div>
                <h3>Save Money</h3>
                <p style={{ color: 'black' }}>Buy less. Rent for a fraction of cost</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className="font-center">
          <h1>Featured Categories</h1>
          <div className="container pt-4">
            <div className="row">

              <div className="col-md-4 pe-0 ps-2 left-top-img">
                <img src="images/2.webp" alt="" className=" w-100 mb-2"></img>
                <h2 className="left-top-img-content">Vehicles</h2>

                <img src="images/6.webp" alt="" className="w-100 mb-2"></img>
                <h2 className="right-top-img-content">Cloths</h2>
              </div>


              <div className="col-md-4 pe-0 ps-2 right-top-img1">
                <h2 className="right-top-content1">Film & Photography</h2>
                <img src="images/c.png" alt="" className="w-100 mb-2"></img>
              </div>



              <div className="col-md-4 pe-0 ps-2 right-top-img2">
                <h2 className="right-top-content2">Electronics</h2>
                <img src="images/4.webp" alt="" className="w-100 mb-2"></img>


                <img src="images/3.webp" alt="" className="w-100 mb-2"></img>
                <h2 className="right-top-img-content2">Home</h2>
              </div>
              <div className="btn1 pt-4">
                <button>View All Categories</button>
              </div>
            </div>
          </div>
        </div>
      </section >

      <hr />
      <section>
        <div className="container pt-4">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <img src="images/a.webp" alt="" className="w-100 mb-2 rounded-corner"></img>

                  <img src="images/a1.webp" alt="" className="w-100 mb-2 rounded-corner"></img>

                </div>
                <div className="col-md-3 about-mid-img">
                  <img src="images/a2.webp" alt="" className="w-100 mb-2 rounded-corner"></img>

                  <img src="images/a3.webp" alt="" className="w-100 mb-2 rounded-corner"></img>

                </div>
                <div className="col-md-3">
                  <img src="images/a4.webp" alt="" className="w-100 mb-2 rounded-corner"></img>

                  <img src="images/a5.webp" alt="" className="w-100 mb-2 rounded-corner"></img>

                </div>

                <div className="col-md-3 pt-5">
                  <img src="images/a6.webp" alt="" className="w-100 mb-2 rounded-corner"></img>

                </div>

              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4 pt-5">
              <h1>About JustRent</h1>
              <p><b>Convenient to access any item.</b></p>
              <ul className="custom-list">
                <li>This is me Vibhor Kulshrestha. CEO & Founder of "Leassy.com". Leassy Rentals has fast become one of India's leading event and party rentals specialists.<br />Large growth has formed mainly from our repeat customers and referrals and a range of large companies/organisations that use us on a monthly basis.<br />Our goal is to offer each and every customer an unbeatable service both in delivery and quality of products</li>
              </ul>
            </div>
          </div>
        </div>

      </section>
      <hr />
      <br />



      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 bg-img-relative">
              <img src="images/b.png" alt="" className="w-100 mb-2 "></img>
              <div className="img-content">
                <h2 className="text-center">List Your Assets</h2>

                <p>Earn money from your things</p>
                <div className="btn2 text-center">
                  <button>Start Earning</button>
                </div>
              </div>



            </div>
            <div className="col-md-6 bg-img-relative">
              <img src="images/h.png" alt="" className="w-100 mb-2 "></img>
              <div className="img-content1">
                <h2 className="text-center1">Discover Items</h2>
                <div className="pera">
                  <p>Get access to anything</p>
                </div>

                <div className="searchwrapper searchwrapper1">

                  <div className="searchbox searchbox1">
                    <div className="align-items-center d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-gem"></i>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search by Keywords..."
                        />
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-geo-alt-fill"></i>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Location"
                        />
                      </div>
                      <div className="btn">
                        <i className="bi bi-search"></i>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      {/* <section>
        <div className="footer">
          <div className="footer-container">
            <div className="left">
              <div className="location">
                <FaHome size={15} style={{ color: "white", marginRight: "2rem" }} />
                <div>
                  <p>C-9,Mahal Yojan,Near RTech Capital Highstreet, Jagatpura</p>
                  <p>Jaipur (303806)</p>
                  <p>Rajasthan</p>
                </div>
              </div>
              <div className="phone">
                <h4><FaPhone size={15} style={{ color: "white", marginRight: "2rem" }} />
                  9828167975, 8005795032</h4> 
              </div>
              <div className="gmail">
                <h4><FaMailBulk size={15} style={{ color: "white", marginRight: "2rem" }} />
                  vibhor7975@gmail.com</h4>
              </div>
            </div>

            <div className="right">
              <h4>About the company</h4>
              <p>This is me Vibhor Kulshrestha. CEO & Founder of "Leassy.com". Leassy Rentals has fast become one of India's leading event and party rentals specialists. Large growth has formed mainly from our repeat customers and referrals and a range of large companies/organisations that use us on a monthly basis. Our goal is to offer each and every customer an unbeatable service both in delivery and quality of products.</p>
              <div className="social">
                <FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }} />
                <FaTwitter size={30} style={{ color: "white", marginRight: "1rem" }} />
                <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <hr />
      <section>

        <div className="main"></div>
        <footer id="Footer" style={{ backgroundColor: '#003970', color: 'white' }} className="page-footer font-small stylish-color-dark pt-4">
          <div style={{ backgroundColor: '#003970', color: 'white' }} className="container text-center text-md-left">
            <div className="row">
              <div className="col-md-4 mx-auto">
                {/* <!-- Content --> */}
                <h5 className="text-uppercase font-weight-bold ">About our Company</h5>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '70px' }} />
                <p>This is me Vibhor Kulshrestha. CEO & Founder of "Leassy.com". Leassy Rentals has fast become one of India's leading event and party rentals specialists. Large growth has formed mainly from our repeat customers and referrals and a range of large companies/organisations that use us on a monthly basis. Our goal is to offer each and every customer an unbeatable service both in delivery and quality of products.</p>
              </div>
              <hr className="clearfix w-100 d-md-none" />
              <div id="link10" className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">Products</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '70px' }} />
                <p>
                  <a href="#!">JustRent</a>
                </p>
                <p>
                  <a href="#!">About</a>
                </p>
                <p>
                  <a href="#!">BrandFlow</a>
                </p>
                <p>
                  <a href="#!">Services</a>
                </p>
              </div>
              <hr className="clearfix w-100 d-md-none" />
              <div id="link10 link11" className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '70px' }} />
                <p>
                  <a href="#!">Your Account</a>
                </p>
                <p>
                  <a href="#!">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!">Help</a>
                </p>
              </div>
              <hr className="clearfix w-100 d-md-none" />
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                <p>
                  <i className="fas fa-home mr-3" ></i>C-9,Mahal Yojan,      Jagatpura, Jaipur Rajasthan</p>
                <p>
                  <i className="fas fa-envelope mr-3"></i>vibhor7975@gmail.com</p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 91 9828167975</p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 91 9772178631</p>
              </div>
            </div>
          </div>
          <hr />
          {/* <!-- Call to action --> */}
          {/* <ul style={{ backgroundColor: '#b3b3cc' }} className="list-unstyled list-inline text-center py-2">
            <li className="list-inline-item">
              <h5 className="mb-1">Register for free</h5>
            </li>
            <li className="list-inline-item">
              <a href="#Contact" className="btn btn-outline-danger btn-rounded">Sign up!</a>
            </li>
          </ul> */}
          <hr />

          {/* <!-- Social buttons --> */}
          <div className="hover-effect1">
            <ul style={{ backgroundColor: '#003970' }} className="list-unstyled list-inline text-center">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/codewithfaraz" title="Facebook"><i className="fa fa-facebook"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.twitter.com/codewithfaraz" title="Twitter"><i className="fa fa-twitter"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/codewithfaraz" title="Instagram"><i className="fa fa-instagram"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.youtube.com/@codewithfaraz" title="Youtube"><i className="fa fa-youtube"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#." title="Github"><i className="fa fa-github"></i></a>
              </li>
            </ul>
          </div>
          {/* <!-- Copyright --> */}
          <div style={{ backgroundColor: '#003970' }} className="footer-copyright text-center py-3">
            Copyright© 2023: Design and Develop by Mintu Nagar <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              alignContent="stretch"
              wrap="wrap"

            >

            </Grid>
          </div>
        </footer>

      </section>
    </>
  );
}