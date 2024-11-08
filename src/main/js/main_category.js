import './../css/main_category.css';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Main_category = () => {
    const {api} = useContext(MyContext);

    const categoryInfo = [
        { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema1_off.png`, name: "밥요리" },
        { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema2_off.png`, name: "국&탕" },
        { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema3_off.png`, name: "찌개&전골" },
        { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema4_off.png`, name: "밑반찬" },
        { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema5_off.png`, name: "볶음요리" },
        { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema6_off.png`, name: "구이(고기/생선)" },
        { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema7_off.png`, name: "찜&조림" },
        { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema8_off.png`, name: "손님상" },
        { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema9_off.png`, name: "아이반찬" },
        { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema10_off.png`, name: "김치 장아찌" },
        { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema11_off.png`, name: "도시락" },
        // { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema12_off.png`, name: "튀김" },
        // { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema13_off.png`, name: "면요리" },
        // { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema14_off.png`, name: "샐러드" },
        // { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema15_off.png`, name: "김밥&초밥" },
        // { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema16_off.png`, name: "야식&술안주" },
        // { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema17_off.png`, name: "스파게티" },
        // { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema18_off.png`, name: "간식&분식" },
        // { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema19_off.png`, name: "토스트&샌드위치" },
        // { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema20_off.png`, name: "베이킹" },
        // { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema21_off.png`, name: "디저트" },
        // { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema22_off.png`, name: "주스&음료" },
        // { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema23_off.png`, name: "술&칵테일" },
        // { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema24_off.png`, name: "명절요리" },
        // { img: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema25_off.png`, name: "기타요리" }
    ];

    return(
        <div className='main_category_container'>
            <div className='main_category_slide_prev_content'>
                <svg className='main_category_slide_prev' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            {categoryInfo.map((info, index) => (
                <div className='main_category_info_content'>
                    <div className='main_category_img_content'>
                        <img 
                            className='main_category_img'
                            key={index}
                            src={info.img}>
                        </img>
                    </div>
                    <div className='main_category_img_name_content'>
                        <label className='main_category_img_name'>
                            {info.name}
                            {/* 토스트&샌드위치 */}
                        </label>
                    </div>
                </div>
            ))}
            <div className='main_category_slide_next_content'>
                <svg className='main_category_slide_next' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default Main_category;