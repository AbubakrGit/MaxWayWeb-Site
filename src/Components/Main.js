import React, { useEffect } from 'react'
import data from "../DataBase/DataPizza"
import data1 from "../DataBase/DataBurger"
import data2 from "../DataBase/DataKombo"
import data3 from "../DataBase/DataJuices"
import PizzaProps from '../setting/PizzaProps'
import BurgerProps from '../setting/BurgerProps'
import KomboProps from '../setting/KomboProps'
import JuiceProps from '../setting/JuiceProps'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Main() {
  
  useEffect(() => {
    AOS.init();
}, []);
  console.log("🚀 ~ file: Main.js:5 ~ data:", data.productsPizza)
  console.log("🚀 ~ file: Main.js:4 ~ data:", data1.productsBurgerKingGovno)
  console.log("🚀 ~ file: Main.js:5 ~ data2:", data2.productsKombo)
  console.log("🚀 ~ file: Main.js:6 ~ data3:", data3.productsJuices)


  return (
    <>
        <div className="main__hr">
            <hr />
        </div>

    <article>

        <div className="punkt">
            
        <ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="pill" href="#home">Barchasi</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="pill" href="#menu1">Pitsa</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="pill" href="#menu2">Burger</a>
  </li>
   <li class="nav-item">
    <a class="nav-link" data-toggle="pill" href="#menu3">Kombo</a>
  </li>
   <li class="nav-item">
    <a class="nav-link" data-toggle="pill" href="#menu4">Salat</a>
  </li>
   <li class="nav-item">
    <a class="nav-link" data-toggle="pill" href="#menu5">Shirinliklar</a>
  </li>
   <li class="nav-item">
    <a class="nav-link" data-toggle="pill" href="#menu6">Ichimliklar</a>
  </li>
  <div class="uk-inline">
    <button class="uk-button uk-button-default" type="button"><span><img src="../images/flter.svg" alt="Filter" /></span>Filter</button>
    <div class="uk-card uk-card-body uk-card-default" uk-drop="mode: click">Кыш отсюда!</div>
      </div>
  
</ul>


<div class="tab-content">
  <div class="tab-pane container active" id="home">

    <div className="main__menu">
      
        <div className="ter">
          <h2 data-aos="zoom-in">Pitsa</h2>
        </div>

      <div className="box">

        
        {data.productsPizza.map((item,index)=>{
            return(
                <PizzaProps
                img={item.img}
                title={item.title}
                text={item.text}
                product={item.product}
                price={item.price}
                item={item}
                key={index}
                />
            )
        })}
        

      </div>

        <div className="ter">
          <h2 data-aos="zoom-in">Burger</h2>
        </div>
      <div className="box">



      {data1.productsBurgerKingGovno.map((item,index)=>{
            return(
                <BurgerProps
                img={item.img}
                title={item.title}
                text={item.text}
                product={item.product}
                price={item.price}
                item={item}
                key={index}
                />
            )
        })}


      </div>

        <div className="ter">
          <h2 data-aos="zoom-in">Kombo</h2>
        </div>
      <div className="box">



      {data2.productsKombo.map((item,index)=>{
            return(
                <KomboProps
                img={item.img}
                title={item.title}
                text={item.text}
                product={item.product}
                price={item.price}
                item={item}
                key={index}
                />
            )
        })}

        

      
      </div>

        <div className="ter">
          <h2 data-aos="zoom-in">Ichimliklar</h2>
        </div>
      <div className="box">

      {data3.productsJuices.map((item,index)=>{
            return(
                <JuiceProps
                img={item.img}
                title={item.title}
                text={item.text}
                product={item.product}
                price={item.price}
                item={item}
                key={index}
                />
            )
        })}
     
      </div>

    </div>

  </div>
  <div class="tab-pane container fade" id="menu1">
 
 
        <div className="main__menu" id='pizza'>
          <div className="ter">
            <h2>Pitsa</h2>
          </div>
          
        <div className="box">
          
        {data.productsPizza.map((item,index)=>{
            return(
                <PizzaProps
                img={item.img}
                title={item.title}
                text={item.text}
                product={item.product}
                price={item.price}
                item={item}
                key={index}
                />
            )
        })}
          
         
        </div>

       
      </div>
  </div>
  <div class="tab-pane container fade" id="menu2">
  <div className="main__menu">
    <div className="ter">
            <h2>Burger</h2>
          </div>
        <div className="box">


        {data1.productsBurgerKingGovno.map((item,index)=>{
            return(
                <BurgerProps
                img={item.img}
                title={item.title}
                text={item.text}
                product={item.product}
                price={item.price}
                item={item}
                key={index}
                />
            )
        })}

          
        </div>
  </div>
  </div>
  <div class="tab-pane container fade" id="menu3">
  <div className="main__menu">
    <div className="ter">
            <h2>Kombo</h2>
          </div>
        <div className="box">


        {data2.productsKombo.map((item,index)=>{
            return(
                <KomboProps
                img={item.img}
                title={item.title}
                text={item.text}
                product={item.product}
                price={item.price}
                item={item}
                key={index}
                />
            )
        })}
        
        
        </div>
  </div>
  </div>
  <div class="tab-pane container fade" id="menu4">
    <h3>Hechnma topilmadi<span>:(</span></h3>
  </div>
  <div class="tab-pane container fade" id="menu5">
    <h3>Hechnma topilmadi<span>:(</span></h3>
    </div>
  <div class="tab-pane container fade" id="menu6">
    
  <div className="main__menu">
    <div className="ter">
            <h2>Ichimliklar</h2>
          </div>
        <div className="box">


        {data3.productsJuices.map((item,index)=>{
            return(
                <JuiceProps
                img={item.img}
                title={item.title}
                text={item.text}
                product={item.product}
                price={item.price}
                item={item}
                key={index}
                />
            )
        })}
       
       
        </div>
  </div>



  </div>
</div>

        </div>

    </article>
    </>
  )
}

export default Main