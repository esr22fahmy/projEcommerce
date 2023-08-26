import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import userStyle from "./User.module.css";
import Register from '../Register/Register';


export default function User({ showModal, handleClose }) {
  const [activeTab, setActiveTab] = useState('login'); 

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  
  return (
    <>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header className='px-5' closeButton>
          <Modal.Title className=' container pt-3'>
            <div className='row   text-uppercase '>
              <h6
                className={`col-6 text-center login ${
                  activeTab === 'login' ? 'active' : ''
                }`}
                onClick={() => handleTabChange('login')}
              >
                login
              </h6>
              <h6
                className={`col-6 text-center register ${
                  activeTab === 'register' ? 'active' : ''
                }`}
                onClick={() => handleTabChange('register')}
              >
                Register
              </h6>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center align-items-center'>
          {activeTab === 'login' ? (
            <div className=' '>
              {/*  Login */}
             <form>
             <label className={`${userStyle.labelss}`} for="email">Email <span>:</span></label>
              <input  className={`${userStyle.inputs} d-block mb-3`} type="email" placeholder="Email" />

              <label className={`${userStyle.labelss}`} for="password">Password <span>:</span></label>
              <input className={`${userStyle.inputs} d-block mb-3`}  type="password" placeholder="Password" />

              <button className={`${userStyle.login} w-100  bg-dark text-white` } >Login </button>
              <div className={`${userStyle.conLine} my-3`}><span className={`${userStyle.line}`}></span><span>or</span>
              <span className={`${userStyle.line}`}></span></div>
              <button type='submit' className={`${userStyle.Create} w-100` }>Create New Account </button>

            

             </form>
            </div>
          ) : (
          
   <Register/>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
