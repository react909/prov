import React from 'react'
import { useState, useEffect } from 'react'


import image1 from './img//88b8ed43d9b10daef6a480db6d317356.jpg';
import image2 from './img//YM1TKrrtv5sWnEDNSq1v8XiduhEEp0wBOjs1eG5yuHRU6YE5bzpdpFjTgt3F06fOpmPQpQygmZ37jdnNKnGLmVcQ-removebg-preview.png';
import image3 from './img//screenshot179.jpg';
import Products from '../products/Products';

const images = [image1, image2, image3];






function Home() {

  const slides = [
    {
      image: 'https://avatars.mds.yandex.net/i?id=54ef211927725d5df917a03e6da32a9e_l-10814954-images-thumbs&n=13',
      title: 'Слайд 1',
      description: 'Описание слайда 1',
      price: '$100',
    },
    {
      image: 'https://avatars.mds.yandex.net/i?id=5420d2eb47c15bd6ffa2c55a417952b8_l-9041934-images-thumbs',
      title: 'Слайд 2',
      description: 'Описание слайда 2',
      price: '$200',
    },
    {
      image: 'https://avatars.mds.yandex.net/i?id=5655a1ba40a489ee028d98011c455819_l-5235619-images-thumbs&ref=rim&n=13&w',
      title: 'Слайд 3',
      description: 'Описание слайда 3',
      price: '$300',
    },
  ];


  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };


  const [currentIndex, setCurrentIndex] = useState(0);

  // Функция для переключения на следующее изображение
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Функция для переключения на предыдущее изображение
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Автоматическое переключение каждые 3 секунды
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
  }, []);





  return (
    <section className='home'>
      <div className="container">
        <div className="home__title">
         
        
         <div className="home__title-slider">
            <button className="home__title-prev" onClick={prevSlide}>
              ⬅
            </button>
            <div className="home__title-slide">
              {images.length > 0 ? (
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
              ) : (
                <p>No images available</p>
              )}
            </div>

            <button className="home__title-next" onClick={nextSlide}>
              ➡
            </button>
          </div>

          <div className="home__title-slideri">
            <div className="home__title-slid" style={{ transition: 'transform 0.5s ease-in-out' }}>
              <h2>{slides[currentSlide].title}</h2>
              <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
              <div className="home__title-row">
                <p>{slides[currentSlide].description}</p>
                <p>Цена: {slides[currentSlide].price}</p>
                <button className='home__title-nali'>Купить</button>
              </div>
            </div>
            <div className="home__title-controls">
              <button onClick={handlePrev}>⬅</button>
              <button onClick={handleNext}>➡</button>
            </div>

          </div>
       


        </div>
      </div>
    </section>

  )
}

export default Home;
