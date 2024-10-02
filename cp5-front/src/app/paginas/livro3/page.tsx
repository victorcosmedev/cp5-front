"use client"; // Adicione esta linha

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Livro3(){

    const [title, setTitle] = useState({
        title: '',
        url: '',
        explanation: ''
    });

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=guT7aJwrahSU6QNhxyo6peHavdMJD8DXL0eHcUSu&date=2002-04-04")
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
            <h1>Interações celestes e memórias culturais</h1>
            <p>
            Velikovsky propõe que muitas tradições culturais e mitológicas ao redor do mundo são, na verdade, registros de eventos cósmicos reais. Ele sugere que antigas civilizações observaram e documentaram fenômenos extraordinários no céu, como o movimento errático de planetas e a aparição de cometas, que teriam causado destruição e caos na Terra. Segundo Velikovsky, essas memórias foram transmitidas através de mitos e lendas, sendo reinterpretadas ao longo do tempo como histórias divinas ou sobrenaturais. Para ele, textos como a epopeia babilônica e os mitos dos povos ameríndios são reinterpretações dessas catástrofes cósmicas, refletindo não apenas crenças religiosas, mas também tentativas de compreender o impacto direto das forças cósmicas na vida cotidiana. Essas tradições seriam, portanto, vestígios de eventos astronômicos de grande escala que moldaram a história humana.
            </p>

            <div>
                <figure>
                    <Image src={title.url} alt={title.title} width={800} height={600}/>
                </figure>
            </div>
        </div>
    );
}