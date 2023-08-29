import React, { useEffect, useState } from 'react';
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
      src: 'https://e1.pxfuel.com/desktop-wallpaper/503/799/desktop-wallpaper-demon-slayer-kimetsu-no-yaiba-series-demon-slayer-banner.jpg',
      title: 'Demon Slayer',
      description: 'A trama mostra um jovem rapaz chamado Tanjiro que trabalha para ajudar sua família composta por uma mãe e vários irmãos.',
    },
    {
      src: 'https://e1.pxfuel.com/desktop-wallpaper/503/799/desktop-wallpaper-demon-slayer-kimetsu-no-yaiba-series-demon-slayer-banner.jpg',
      title: 'Naruto Shippuden',
      description: 'A trama mostra um jovem rapaz chamado Tanjiro que trabalha para ajudar sua família composta por uma mãe e vários irmãos.',
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
    </div>
  );
}
