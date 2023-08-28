import React, { useEffect, useState } from 'react';
import '../../styles/components/_Banner.scss';

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      src: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5265-SeriesHeaders_OP_2000x800_wm.jpg',
      title: 'One Piece',
      description: 'Aventuras emocionantes no Grande Mar!',
    },
    {
      src: 'https://dw9to29mmj727.cloudfront.net/promo/2016/6226-SeriesHeaders_DN_2000x800.jpg',
      title: 'Death Note',
      description: 'O caderno da morte e um jogo de inteligência.',
    },
    {
      src: 'https://dw9to29mmj727.cloudfront.net/promo/2016/6225-SeriesHeaders_NARSHP_2000x800.jpg',
      title: 'Anime',
      description: 'Naruto',
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Altere o intervalo de tempo (em milissegundos) entre os slides conforme desejado

    return () => {
      clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    };
  }, []);

  return (
    <div className="slider">
      <button className="carousel-button prev-button" onClick={prevSlide}>
        &#9664;
      </button>
      <ul style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <li key={index}>
            <img src={slide.src} alt={`Slide ${index + 1}`} />
            <div className="text-overlay">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="carousel-button next-button" onClick={nextSlide}>
        &#9654;
      </button>
    </div>
  );
}
