import './Header.css'

export default function Header(){
    return(
        <header>
            <h1>Logo</h1>
            <nav>
                <ul className='navigation'>
                    <a href='#'>Inicio</a>
                    <a href='#'>Eventos</a>
                    <a href='#'>Estadisticas</a>
                    <a href='#'>Rankings</a>
                    <a href='#'>Apuestas</a>
                </ul>
            </nav>
        </header>
    )
}