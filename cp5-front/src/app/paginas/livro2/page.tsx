"use client"; // Adicione esta linha

import Image from 'next/image';
import { useState, useEffect } from 'react';


export default function Livro2(){

    const [title, setTitle] = useState({
        title: '',
        url: '',
        explanation: ''
    });

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=guT7aJwrahSU6QNhxyo6peHavdMJD8DXL0eHcUSu&date=2005-08-03")
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

            <h1>Deslocamento planetário e catástrofes globais</h1> 
            <p>Em Worlds in Collision, Velikovsky apresenta a ideia de que corpos celestes, como Vênus e Marte, não sempre seguiram suas órbitas atuais de forma estável, mas sofreram deslocamentos que causaram eventos catastróficos na Terra. Ele sugere que, em tempos relativamente recentes, Vênus teria se aproximado da Terra durante sua formação como um cometa, perturbando o equilíbrio do planeta e provocando uma série de desastres naturais, como terremotos, erupções vulcânicas e inundações massivas.</p> <p>Velikovsky argumenta que essas interações cósmicas teriam alterado a órbita da Terra e mudado o eixo de rotação do planeta, resultando em mudanças drásticas no clima e na geografia. Esses eventos não só teriam causado destruição em massa, mas também influenciado profundamente as civilizações antigas, que teriam registrado essas catástrofes em seus mitos, lendas e textos sagrados. Ele aponta para relatos de povos antigos sobre dias prolongados, noites intermináveis e o caos no firmamento como evidências de que a Terra experimentou períodos de instabilidade astronômica devido à proximidade de outros planetas.</p> <p>Velikovsky conecta esses fenômenos a histórias universais de destruição e renovação, como o Dilúvio bíblico e os mitos de civilizações caindo e ressurgindo. Ele sugere que tais relatos refletem memórias distantes de catástrofes globais causadas por deslocamentos planetários, desafiando as explicações científicas convencionais sobre a estabilidade dos corpos celestes e oferecendo uma nova perspectiva sobre a história humana.</p>
            
            <div>
                <figure>
                    <Image src={title.url} alt={title.title} width={800} height={600}/>
                </figure>
            </div>
        
        
        </div>
        
    );
}