import React ,{useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import styleCart from "./Carts.module.css"
import { removeFromCart , updateCartItemCount , setProductToDelete } from "../Redux/counterSlice";


export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.counterAy7aga.cartItems);
  const [total, setTotal] = useState(0);


    //  لتخزين الإجمالي لكل منتج
  const [subtotals, setSubtotals] = useState(
    cartItems.map((item) => item.price)
  );
  

 //   لتخزين الكمية المحددة لكل منتج في سلة التسوق
 const [quantities, setQuantities] = useState(
  Array(cartItems.length).fill(1)
);

// negative
const handleDecrease = (index) => {
  if (quantities[index] > 1) {
    const newQuantities = [...quantities];
    newQuantities[index] -= 1;
    setQuantities(newQuantities);

    // تحديث الإجمالي عند تغيير الكمية
    const newSubtotals = [...subtotals];
    newSubtotals[index] = cartItems[index].price * newQuantities[index];
    setSubtotals(newSubtotals);
  }
};
// plus
const handleIncrease = (index) => {
  const newQuantities = [...quantities];
  if (newQuantities[index] < 10) {
    newQuantities[index] += 1;
    setQuantities(newQuantities);

    // تحديث الإجمالي عند تغيير الكمية
    const newSubtotals = [...subtotals];
    newSubtotals[index] = cartItems[index].price * newQuantities[index];
    setSubtotals(newSubtotals);
  }
};



const handleRemoveItem = (index) => {
  const removedItemPrice = subtotals[index];

    
  // console.log(index)
  dispatch(removeFromCart(index)); //لإزالة المنتج 
  dispatch(updateCartItemCount()); // تحديث عدد العناصر في السلة
  const newSubtotals = subtotals.filter((_, i) => i !== index);

  setSubtotals(newSubtotals);

  const newTotal = total - removedItemPrice;

  setTotal(newTotal)

};
useEffect(() => {
  const total = subtotals.reduce((acc, subtotal) => acc + subtotal, 0);
  //  تحديث الإجمالي في حالة تغيير subtotals
  // يتم ذلك عندما يتغير الكمية أو يتم حذف منتج
  setTotal(total);
}, [subtotals]);

  return (

<div className=" mt-5 vh-100">
<div className="container"> 
    <div className="axil-product-cart-wrap">
        <div className=" d-flex justify-content-between">
            <h4 className={`${styleCart.title}`}>Your Cart</h4>
            <a className={`${styleCart.clearCart}`} href="#" onClick={handleRemoveItem} >Clear Shoping Cart</a>
        </div>
        <div className="table-responsive mt-5  ">
            <table className="table  text-center  ">
                <thead className={`${styleCart.headerTable}`}>
                    <tr className=" "> 
                        <th scope="col" className="product-remove"></th>
                        <th scope="col" className="product-thumbnail">Product</th>
                        <th scope="col" className="product-title"></th>
                        <th scope="col" className="product-price">Price</th>
                        <th scope="col" className="product-quantity">Quantity</th>
                        <th scope="col" className="product-subtotal">Subtotal</th>
                        
                    </tr>
                </thead>
                <tbody className={`${styleCart.test}  position-relative`}>
                {cartItems.map((item, index) => (
                  <tr className="" key={index}>
                    <td  className={`${styleCart.titleTD}`}>
                    <a
                    href="#"
                    className={`${styleCart.roundMark}`}
                    onClick={() => {
                      handleRemoveItem(index);
                    }} 

                             >
                      
                    <i className={`${styleCart.mark} fa-solid fa-xmark`}></i>
                  </a>
                    </td>
                    <td className={`${styleCart.conImg}`}>
                      <a href="#">
                        <img className={`${styleCart.imgItem}`} src={item.image} alt={item.title} />
                      </a>
                    </td>
                    <td className={`${styleCart.titleTD}`}>
                          <span>
                          <a  className="  text-dark" href="#">
                      {item.title}</a> 
                          </span>
                     </td>

                     <td className={`${styleCart.thPrice}`}
 >
                      <span className=" ">$</span>{item.price}
                     
                     </td>

                   <td className={`${styleCart.titleTD} px-5 `} >
                     <div className={`${styleCart.conNeg}  d-flex justify-content-around  align-items-center  `}><span   onClick={() => handleDecrease(index)}
                          className={`${styleCart.negative}`}>-</span>
                           <span type="number" className="quantity-input" value={quantities[index]}>                 {quantities[index]}</span>
                           <span onClick={() => handleIncrease(index)} className={`${styleCart.plus}`}>+</span></div>
                     </td>

                      <td className=" ">
                        
                        <span className=" total ">$</span>
                        {subtotals[index].toFixed(2)} 
                        
                        </td>


                        




                  </tr>
                  

                ))}
                                          
           
                </tbody>

                <div className="  mt-5"> 
                <h5 className="totalItem text-capitalize"> total : ${total.toFixed(2)}</h5>
                        
                        </div>
            </table>
        </div>
     
    </div>
</div>
</div> 

  );
}

