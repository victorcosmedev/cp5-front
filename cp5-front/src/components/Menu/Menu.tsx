import Link from 'next/link'

export default function Menu() {
    return (
        <nav>
            <ul className="flex gap-5">
                <li> <Link href="/">Home</Link> </li>
                <li> <Link href="/paginas/livro1">Página 1</Link> </li>
                <li> <Link href="/paginas/livro2">Página 2</Link> </li>
                <li> <Link href="/paginas/livro3">Página 3</Link> </li>
                <li> <Link href="/paginas/livro4">Página 4</Link> </li>
            </ul>
        </nav>
    )
}
