import React from 'react'
import { useState, useRef, useEffect } from 'react';



function Products() {




    const sliderRef = useRef(null);
    const [scrollAmount, setScrollAmount] = useState(200);

    // Функция для обновления размера прокрутки в зависимости от ширины экрана
    const updateScrollAmount = () => {
        if (window.innerWidth <= 425) {
            setScrollAmount(100); // Уменьшаем прокрутку для маленьких экранов
        } else {
            setScrollAmount(200); // Восстанавливаем стандартное значение
        }
    };

    // Эффект для обновления при изменении размера экрана
    useEffect(() => {
        updateScrollAmount(); // Устанавливаем начальное значение
        window.addEventListener('resize', updateScrollAmount); // Добавляем обработчик на изменение размера экрана

        return () => {
            window.removeEventListener('resize', updateScrollAmount); // Убираем обработчик при размонтировании компонента
        };
    }, []);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -scrollAmount, // Прокручиваем влево
                behavior: "smooth", // Плавная прокрутка
            });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: scrollAmount, // Прокручиваем вправо
                behavior: "smooth", // Плавная прокрутка
            });
        }
    };











    const [rating, setRating] = useState(0);

    const handleClick = (newRating) => {
        setRating(newRating);
    };


    return (


        <section className="products">
            <div className="container">
                <h1 className='products__price-h1'>Распродажа</h1>

                <button className="slider-button prev" onClick={scrollLeft}>
                    Prev
                </button>

                <div className="products__price" ref={sliderRef}>

                    <div className="products__price-discount">
                        <img src="https://object.pscloud.io/cms/cms/Photo/img_0_911_443_2_1_320.webp" alt="" />
                        <div className="products__price-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`products__price-star ${star <= rating ? 'filled' : ''}`}
                                    onClick={() => handleClick(star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <p>Смарт-часы Apple Watch Series 6 44mm Red Aluminium Red Band M00M3</p>
                        <h3>4300 com</h3>
                        <button>Купить</button>
                    </div>
                    <div className="products__price-discount">
                        <img src="https://object.pscloud.io/cms/cms/Photo/img_0_428_155_1_320.webp" alt="" />
                        <div className="products__price-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`products__price-star ${star <= rating ? 'filled' : ''}`}
                                    onClick={() => handleClick(star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <p>Насадка для тальятелле Kenwood АWAТ971A01 Chef</p>
                        <h3>4300 com</h3>
                        <button>Купить</button>
                    </div>
                    <div className="products__price-discount">
                        <img src="https://object.pscloud.io/cms/cms/Photo/img_0_77_1090_2_320.webp" alt="" />
                        <div className="products__price-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`products__price-star ${star <= rating ? 'filled' : ''}`}
                                    onClick={() => handleClick(star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <p>Смарт-часы Apple Watch Series 6 44mm Red Aluminium Red Band M00M3</p>
                        <h3>4300 com</h3>
                        <button>Купить</button>
                    </div>
                    <div className="products__price-discount">
                        <img src="https://object.pscloud.io/cms/cms/Photo/img_0_66_202_4_1_320.webp" alt="" />
                        <div className="products__price-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`products__price-star ${star <= rating ? 'filled' : ''}`}
                                    onClick={() => handleClick(star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <p>Смарт-часы Apple Watch Series 6 44mm Red Aluminium Red Band M00M3</p>
                        <h3>4300 com</h3>
                        <button>Купить</button>
                    </div>
                    <div className="products__price-discount">
                        <img src="https://object.pscloud.io/cms/cms/Photo/img_0_30_65_0_320.webp" alt="" />
                        <div className="products__price-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`products__price-star ${star <= rating ? 'filled' : ''}`}
                                    onClick={() => handleClick(star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <p>Смарт-часы Apple Watch Series 6 44mm Red Aluminium Red Band M00M3</p>
                        <h3>4300 com</h3>
                        <button>Купить</button>
                    </div>

                </div>
                
                <button className="slider-button next" onClick={scrollRight}>
                    Next
                </button>
           
           </div>
        </section>
    )
}

export default Products
