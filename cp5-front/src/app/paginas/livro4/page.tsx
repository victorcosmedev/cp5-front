"use client"; // Adicione esta linha

import Image from 'next/image';
import { useState, useEffect } from 'react';


export default function Livro4(){

    const [title, setTitle] = useState({
        title: '',
        url: '',
        explanation: ''
    });

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=guT7aJwrahSU6QNhxyo6peHavdMJD8DXL0eHcUSu&date=2004-12-16")
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
            <h1>A reconfiguração do sistema solar</h1>
            <p>Em Worlds in Collision, Velikovsky desafia a visão tradicional de que os planetas têm seguido órbitas estáveis por bilhões de anos. Ele argumenta que o sistema solar passou por uma reconfiguração significativa em tempos históricos, com planetas como Vênus e Marte se aproximando da Terra e causando destruição em escala global. Esses encontros planetários teriam gerado fortes forças gravitacionais que impactaram diretamente o clima, a geologia e a vida na Terra. Velikovsky sugere que, por exemplo, a formação de desertos e mudanças súbitas em grandes corpos de água podem ser explicadas por esses eventos. Ele também acredita que os deslocamentos das órbitas planetárias deixaram marcas evidentes em relatos antigos, que descrevem fenômenos como chuvas de fogo, terremotos e mudanças abruptas no céu. Ao propor que o sistema solar é muito mais dinâmico e instável do que se pensava, Velikovsky desafia a ciência convencional e oferece uma nova visão sobre a história planetária e seu impacto na humanidade.</p>
        
            <div>
                <figure>
                    <Image src={title.url} alt={title.title} width={800} height={600}/>
                </figure>
            </div>
        
        </div>
    );
}