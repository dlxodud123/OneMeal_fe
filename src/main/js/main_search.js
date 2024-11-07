import './../css/main_search.css';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Main_search = () => {
    const {api} = useContext(MyContext);

    return(
        <div className='main_search_container'>
            <div className='main_search_title_container'>
                <label className='main_search_title'>
                    지금 많이 검색하는 메뉴
                </label>
            </div>
            <div className='main_search_img_container'>
                <div className='main_search_img'>
                    asdf
                </div>
                <div>
                    zxcv
                </div>
                <div>
                    asdf
                </div>
                <div>
                    zxcv
                </div>
                <div>
                    asdf
                </div>
                <div>
                    zxcv
                </div>
            </div>
        </div>
    )
}

export default Main_search