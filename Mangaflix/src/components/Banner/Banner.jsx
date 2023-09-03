import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/_Banner.scss';

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      src: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5265-SeriesHeaders_OP_2000x800_wm.jpg',
      title: 'One Piece',
      description: 'Luffy explora a Grand Line em busca do tesouro mais procurado do mundo, o "One Piece", a fim de se tornar o próximo Rei dos Piratas.',
    },
    {
      src: 'https://dw9to29mmj727.cloudfront.net/promo/2016/6226-SeriesHeaders_DN_2000x800.jpg',
      title: 'Death Note',
      description: 'Light Yagami, um estudante do ensino médio que descobre um caderno sobrenatural chamado Death Note',
    },
    {
      src: 'https://dw9to29mmj727.cloudfront.net/promo/2016/6225-SeriesHeaders_NARSHP_2000x800.jpg',
      title: 'Naruto Shippuden',
      description: 'Naruto Uzumaki, um jovem órfão habitante da Aldeia da Folha que sonha em se tornar o quinto Hokage',
    },

    {
      src: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5265-SeriesHeaders_OP_2000x800_wm.jpg',
      title: 'One Piece',
      description: 'Luffy explora a Grand Line em busca do tesouro mais procurado do mundo, o "One Piece", a fim de se tornar o próximo Rei dos Piratas.'
    },

    {
      src: 'https://dw9to29mmj727.cloudfront.net/promo/2016/6226-SeriesHeaders_DN_2000x800.jpg',
      title: 'Death Note',
      description: 'Light Yagami, um estudante do ensino médio que descobre um caderno sobrenatural chamado Death Note',
    },
    {
      src: 'https://dw9to29mmj727.cloudfront.net/promo/2016/6225-SeriesHeaders_NARSHP_2000x800.jpg',
      title: 'Naruto Shippuden',
      description: 'Naruto Uzumaki, um jovem órfão habitante da Aldeia da Folha que sonha em se tornar o quinto Hokage',
    },

    {
      src: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5945-SeriesHeaders_DemonSlayer_2000x800_wm.jpg',
      title: 'Demon Slayer',
      description: 'A trama mostra um jovem rapaz chamado Tanjiro que trabalha para ajudar sua família composta por uma mãe e vários irmãos.',
    },

    {
      src: 'https://dwgkfo5b3odmw.cloudfront.net/img/manga_series_header/794-BLE_PageHeader_2000x800.jpg',
      title: 'Bleach',
      description: 'Bleach apresenta a história de Ichigo Kurosaki, um estudante de 15 anos que consegue ver fantasmas.',
    },

    {
      src: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5255-SeriesHeaders_DB_2000x800_wm.jpg',
      title: 'Drangon Ball Z',
      description: 'A história de Dragon Ball conta a vida de Son Goku e os guerreiros Z!'
    },

    {
      src: 'https://dw9to29mmj727.cloudfront.net/promo/2016/5948-MangaHeaders_DrStone_2000x800_wm.jpg',
      title: 'DR. STONE',
      description: 'conta a história de Senku, um gênio, que renasce 3.700 anos depois que uma luz misteriosa.'
    }
    // Adicione os outros slides aqui...
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const showMenu = () => {
    const menu = document.querySelector(".menu");
    menu.style.visibility = "visible";
    menu.style.opacity = "1";
  };

  const hideMenu = () => {
    const menu = document.querySelector(".menu");
    menu.style.visibility = "hidden";
    menu.style.opacity = "0";
  };

  return (
    <div className="slider">
      <ul style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <li key={index}>
            <img src={slide.src} alt={`Slide ${index + 1}`} />
            <button className="play-button">
              <FontAwesomeIcon icon={faPlayCircle} />
            </button>
            <div className="text-overlay">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
