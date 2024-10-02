"use client"; // Adicione esta linha

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Livro1() {
    const [title, setTitle] = useState({
        title: '',
        url: '',
        explanation: ''
    });

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=guT7aJwrahSU6QNhxyo6peHavdMJD8DXL0eHcUSu&date=2002-06-11")
        .then(response => {
            if (!response.ok) {
                throw new Error('Dados não encontrados!');
            }
            return response.json();
        })
        .then(data => {
            setTitle({
                title: data.title,
                url: data.url,
                explanation: data.explanation
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, []); 
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
                <figure>
                    <Image src={title.url} alt={title.title} width={800} height={600}/>
                </figure>
            </div>
        </div>
    );
}