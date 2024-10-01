import Image from "next/image";

export default function NotFound() {
    return(
        <div>
            <h1>404: Page Not Found</h1>
            <h2>O recurso que você está tentando acessar não está disponível</h2>
            <Image src="/img/img-404.jpg" alt="Página de Erro" width={200} height={50} placeholder="blur" blurDataURL="/blur.jpg" layout="responsive"/>

        </div>
    )
}