import React from 'react'
import logo from "../video/img/images-removebg-preview.png"
import { useState, useEffect } from 'react';


function Video() {



  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliderActive, setIsSliderActive] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0); // Для хранения начальной точки касания

  const videos = [
    "https://www.youtube.com/embed/m83ykG6bY9Q",
    "https://www.youtube.com/embed/h8955EtY0Po",
    "https://www.youtube.com/embed/J4u052QplUQ",
    "https://www.youtube.com/embed/s4qaDfymUN8",
    "https://www.youtube.com/embed/TsPwNhhbB7c",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSliderActive(window.innerWidth <= 768); // Включить слайдер при ширине ≤ 768px
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX); // Сохраняем начальную точку касания
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX; // Получаем конечную точку касания

    if (!isSliderActive) return; // Свайпы только в режиме слайдера

    if (touchStartX - touchEndX > 50) {
      // Свайп влево
      setCurrentIndex((prevIndex) =>
        prevIndex < videos.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (touchEndX - touchStartX > 50) {
      // Свайп вправо
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };







  return (
    <section className="video">
      <div className="container">
        <div className="video__cotrols-button">
          <h1>Мы на Youtube</h1>
          <button>Наша канал <img src={logo} alt="" /></button>
        </div>



        <div className="video__controls-div">
          <div className="video-slider__container">
            {videos.map((video, index) => (
              <div className="video-slider__item" key={index}>
                <iframe
                  width="310"
                  height="200"
                  src={video}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>



      </div>
    </section>
  )
}

export default Video
