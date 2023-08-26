import React from 'react';
import styleContact from "./Contact.module.css"


export default function Contact() {
  return (
    <>

<div className={`${styleContact.bgCon}`}>

<div className=' container'>

<h1 className="title py-5">Contact With Us</h1>



</div>



</div>

<div className=' container'> 


            <div className="contact-form">
                                <h3 className={`${styleContact.fiTitle}  mt-5`}>We would love to hear from you.</h3>
                                <p className={`${styleContact.sen}`}>If you’ve got great products your making or looking to work with us then drop us a line.</p>
                                <form id="contact-form" method="POST" action="mail.php" >
                                    <div className="row row--10">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label className={`${styleContact.labels}`} for="contact-name">Name <span className=' me-2'>: </span></label>
                                                <input className={`${styleContact.inputs}`} type="text" name="contact-name" id="contact-name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 my-4 my-lg-0  my-xl-0 ">
                                            <div className="form-group">
                                                <label className={`${styleContact.labels}`} for="contact-phone">Phone <span className=' me-2'>:</span></label>
                                                <input className={`${styleContact.inputs}`} type="text" name="contact-phone" id="contact-phone"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label className={`${styleContact.labels}`} for="contact-email">E-mail <span className=' me-2'>:</span></label>
                                                <input className={`${styleContact.inputs}`} type="email" name="contact-email" id="contact-email"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group mt-5">
                                                <label className={`${styleContact.labels} d-flex   align-items-center`}  for="contact-message">Your Message <span className=' me-2'>:</span></label>
                                                <textarea className={`${styleContact.textarea}`} name="contact-message" id="contact-message" cols="1" rows="2"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group ">
                                                <button className=" btn btn-primary"name="submit" type="submit" id="submit" >Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

</div>

      
    </>
  )
}
