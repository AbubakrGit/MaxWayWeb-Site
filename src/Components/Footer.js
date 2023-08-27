import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Footer() {
    useEffect(() => {
        AOS.init();
    }, []);
  return (
    <>
    <footer>
        <div className="footer">
            <div className="left">
                <h3 data-aos="fade-right">Mobil ilovamiz <br />
                orqali buyurtma <br />
                berish yanada osonroq</h3>
                <div className="buttons" data-aos="fade-up">

                    <a href=""><button className='btn1'><a href="#!"><span><img src="../images/play.png" alt="play" />Google</span><span className='play'> play</span></a></button></a>

                    <a href=""><button className='btn2'><a href="#!"><span><img src="../images/apple.png" alt="apple" /></span>App Store</a></button></a>
                    </div>
            </div>
            <div className="right">
                <img className='iphone' src="../images/white.png" alt="iphone" />
                <img className='line' src="../images/line.png" alt="line" />
            </div>
        </div>
            


            <div className="footer__bottom">

                <div className="left">
                    <a href="#pizza"><img src="../images/maxway.svg" alt="maxway" /></a>
                <div className="box">
                    <h4>Asosiy</h4>
                    <ul>
                        <li><a href="#!">Kompaniya haqida</a></li>
                        <li><a href="#!">Filiallar</a></li>
                        <li><a href="#!">Bolalar uchun</a></li>
                    </ul>
                </div>

                <div className="box">
                    <h4>Qoshimcha</h4>
                    <ul>
                        <li><a href="#!">Menyu</a></li>
                        <li><a href="#!">Bonusli karta</a></li>
                        <li><a href="#!">Bu qanday ishlaydi?</a></li>
                    </ul>
                </div>

                </div>
                <div className="right">
                    <h4>Biz bilan aloqa</h4>
                    <a href="tel:+998712005400">(+998 71) 200-54-00</a>
                    <p>100011, Toshkent sh. Shayxontohur tumani,
                    Zarqaynar ko’chasi, 3B-uy</p>
                </div>
            </div>


            <div className="hr">
                <hr />
            </div>


            <div className="bottom">
                <div className="left">
                    <h6>© Maxway, 2020</h6>
                </div>
                <div className="right">
                    <a href="https://www.youtube.com/@maxway2010"><img src="../images/youtube.svg" alt="youtube" /></a>
                    <a href="https://www.facebook.com/campaign/landing.php?campaign_id=11554070363&extra_1=s%7Cc%7C477437435741%7Ce%7Cfacebook%7C&placement=&creative=477437435741&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D11554070363%26adgroupid%3D112923417056%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1028523%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw2K6lBhBXEiwA5RjtCc7Zor66NQe96V6a86NwgzdWsv00_7Pqe-Y0pFctd3FDvI17nm5F7hoCjkUQAvD_BwE"><img src="../images/facebook.svg" alt="facebook" /></a>
                    <a href="https://www.instagram.com/"><img src="../images/instagram.svg" alt="instagram" /></a>
                    <a href="https://web.telegram.org/"><img src="../images/tg.svg" alt="telegram" /></a>
                    <a href="https://www.tiktok.com/ru-RU"><img src="../images/tiktok.svg" alt="tiktok" /></a>
                </div>
            </div>


    </footer>
    </>
  )
}

export default Footer