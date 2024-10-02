import Menu from "../Menu/Menu";

export default function Cabecalho(){
    return(
        <header className="w-100 border flex justify-between py-5 px-8 font-semibold">
            <div>CP5 Front</div>
            <Menu/>
        </header>
    );
}