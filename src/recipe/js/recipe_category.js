import { useState } from 'react';
import './../css/recipe_category.css';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Recipe_category = ({ recipeCategory, setRecipeCategory }) => {

    let [categorySwitch, setCategorySwitch] = useState(true);

    const recipeCategoryInfo = [
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_1_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_1_on.jpg`, name: "밥요리" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_2_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_2_on.jpg`, name: "국&탕" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_3_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_3_on.jpg`, name: "찌개&전골" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_4_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_4_on.jpg`, name: "밑반찬" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_5_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_5_on.jpg`, name: "볶음요리" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_6_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_6_on.jpg`, name: "구이(고기/생선)" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_7_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_7_on.jpg`, name: "찜&조림" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_8_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_8_on.jpg`, name: "손님상" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_9_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_9_on.jpg`, name: "아이반찬" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_10_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_10_on.jpg`, name: "김치 장아찌" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_11_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_11_on.jpg`, name: "도시락" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_12_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_12_on.jpg`, name: "튀김" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_13_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_13_on.jpg`, name: "면요리" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_14_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_14_on.jpg`, name: "샐러드" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_15_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_15_on.jpg`, name: "김밥&초밥" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_16_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_16_on.jpg`, name: "야식&술안주" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_17_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_17_on.jpg`, name: "스파게티" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_18_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_18_on.jpg`, name: "간식/분식" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_19_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_19_on.jpg`, name: "토스트&샌드위치" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_20_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_20_on.jpg`, name: "베이킹" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_21_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_21_on.jpg`, name: "디저트" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_22_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_22_on.jpg`, name: "주스&음료" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_23_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_23_on.jpg`, name: "술&칵테일" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_24_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_24_on.jpg`, name: "명절요리" },
        { offImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_25_off.jpg`, onImg: `https://2bob.co.kr/skin/nodskin_argio/images/tag_icon_25_on.jpg`, name: "기타요리" }
    ];
    
    return(
        <div className='recipe_category_container'>
            <div className='recipe_category_content' style={{height: categorySwitch ? '300px' : '0'}}>
                {recipeCategoryInfo.map((info, index) => (
                    <div style={{border : recipeCategory === info.name ? "0.1px solid #fc7405" : "0.1px solid rgba(0,0,0,0.1)"}} onClick={() => {setRecipeCategory(info.name)}} key={index} className='recipe_category'>
                        <img 
                            src={recipeCategory === info.name ? info.onImg : info.offImg}
                            alt={info.name}
                            className='recipe_category_img'
                        />
                        <div style={{color : recipeCategory === info.name ? "orange" : "#888" }} className='recipe_category_text'>{info.name}</div>
                    </div>
                ))}
            </div>
            <div className='recipe_category_close_container'>
                {
                    categorySwitch === false ?          
                    <div onClick={() => {setCategorySwitch(true)}} className='recipe_category_close_content'>
                        <IoIosArrowDown className='recipe_category_colse_icon'></IoIosArrowDown>
                        <label className='recipe_category_colse'>테마 보기</label>
                    </div>
                    :
                    <div onClick={() => {setCategorySwitch(false)}} className='recipe_category_close_content'>
                        <IoIosArrowUp className='recipe_category_colse_icon'></IoIosArrowUp>
                        <label className='recipe_category_colse'>테마 닫기</label>
                    </div>
                }
            </div>
        </div>
    )
}

export default Recipe_category;