import './../css/main_search.css';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';
import { FaRegHeart } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";

const Main_search = () => {
    const {api} = useContext(MyContext);

    let [moreBtn, setMoreBtn] = useState(false);

    const searchInfo = [
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img1.jpg`, name: "삼겹살" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img2.jpg`, name: "곱창" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img3.jpg`, name: "회" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img4.jpg`, name: "김치찌개" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img5.jpg`, name: "된장찌개" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img1.jpg`, name: "삼겹살" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img2.jpg`, name: "곱창" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img3.jpg`, name: "회" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img4.jpg`, name: "김치찌개" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img5.jpg`, name: "된장찌개" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img1.jpg`, name: "삼겹살" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img2.jpg`, name: "곱창" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img3.jpg`, name: "회" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img4.jpg`, name: "김치찌개" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img5.jpg`, name: "된장찌개" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img1.jpg`, name: "삼겹살" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img2.jpg`, name: "곱창" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img3.jpg`, name: "회" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img4.jpg`, name: "김치찌개" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img5.jpg`, name: "된장찌개" }
    ];
    
    const displayedInfo = moreBtn ? searchInfo : searchInfo.slice(0, 6);
    
    return(
        <div className='main_search_container'>
            <div className='main_search_title_container'>
                <label className='main_search_title'>
                    지금 많이 검색하는 메뉴
                </label>
            </div>
            <div className='main_search_info_container'>
                {displayedInfo.map((info, index) => (
                    <div className='main_search_info_content'>
                        <div className='main_search_img_num_content'>
                            <label className='main_search_img_num'>
                                {index+1}
                            </label>
                        </div>
                        <div className='main_search_img_content'>
                            <img
                                key={index}
                                src={info.img}
                                className='main_search_img'
                            />
                        </div>
                        <div className='main_search_img_name_content'>
                            <label className='main_search_img_name'>
                                {info.name}
                                {/* 회곱차아니챠니탕회곱차아니챠니탕 */}
                            </label>
                        </div>
                        <div className='main_search_img_bookmark_container'>
                            <div className='main_search_img_bookmark_content'>
                                <FaRegHeart className='main_search_img_bookmark'/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {
                moreBtn ?
                <div onClick={() => setMoreBtn(false)} className='main_search_more_container'>
                    <FiMinusCircle className='main_search_more_icon' />
                    <label className='main_search_more'>접기</label>
                </div>
                :
                <div onClick={() => setMoreBtn(true)} className='main_search_more_container'>
                    <FiPlusCircle className='main_search_more_icon' />
                    <label className='main_search_more'>더보기</label>
                </div>
            }
            
        </div>
    )
}

export default Main_search