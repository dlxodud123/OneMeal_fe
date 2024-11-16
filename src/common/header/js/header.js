import './../css/header.css';
import { useContext } from 'react';
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../../App';

const Header = () => {
    const {api} = useContext(MyContext)
    const navigate = useNavigate();

    return(
        <header className='header_container'>
            <div className='header_shadow'>
                <div className='header_content'>
                    <div className='header_menu_content'>
                        <div className='header_menu_recipe_content'>
                            <label onClick={() => navigate('/recipe')} className='header_menu_recipe'>레시피</label>
                        </div>
                        <div className='header_menu_ranking_content'>
                            <label onClick={() => navigate('/ranking')} className='header_menu_ranking'>랭킹</label>
                        </div>
                    </div>
                    <div className='header_logo_content'>
                        <img onClick={() => navigate('/')} src={`${process.env.PUBLIC_URL}/img/logo/logo.png`} className='header_logo'></img>
                    </div>
                    <div className='header_join_content'>
                        <div className='header_join_login_content'>
                            <label onClick={() => navigate('/login')} className='header_join_login'>로그인</label>
                        </div>
                        <div className='header_join_signup_content'>
                            <label onClick={() => navigate('/signup')} className='header_join_signup'>회원가입</label>
                        </div>
                    </div>
                    <div className='header_search_content'>
                        <IoSearch className='header_search' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;