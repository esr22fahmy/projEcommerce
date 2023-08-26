import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "../Redux/apiItems"; 


export default function Store() {


  const dispatch = useDispatch();
  const itemsData = useSelector((state) => state.api.itemsData);

  useEffect(() => {
    dispatch(fetchApiData()); // جلب البيانات من الـ API 
  }, [dispatch]);

  const getSpecificClothes = (category) => {
    dispatch(fetchApiData(category)); 
  };

  const searchTerm = useSelector((state) => state.search.searchTerm);

const filteredItems = itemsData.filter((item) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
);


  
  return (
    <>

   


      <div className=" container ">

      <div className=" text-capitalize py-5 d-flex justify-content-center">
      <button  className="btn  btn-outline-dark me-2"   onClick={fetchApiData}>all</button>
      <button  className="btn  btn-outline-dark me-2" onClick={() => getSpecificClothes("men's clothing")} >men's clothing</button>
      <button  className="btn  btn-outline-dark me-2" onClick={() => getSpecificClothes("women's clothing")} >woman's clothing</button>
      <button  className="btn  btn-outline-dark me-2" onClick={() => getSpecificClothes("jewelery")} >jewelery</button>
      <button  className="btn  btn-outline-dark "  onClick={() => getSpecificClothes("electronics")}>electronic</button>



    </div>

        <div className=" row">
          {filteredItems.map((item, index) => (
            <div className="col-md-3 mb-4 "key={index}>
             <div className=" h-100 p-4 " >
              <img className="card-img-top w-100 mb-3  " height="200px" src={item.image} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title mb-0"> {item.title.substring(0,12)}...</h5>
                <p className=" fw-bold"> {item.price}</p>
                <Link to={`/details/${item.id}`} className="btn btn-outline-primary">Buy Now</Link>

              </div>
              </div>


            </div>
          ))}
        </div>
      </div>
    </>
  );
}
