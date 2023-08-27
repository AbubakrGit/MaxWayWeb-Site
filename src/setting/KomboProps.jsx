import React, { useEffect } from 'react'
import { useCart } from 'react-use-cart'
import AOS from 'aos';
import 'aos/dist/aos.css';
function KomboProps(props) {
  useEffect(() => {
    AOS.init();
}, []);
    const { addItem } = useCart()
  return (
    <>
        <div className="jer__1" data-aos="fade-down">
            <div className="left">
                <img src={props.img} alt="Kombo" />
              </div>
              <div className="right">
                <h5> {props.title} </h5>
                <p> {props.text}
                </p>
                <h6> {props.price}  UZS <span><button onClick={() => addItem(props.item)}><a href="#!">+</a></button></span></h6>
            
              </div>
        </div>
    </>
  )
}

export default KomboProps