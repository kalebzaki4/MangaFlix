import '../styles/components/_Menu.scss';
import { AiOutlineBars, AiOutlineSearch } from "react-icons/ai";
import Logo from "../images/mangaflix.png";

export default function Menu() {
    return (
        <header>
            <container>
                <div className='flex'>
                    <nav>
                        <ul>
                            <li><a className='Logo' href="#"><AiOutlineBars /></a></li>
                            <li><a href="#"><img src={Logo} alt="logo-Mangaflix" title='Voltar ao inicio' /></a></li>
                            <li><input type="text" id="pesquisa" placeholder='pesquisar' />
                                <button><AiOutlineSearch /></button>
                            </li>

                        </ul>
                    </nav>
                    <div className="btn-login">
                        <a href=""><button>LOGIN</button></a>
                    </div>
                </div>
            </container>
        </header>
    );
};