import React from 'react'
import logo from "./img/facebook.png";
import logos from "./img/instagram.png";
import img from "./img/vk.png";
import imgs from "./img/you.tube.png";
import convar from "../img/glav.png"

function Footer() {


   

   return (
      <footer className='footer'>
         <div className="container">
            <div className="footer__links">

               <div className="footer__links-nova">
                  <div className="footer__links-vilt">

                     <div className="footer__links-separator">
                        <h2>Компания Sulpak</h2>
                        <p>Карьера в Sulpak</p>
                        <p>Контакты</p>
                        <p>Информация о сети</p>
                        <p>Торговая недвижимость</p>
                        <p>Корпоративные продажи</p>
                        <p>Оптовый отдел</p>
                        <p>CPI Партнерство</p>
                     </div>
                     <div className="footer__links-separator">
                        <h2>Компания Sulpak</h2>
                        <p>Карьера в Sulpak</p>
                        <p>Контакты</p>
                        <p>Информация о сети</p>
                        <p>Торговая недвижимость</p>
                        <p>Корпоративные продажи</p>
                        <p>Оптовый отдел</p>
                        <p>CPI Партнерство</p>
                     </div>
                     <div className="footer__links-separator">
                        <h2>Компания Sulpak</h2>
                        <p>Карьера в Sulpak</p>
                        <p>Контакты</p>
                        <p>Информация о сети</p>
                        <p>Торговая недвижимость</p>
                        <p>Корпоративные продажи</p>
                        <p>Оптовый отдел</p>
                        <p>CPI Партнерство</p>
                     </div>
                  </div>

                  <div className="footer__links-content">
                     <img className='footer__links-convar' src={convar} alt="" />
                     <h2>МЫ В СОЦСЕТЯХ</h2>
                     <div className="footer__links-imgs">

                        <img className='footer__links-icon' src={logo} alt="" />

                        <img className='footer__links-icon' src={logos} alt="" />

                        <img className='footer__links-icon' src={img} alt="" />

                        <img className='footer__links-icon' src={imgs} alt="" />

                     </div>
                  </div>

               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer;
