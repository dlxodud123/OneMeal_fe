import './../css/main_category.css';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';

const Main_category = () => {
    const {api} = useContext(MyContext);

    let [categoryHover, setCategoryHover] = useState(null);
    let [startIndex, setStartIndex] = useState(0);

    const categoryInfo = [
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema1_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema1_on.png`, name: "밥요리" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema2_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema2_on.png`, name: "국&탕" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema3_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema3_on.png`, name: "찌개&전골" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema4_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema4_on.png`, name: "밑반찬" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema5_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema5_on.png`, name: "볶음요리" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema6_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema6_on.png`, name: "구이(고기/생선)" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema7_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema7_on.png`, name: "찜&조림" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema8_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema8_on.png`, name: "손님상" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema9_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema9_on.png`, name: "아이반찬" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema10_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema10_on.png`, name: "김치 장아찌" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema11_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema11_on.png`, name: "도시락" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema12_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema12_on.png`, name: "튀김" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema13_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema13_on.png`, name: "면요리" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema14_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema14_on.png`, name: "샐러드" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema15_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema15_on.png`, name: "김밥&초밥" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema16_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema16_on.png`, name: "야식&술안주" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema17_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema17_on.png`, name: "스파게티" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema18_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema18_on.png`, name: "간식/분식" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema19_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema19_on.png`, name: "토스트&샌드위치" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema20_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema20_on.png`, name: "베이킹" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema21_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema21_on.png`, name: "디저트" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema22_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema22_on.png`, name: "주스&음료" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema23_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema23_on.png`, name: "술&칵테일" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema24_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema24_on.png`, name: "명절요리" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema25_off.png`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/main_thema25_on.png`, name: "기타요리" }
    ];

    // 한 번에 보이는 요소의 개수
    const visibleCount = 11;
    
    // 다음으로 이동
    const handleNext = () => {
        setStartIndex((prevIndex) => {
            // 현재 보이는 항목이 끝에 도달하면 더 이상 이동하지 않음
            if (prevIndex + visibleCount >= categoryInfo.length) {
                return prevIndex; // 그대로 유지하여 더 이상 이동하지 않음
            } else {
                return prevIndex + 1; // 다음 항목으로 이동
            }
        });
    };

    // 이전으로 이동
    const handlePrev = () => {
        setStartIndex((prevIndex) => {
            // 현재 보이는 항목이 첫 번째 항목에 도달하면 더 이상 이동하지 않음
            if (prevIndex === 0) {
                return prevIndex; // 그대로 유지하여 더 이상 이동하지 않음
            } else {
                return prevIndex - 1; // 이전 항목으로 이동
            }
        });
    };
    
    return(
        <div className='main_category_container'>
            <div className='main_category_slide_prev_content' onClick={handlePrev}>
                <svg className='main_category_slide_prev' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <div className='main_category_info_wrapper'>
                <div
                    className='main_category_info_content'
                    style={{
                        transform: `translateX(-${startIndex * 90}px)`, // 90px씩 이동
                        transition: 'transform 0.5s ease',
                        display: 'flex'
                    }}
                >
                    {categoryInfo.map((info, index) => (
                        <div key={index} className='main_category_img_content'
                             onMouseEnter={() => setCategoryHover(index)}
                             onMouseLeave={() => setCategoryHover(null)} >
                            <img
                                className='main_category_img'
                                src={index === categoryHover ? info.onImg : info.offImg}
                                alt={info.name}
                            />
                            <div className='main_category_img_name_content'>
                                <label className={index === categoryHover ? 'main_category_img_on_name' : 'main_category_img_off_name'}>
                                    {info.name}
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='main_category_slide_next_content' onClick={handleNext}>
                <svg className='main_category_slide_next' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default Main_category;