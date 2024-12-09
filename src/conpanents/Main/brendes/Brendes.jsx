import React from 'react'
import { useState, useEffect } from 'react';








function Brendes() {
   
   
    const slides1 = [
        {
            image: 'https://avatars.mds.yandex.net/i?id=54ef211927725d5df917a03e6da32a9e_l-10814954-images-thumbs&n=13',
            title: 'Слайд 1',
            description: 'Описание слайда 1',
            price: '$10',
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=5420d2eb47c15bd6ffa2c55a417952b8_l-9041934-images-thumbs&ref=rim&n=13&w=800&h=800',
            title: 'Слайд 2',
            description: 'Описание слайда 2',
            price: '$20',
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=5655a1ba40a489ee028d98011c455819_l-5235619-images-thumbs&ref=rim&n=13&w=1100&h=1100',
            title: 'Слайд 3',
            description: 'Описание слайда 3',
            price: '$30',
        },
    ];


    const [curentSlide, setCurentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNexti();
        }, 2500);

        return () => clearInterval(interval);
    }, [curentSlide]);

    const handlePrevi = () => {
        setCurentSlide((prev) => (prev === 0 ? slides1.length - 1 : prev - 1));
    };

    const handleNexti = () => {
        setCurentSlide((prev) => (prev === slides1.length - 1 ? 0 : prev + 1));
    };
 
   
   
   
    return (
      
      
      
      <section className='brendes'>
            <div className="container">
                <div className="brendes__block">
                    <h1 className='brendes__block-text'>Специально для вас</h1>

                    <div className="brendes__block-vip">
                        <div className="brendes__block-sliden">
                            <div className="slisti" style={{ transition: 'transform 0.5s ease-in-out' }}>
                                <h2>{slides1[curentSlide].title}</h2>
                                <img src={slides1[curentSlide].image} alt={slides1[curentSlide].title} />
                                <p>{slides1[curentSlide].description}</p>
                                <p>Цена: {slides1[curentSlide].price}</p>
                                <button className='kupt'>Купить</button>
                            </div>
                            <div className="control">
                                <button onClick={handlePrevi}>⬅</button>
                                <button onClick={handleNexti}>➡</button>
                            </div>

                        </div>
                        <div className="brendes__block-sliden">
                            <div className="slisti" style={{ transition: 'transform 0.5s ease-in-out' }}>
                                <h2>{slides1[curentSlide].title}</h2>
                                <img src={slides1[curentSlide].image} alt={slides1[curentSlide].title} />
                                <p>{slides1[curentSlide].description}</p>
                                <p>Цена: {slides1[curentSlide].price}</p>
                                <button className='kupt'>Купить</button>
                            </div>
                            <div className="control">
                                <button onClick={handlePrevi}>⬅</button>
                                <button onClick={handleNexti}>➡</button>
                            </div>

                        </div>
                        <div className="brendes__block-sliden">
                            <div className="slisti" style={{ transition: 'transform 0.5s ease-in-out' }}>
                                <h2>{slides1[curentSlide].title}</h2>
                                <img src={slides1[curentSlide].image} alt={slides1[curentSlide].title}  />
                                <p>{slides1[curentSlide].description}</p>
                                <p>Цена: {slides1[curentSlide].price}</p>
                                <button className='kupt'>Купить</button>
                            </div>
                            <div className="control">
                                <button onClick={handlePrevi}>⬅</button>
                                <button onClick={handleNexti}>➡</button>
                            </div>
                        </div>
                        
                        <div className="brendes__block-sliden">
                            <div className="slisti" style={{ transition: 'transform 0.5s ease-in-out' }}>
                                <h2>{slides1[curentSlide].title}</h2>
                                <img src={slides1[curentSlide].image} alt={slides1[curentSlide].title} />
                                <p>{slides1[curentSlide].description}</p>
                                <p>Цена: {slides1[curentSlide].price}</p>
                                <button className='kupt'>Купить</button>
                            </div>
                            <div className="control">
                                <button onClick={handlePrevi}>⬅</button>
                                <button onClick={handleNexti}>➡</button>
                            </div>

                        </div>
                        <div className="brendes__block-sliden">
                            <div className="slisti" style={{ transition: 'transform 0.5s ease-in-out' }}>
                                <h2>{slides1[curentSlide].title}</h2>
                                <img src={slides1[curentSlide].image} alt={slides1[curentSlide].title} />
                                <p>{slides1[curentSlide].description}</p>
                                <p>Цена: {slides1[curentSlide].price}</p>
                                <button className='kupt'>Купить</button>
                            </div>
                            <div className="control">
                                <button onClick={handlePrevi}>⬅</button>
                                <button onClick={handleNexti}>➡</button>
                            </div>

                        </div>
                        <div className="brendes__block-sliden">
                            <div className="slisti" style={{ transition: 'transform 0.5s ease-in-out' }}>
                                <h2>{slides1[curentSlide].title}</h2>
                                <img src={slides1[curentSlide].image} alt={slides1[curentSlide].title} />
                                <p>{slides1[curentSlide].description}</p>
                                <p>Цена: {slides1[curentSlide].price}</p>
                                <button className='kupt'>Купить</button>
                            </div>
                            <div className="control">
                                <button onClick={handlePrevi}>⬅</button>
                                <button onClick={handleNexti}>➡</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Brendes
