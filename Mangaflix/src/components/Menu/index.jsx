import MenuNav from "./Categorias";

const Menu = () => {
    return (
        <MenuNav>
            <ul class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Mangas</a>
                    <ul>
                        <li><a href="#">Lançamento</a></li>
                        <li><a href="#">Famosos</a></li>
                        <li><a href="#">Legendados</a></li>
                        <li><a href="#">Dublados</a></li>
                    </ul>
                </li>
                <li><a href="#">Categorias</a>
                    <ul>
                        <li><a href="#">Ação</a></li>
                        <li><a href="#">Suspense</a></li>
                        <li><a href="#">Aventura</a></li>
                    </ul>
                </li>
                <li><a href="#">Sobre</a></li>
            </ul>
        </MenuNav>
    )
}

export default Menu;