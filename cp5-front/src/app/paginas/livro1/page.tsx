'use client'; // Isso indica que este é um Client Component

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface NasaData {
  title: string;
  url: string;
  explanation: string;
}

export default function Livro1() {
  const [data, setData] = useState<NasaData | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const res = await fetch('/api/nasaImage?date=2002-06-11');
      const result: NasaData = await res.json();
      setData(result);
    };
    fetchImage();
  }, []);

  if (!data) {
    return <div>Carregando...</div>;
  }
  
  return (
    <div>
      <h1>Intervenção cósmica em eventos históricos</h1>
      <p>
        Velikovsky propõe que eventos cósmicos massivos desempenharam um papel crucial em eventos históricos
        importantes e catástrofes naturais. Ele sugere que, ao longo da história humana, corpos celestes, incluindo planetas,
        passaram perto da Terra, causando desastres de proporções inimagináveis. Esses desastres, como terremotos globais, erupções vulcânicas,
        maremotos e mudanças climáticas extremas, não foram meras coincidências naturais, mas resultado direto de interações entre a Terra e esses corpos celestes.
        Velikovsky postula que esses eventos deixaram marcas profundas na memória coletiva da humanidade, sendo registrados
        em textos religiosos, mitológicos e históricos. Por exemplo, ele conecta desastres globais com eventos narrados no Êxodo bíblico e
        nas histórias de destruição em várias mitologias ao redor do mundo, como a grega, chinesa e mesoamericana. Ele acredita que eventos como o Dilúvio e a
        queda de Torre de Babel podem ser explicados por perturbações cósmicas.
      </p>

      <div>
        <h1>{data.title}</h1>
        <Image src={data.url} alt={data.title} width={800} height={500} style={{ maxWidth: '100%', height: 'auto' }} />
        <p>{data.explanation}</p>
      </div>
    </div>
  );
}
