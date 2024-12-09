import React from 'react'
import { useState, useEffect } from 'react'
import Home from './home/Home';
import Brendes from './brendes/Brendes';
import Abaut from './abaut/Abaut';
import Products from './products/Products';
import Supre from './supre/Supre';
import Video from './video/Video';
import Footer from '../Footer/Footer';





const Main = () => {


 



 





    // const slides = [
    //     {
    //         image: 'https://avatars.mds.yandex.net/i?id=54ef211927725d5df917a03e6da32a9e_l-10814954-images-thumbs&n=13',
    //         title: 'Слайд 1',
    //         description: 'Описание слайда 1',
    //         price: '$100',
    //     },
    //     {
    //         image: 'https://avatars.mds.yandex.net/i?id=5420d2eb47c15bd6ffa2c55a417952b8_l-9041934-images-thumbs&ref=rim&n=13&w=800&h=800',
    //         title: 'Слайд 2',
    //         description: 'Описание слайда 2',
    //         price: '$200',
    //     },
    //     {
    //         image: 'https://avatars.mds.yandex.net/i?id=5655a1ba40a489ee028d98011c455819_l-5235619-images-thumbs&ref=rim&n=13&w=1100&h=1100',
    //         title: 'Слайд 3',
    //         description: 'Описание слайда 3',
    //         price: '$300',
    //     },
    // ];


    // const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         handleNext();
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, [currentSlide]);

    // const handlePrev = () => {
    //     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    // };

    // const handleNext = () => {
    //     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    // };
 








 





    return (
        <main className='main'>
            <Home />
            <Brendes />
            <Abaut/>
            <Products/>
            <Supre/>
            <Video/>
        </main>
    );
}


export default Main;
