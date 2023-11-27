import React from 'react'
import imgLogo from "../../img/logo.png";
import styleFooter from "../Footer/Footer.module.css"

export default function Footer() {
  return (

    <section className={`${styleFooter.line} mt-3 `}>
      <div className=' container  '>
        <div className=' row '>

          <div className=' col-lg-3 col-sm-6 mt-3 '>
          <img className={`${styleFooter.imgLogo}`} src={imgLogo} alt="Site Logo" />
          <p className={`${styleFooter.address}`}>685 Market Street<br/>
            Las Vegas, LA 95820,<br/>
            United States.</p>
            <div className={`${styleFooter.socialShare}`}>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                   <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                     <a href="#"><i className="fab fa-discord"></i></a>
                  </div>

          </div>

{/* about */}
          <div className="col-lg-3 col-sm-6 mt-4">
                        <div className={`${styleFooter.footerWidget}`}>
                            <h5 className="">ABOUT</h5>
                            <div className="">
                                <ul className={`${styleFooter.linksWord}`}>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Who We Are</a></li>
                                    <li><a href="#">Latest Post</a></li>
                                    <li><a href="#">New Arraival</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

{/* ACCOUNT */}


        <div className="col-lg-3 col-sm-6 mt-4">
        <div className={`${styleFooter.footerWidget}`}>
                                    <h5 className="">ACCOUNT</h5>
                                    <div className="">
                                    <ul className={`${styleFooter.linksWord}`}>
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">Login / Register</a></li>
                                            <li><a href="#">Cart</a></li>
                                            <li><a href="#">Wishlist</a></li>
                                            <li><a href="#">Shop</a></li>
                                        </ul>
                                    </div>
                                </div>
                   </div>


                      {/* SUPPORT */}

                <div className="col-lg-3 col-sm-6 mt-4">
                <div className={`${styleFooter.footerWidget}`}>
                            <h5 className="">SUPPORT</h5>
                            <div className="">
                            <ul className={`${styleFooter.linksWord}`}>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms Of Use</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

             
              </div>













    </section>
   
  )
}
