import './../css/main_form.css';
import Header from '../../common/header/js/header';
import Main_img from './main_img';
import Main_recent from './main_recent';
import Main_search from './main_search';
import Main_category from './main_category';
import Main_ranking from './main_ranking';
import Footer from '../../common/footer/js/footer';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import { useLocation } from 'react-router-dom';

const Main_from = () => {
    const {api} = useContext(MyContext);

    // 페이지가 처음 렌더링될 때 또는 URL 변경 시 상태 업데이트
    const location = useLocation(); 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return(
        <div className='main_form_container'>
            <Header></Header>
            <Main_img></Main_img>
            <Main_recent></Main_recent>
            <Main_search></Main_search>
            <Main_category></Main_category>
            <Main_ranking></Main_ranking>
            <Footer></Footer>
        </div>
    )
}

export default Main_from;