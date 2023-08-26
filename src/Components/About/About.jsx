import React from 'react';
import styleAbout from "./About.module.css"
import imgAbout from "../../img/about-01.png"

export default function About() {
  return (
    <>
    <div className={`${styleAbout.bgAbout}`}>

      <div className=' container'>

      <h1 className="title py-5">About Our Store</h1>


     

      </div>



    </div>

    <div className=' container mt-5'>



    <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-6">
                        <div className="">
                            <div className=" mb-2">
                                <img className='w-100' src={imgAbout} alt="About Us"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-6">
                        <div className="about-content content-right">
                            <span className={`${styleAbout.baketSH} small`}> 
                            <i className={`${styleAbout.icbaket} fa-solid fa-basket-shopping small `}></i>       
                                                 About Store</span>

                            <h3 className={`${styleAbout.Online}`}>Online shopping includes both buying things online.</h3>
                            <span className={`${styleAbout.textAbout}`}>Salesforce B2C Commerce can help you create unified, intelligent digital commerce
                                experiences — both online and in the store.</span>
                            <div className="row">
                                <div className="col-xl-6">
                                    <p className={`${styleAbout.words} small`}> Empower your sales teams with industry tailored
                                        solutions that support manufacturers as they go
                                        digital, and adapt to changing markets &amp; customers
                                        faster by creating new business.</p>
                                </div>
                                <div className="col-xl-6">
                                    <p className={`${styleAbout.words} small`}>Salesforce B2B Commerce offers buyers the
                                        seamless, self-service experience of online
                                        shopping with all the B2B</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>

    </>
  )
}
