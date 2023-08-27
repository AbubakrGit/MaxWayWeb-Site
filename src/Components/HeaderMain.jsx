import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
function HeaderMain() {

    useEffect(() => {
        AOS.init();
    }, []);

    const StyledButton = styled.button`
  width: 255px;
  height: 200px;  
  border-radius: 12px;
  background: linear-gradient(315deg, #FFC85C 0%, #F1B301 100%);
  padding-top: 20px;
  padding-left: 31px;
  border: none;
  `
  const Button = styled.button`
                    width: 255px;
                    height: 200px;  
                    border-radius: 12px;
                    background: #800A7A;
                    padding-top: 20px;
                    padding-left: 20px;
                    border: none;
  `

  return (
    <>
        <main className='d-flex'>
            <div className="left">
                <h1 data-aos="fade-right">Siz izlagan mazzali ta’mlar</h1>
                <h2 data-aos="fade-right" className='m-0'>When an unknown printer took a galley of type scrambled it to make a type specimen </h2>
                <div className="cardss d-flex">
                <StyledButton  className='card__1' data-aos="fade-right">
                    <p><span><img src="../images/hot.svg" alt="fire" /></span>Yangi</p>
                    <div className="set">
                      <div className="name">
                        <h3>Pit</h3>
                         <h4> -sa</h4>
                      </div>
                      <img src="../images/slider.svg" alt="pizza" />
                    </div>
                </StyledButton>

                <Button className='card__2' data-aos="fade-left">
                    <p><span><img src="../images/raketa.svg" alt="raketa" /></span>Ko’p sotilgan</p>
                    <div className="set">
                      <div className="name">
                        <h3>Kom
                         </h3>
                          <h4> -bo</h4>
                      </div>
                      <img src="../images/slider1.svg" alt="burger" />
                    </div>
                </Button>
                </div>
            </div>
            <div className="right">
                <img data-aos="fade-left" src="../images/burgerbig.png" alt="Error" />
            </div>
        </main>
    </>
  )
}

export default HeaderMain