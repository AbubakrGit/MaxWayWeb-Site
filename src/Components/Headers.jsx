import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Headers() {
  useEffect(() => {
    AOS.init();
}, []);
  const  {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
  } = useCart()
  return (
    <>
        <header>
            <nav className="navbar d-flex" data-aos="fade-down">
                <Link to="/"><img src="../images/maxway.svg" alt="Error" /></Link>

                <div className="navbar__top d-flex">
                   <div className="right d-flex">
                   <ul className='d-flex m-0 p-0'>
                        <li><Link to="menu">Menyu</Link></li>
                        <li><Link to="bolalar">Bolalar uchun</Link></li>
                        <li><Link to="filiallar">Filiallar</Link></li>
                    </ul>
                   </div>
                   <div className="left d-flex">
                      <div className="phone d-flex">
                        <img className='phones m-0' src="../images/phone.svg" alt="phone" />
                        <a href="tel:+998712005400">(+99871) <br /> <span>200-54-00</span></a>
                      </div>
                      <div className="shopping__cart d-flex">
                        <img className='korzina' src="../images/korzina.svg" alt="Error" />
                        <span className="uk-badge"> {totalItems} </span>
                        <div className="korzinaa d-flex">
                          <Link to="korzina">Korzina</Link>
                          <Link className='total__price' to="korzina">{cartTotal} UZS</Link>
                        </div>
                      </div>
                   </div>
                </div>
            </nav>
        </header>   
    </>
  )
}

export default Headers