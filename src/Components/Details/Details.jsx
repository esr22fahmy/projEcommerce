import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styleDetails from './Details.module.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hyzwed } from "../Redux/counterSlice";
import { addToCart } from "../Redux/counterSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Details() {
  let dispatch = useDispatch();
  // console.log(dispatch)

  let [isAddedToCart, setIsAddedToCart] = useState(false); 

  let { id } = useParams();
  let [product, setProduct] = useState(null);
  //  Redux لفحص وجود المنتج في السلة
  const cartItems = useSelector((state) => state.counterAy7aga.cartItems);



  useEffect(() => {
    let fetchProduct = async () => {
      let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      // item.id this hold id product in cart
      const isProductInCart = cartItems.some((item) => item.id === product.id);
      setIsAddedToCart(isProductInCart);
    }
  }, [cartItems, product]);
 
  return (
    <div className="container mt-5">
      {product ? (
        <>

        <div className=" container">
              <div className="row">
                <div className=" col-md-4">

                  <img className="w-100"  height="500px" src={product.image} alt={product.title}/>

                </div>

                <div className=" col-md-8 mt-5 text-capitalize ">


                  <h3 className={`${styleDetails.title}`}>{product.title}</h3>
                  <p className={`${styleDetails.price}`}><strong>Price:</strong> {product.price}</p>
                  <p className={`${styleDetails.price}`}><strong>rating:</strong> {product.rating.rate}</p>
                  <p className={`${styleDetails.price}`}> <strong>Description:</strong> {product.description}</p>
                  {!isAddedToCart && product.id && ( // تحقق من وجود خاصية id في الـ product
                    <Link
                      onClick={() => {
                        dispatch(addToCart(product));
                        dispatch(hyzwed());
                        setIsAddedToCart(true);
                      }}
                      className={`${styleDetails.btnCart} btn btn-small btn-outline-primary mt-5 text-capitalize me-3`}
                    >
                      Add to cart
                    </Link>
                  )}
                        
                  <Link to={`/cart`}  className={`${styleDetails.btnCartGo} btn btn-small btn-primary mt-5  text-capitalize  `}  > go to cart</Link>
                
                  {/* <p>Category: {product.category}</p> */}

                
               </div>
          


              </div>

        </div>
          
        </>
      ) : (
        <div className=" container py-5">
          <div className=" row py-4">
             <p>Loading...</p>


          </div>

        </div>
      )}
    </div>
  );
}
