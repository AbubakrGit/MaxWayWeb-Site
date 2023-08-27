import React from 'react'
import { useCart } from 'react-use-cart'

function Korzina() {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart()

    if(isEmpty) return <h1 className="text-center mt-5 korzina__text">Shopping Cart is Empty</h1>


  return (
    <>
        <div className="container">
            {items.map((item,index)=>{
              return(

                 <div className="jer" key={index}>
                 <div className="left">
                     <img src={item.img} alt="pizza" /><span><img src="../images/hot.svg" alt="fire" /></span>
                   </div>
                   <div className="right">
                     <h5> {item.title} <span><img src={item.product} alt="Error" /></span> </h5>
                     <p> {item.text}</p>
                     <div className="priceee d-flex">
                       <h3> {item.price}  UZS</h3>
                       <div className="buttons d-flex">
                       <button onClick={()=> updateItemQuantity(item.id, item.quantity -1)}><a href="#!">-</a></button>
                        <h4 className='m-0'> {item.quantity} </h4>
                       <button onClick={()=> updateItemQuantity(item.id, item.quantity +1)}><a href="#!">+</a></button>
                       </div>
                     </div>
                   </div>
             </div>
              )
            })}
        </div>
    </>
  )
}

export default Korzina