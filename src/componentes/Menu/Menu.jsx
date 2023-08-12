import './Menu.css'

const Menu = () => {
    return (
        <nav>
            <div className="nav-bar">
                <i className='bx bx-menu sidebarOpen' ></i>
                <span className="logo"><a href="index.html"><img src="img/logo mangaflix-PhotoRoom.png-PhotoRoom (1) (1).png" alt="" style="width: 250px; position: absolute; bottom: -63px;" /></a></span>

                <div className="menu">
                    <div className="logo-toggle">
                        <span className="logo"><a href="#"><img src="img/logo mangaflix-PhotoRoom.png-PhotoRoom (1) (1).png" alt="" style="width: 250px; position: relative; left: 100px; bottom: -70px;" /></a></span>
                        <i className='bx bx-x sidebarClose'></i>
                    </div>

                    <ul className="nav-links">
                        <li><a href="index.html">Início</a></li>
                        <li><a href="assets/mangas.html">Mangás</a></li>
                        <li><a href="#">Recentes</a></li>
                        <li><a href="#">Mais Lidos</a></li>
                    </ul>
                </div>
                <div className="darkLight-searchBox">
                    <div className="dark-light">
                    </div>

                    <div className="searchBox">
                        <div className="searchToggle">
                            <i className='bx bx-x cancel'></i>
                            <i className='bx bx-search search' ></i>
                        </div>

                        <div className="search-field">
                            <input type="text" placeholder="Pesquisar..." />
                            <i className='bx bx-search search active'></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu