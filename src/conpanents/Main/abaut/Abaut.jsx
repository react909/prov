import React from 'react'
import { useState, useEffect } from 'react';

function Abaut() {


    const [rating, setRating] = useState(0);

    const handleClick = (newRating) => {
        setRating(newRating);
    };





    const [isVisible, setIsVisible] = useState(window.innerWidth >= 1025);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth >= 1025);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [isVisib, setIsVisib] = useState(window.innerWidth >= 1025);

    useEffect(() => {
        const handleResize = () => {
            setIsVisib(window.innerWidth >= 769);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (



        <section className='abaut'>
            <div className="container">
                <div className="abaut__item">
                    <h1 className="abaut__item-text">Хиты продаж</h1>
                    <div className="abaut__item-mom">

                        <div className="abaut__item-ded">
                            <img className='abaut__item-img' src="https://avatars.mds.yandex.net/get-altay/11492238/2a0000018e897cfabbab4a4971896f47c6b3/L_height" alt="" />
                            <div className="abaut__item-tevip">
                                <div className="abaut__item-rating">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`abaut__item-star ${star <= rating ? 'filled' : ''}`}
                                            onClick={() => handleClick(star)}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <p className="abaut__item-gap">Машинка для стрижки ARG RF-1102</p>
                                <h3 className='abaut__item-sulp'>1000 com</h3>

                                <button className='abaut__item-btn'>Купить</button>
                            </div>
                        </div>






                        <div className="abaut__item-div">

                            <div className="abaut__item-tyu">
                                <div className="abaut__item-vip">
                                    <img className='abaut__item-imgs' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TBtuvK8NbPxtPF1CH9bkS0VnRhd3vTHIKQ&s" alt="" />
                                    <p className="abaut__item-tekx">Холодильник Haier C4F640CXU1</p>
                                    <h4 className='abaut__item-texi'>80000 com</h4>
                                    <button className='abaut__item-btns'>Купить</button>
                                </div>
                                <div className="abaut__item-vip">
                                    <img className='abaut__item-imgs' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TBtuvK8NbPxtPF1CH9bkS0VnRhd3vTHIKQ&s" alt="" />
                                    <p className="abaut__item-tekx">Холодильник Haier C4F640CXU1</p>
                                    <h4 className='abaut__item-texi'>80000 com</h4>
                                    <button className='abaut__item-btns'>Купить</button>
                                </div>
                            </div>
                            {isVisib && (
                                <div className="abaut__item-vpn">
                                    <img className='abaut__item-imgsi' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_6ADdkqQa0VGYudf8qboZ1BYmhGZlzXAMw&s" alt="" />
                                    <div className="abaut__item-vipka">
                                        <p className="abaut__item-tekx">Холодильник Haier C4F640CXU1</p>
                                        <h4 className='abaut__item-texi'>80000 com</h4>
                                        <button className='abaut__item-btns'>Купить</button>
                                    </div>
                                </div>
                            )}

                        </div>



                        {isVisible && (

                            <div className="abaut__item-user">

                                <div className="abaut__item-tyu">
                                    <div className="abaut__item-vip">
                                        <img className='abaut__item-imgs' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TBtuvK8NbPxtPF1CH9bkS0VnRhd3vTHIKQ&s" alt="" />
                                        <p className="abaut__item-tekx">Холодильник Haier C4F640CXU1</p>
                                        <h4 className='abaut__item-texi'>80000 com</h4>
                                        <button className='abaut__item-btns'>Купить</button>
                                    </div>
                                    <div className="abaut__item-vip">
                                        <img className='abaut__item-imgs' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TBtuvK8NbPxtPF1CH9bkS0VnRhd3vTHIKQ&s" alt="" />
                                        <p className="abaut__item-tekx">Холодильник Haier C4F640CXU1</p>
                                        <h4 className='abaut__item-texi'>80000 com</h4>
                                        <button className='abaut__item-btns'>Купить</button>
                                    </div>
                                </div>

                                <div className="abaut__item-vpn">
                                    <img className='abaut__item-imgsi' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_6ADdkqQa0VGYudf8qboZ1BYmhGZlzXAMw&s" alt="" />
                                    <div className="abaut__item-vipka">
                                        <p className="abaut__item-tekx">Холодильник Haier C4F640CXU1</p>
                                        <h4 className='abaut__item-texi'>80000 com</h4>
                                        <button className='abaut__item-btns'>Купить</button>
                                    </div>
                                </div>


                            </div>
                        )}

                        <div className="abaut__item-cart">
                            <div className="abaut__item-large">
                                <img src="https://object.pscloud.io/cms/cms/Banners/banner_obogrevatelniye_priboriy_6003_638300410513233097_ru-Ru_desktop.webp" alt="" />
                                <p>Обогревательные приборы</p>
                            </div>
                            <div className="abaut__item-large">
                                <img src="https://object.pscloud.io/cms/cms/Banners/banner_obogrevatelniye_priboriy_6003_638300410513233097_ru-Ru_desktop.webp" alt="" />
                                <p>Обогревательные приборы</p>
                            </div>
                            <div className="abaut__item-large">
                                <img src="https://object.pscloud.io/cms/cms/Banners/banner_obogrevatelniye_priboriy_6003_638300410513233097_ru-Ru_desktop.webp" alt="" />
                                <p>Обогревательные приборыг</p>
                            </div>
                        </div>




                    </div>



                    <div className="abaut__item-team">
                        <div className="abaut__item-flex">
                            <div className="abaut__item-row">
                                <div className="abaut__item-logo">
                                    <img src="https://object.pscloud.io/cms/cms/Banners/banner_acer_5999_638300404572802435_ru-Ru_desktop.webp" alt="" />
                                </div>
                                <div className="abaut__item-logo">
                                    <img src="https://object.pscloud.io/cms/cms/Banners/banner_apple_5988_638300217062718437_ru-Ru_desktop.webp" alt="" />
                                </div>
                                <div className="abaut__item-logo">
                                    <img src="https://object.pscloud.io/cms/cms/Banners/banner_arg_5985_638300214257174281_ru-Ru_desktop.webp" alt="" />
                                </div>
                                <div className="abaut__item-logo">
                                    <img src="https://object.pscloud.io/cms/cms/Banners/banner_bosch_6001_638300405176039153_ru-Ru_desktop.webp" alt="" />
                                </div>
                                <div className="abaut__item-logo">
                                    <img src="https://object.pscloud.io/cms/cms/Banners/banner_braun_5993_638300219482859125_ru-Ru_desktop.webp" alt="" />
                                </div>
                                <div className="abaut__item-logo">
                                    <img src="https://object.pscloud.io/cms/cms/Banners/banner_haier_5987_638300216649209652_ru-Ru_desktop.webp" alt="" />
                                </div>
                            </div>
                            <div className="abaut__item-row">
                                <div className="abaut__item-logo">
                                    <img src="https://object.pscloud.io/cms/cms/Banners/banner_huawei_6000_638300404889648338_ru-Ru_desktop.webp" alt="" />
                                </div>
                                <div className="abaut__item-logo">
                                    <img src="https://object.pscloud.io/cms/cms/Banners/banner_lg_5990_638300217689679477_ru-Ru_desktop.webp" alt="" />
                                </div>
                                <div className="abaut__item-logo">
                                    <img src="https://object.pscloud.io/cms/cms/Banners/banner_philips_5991_638300217975720506_ru-Ru_desktop.webp" alt="" />
                                </div>
                                <div className="abaut__item-logo">
                                    <img src="https://object.pscloud.io/cms/cms/Banners/banner_samsung_5989_638300217373790666_ru-Ru_desktop.webp" alt="" />
                                </div>
                                <div className="abaut__item-logo">
                                    <img src="https://object.pscloud.io/cms/cms/Banners/banner_vivo_5992_638300218282889180_ru-Ru_desktop.webp" alt="" />
                                </div>
                                <div className="abaut__item-logo">
                                    <img src="https://object.pscloud.io/cms/cms/Banners/banner_xiaomi_5986_638307390780538499_ru-Ru_desktop.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Abaut;
