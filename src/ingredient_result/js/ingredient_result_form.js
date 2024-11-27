import './../css/ingredient_result_form.css';
import Header from '../../common/header/js/header';
import Footer from '../../common/footer/js/footer';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Ingredient_result_form = () => {
    const {api} = useContext(MyContext);
    const location = useLocation();
    const idList = location.state?.idList || [];
    const ingredientList = location.state?.ingredientList || [];
    const exceptIngredientList = location.state?.exceptIngredientList || [];

    // let [ingredientResultInfo, setIngredientResultInfo] = useState();

    const ingredientResultInfoTest = [
        ...Array.from({ length: 5 }, () => [
            { img: `${process.env.PUBLIC_URL}/img/recent/recent-img1.jpg`, name: "삼겹살", bookmark: true },
            { img: `${process.env.PUBLIC_URL}/img/recent/recent-img2.jpg`, name: "곱창", bookmark: false },
            { img: `${process.env.PUBLIC_URL}/img/recent/recent-img3.jpg`, name: "회", bookmark: false },
            { img: `${process.env.PUBLIC_URL}/img/recent/recent-img4.jpg`, name: "김치찌개", bookmark: true },
            { img: `${process.env.PUBLIC_URL}/img/recent/recent-img5.jpg`, name: "된장찌개", bookmark: false },
        ]).flat()
    ].map((item, index) => ({ ...item, id: index + 1 }));

    useEffect(() => {
        const axiosIngredientResultInfo = async () => {
            console.log("axios 실행");
            try {
                const response = await axios.get(`${api}/ingredient/result`, {
                    params: {
                        id: JSON.stringify(idList),
                    },
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.status === 200) {
                    console.log("status Code : ", response.status);
                    console.log("Status Text:", response.data);
                    // setIngredientResultInfo(response.data);
                }     
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        axiosIngredientResultInfo();
    }, [])

    return(
        <div>
            <Header></Header>
            <div className='ingredient_result_form_contianer'>
                <div className='ingredient_result_form_title_content'>
                    <label className='ingredient_result_form_title'>식재료 한방에 구원하는</label><br></br>
                    <label className='ingredient_result_form_title2'>재료 활용</label>
                </div>
                {ingredientList.length === 0 ? 
                    <div className='ingredient_result_form_ingredient_list_none_container'></div>
                    :
                    <div className='ingredient_result_form_ingredient_list_container'>
                        {ingredientList.map((item, index) => (
                            <div style={{display:"flex"}}>
                                <div className='ingredient_result_form_ingredient_list_content'>
                                    {item}
                                </div>
                                {!(index === ingredientList.length - 1) && (
                                    <div className='ingredient_result_form_ingredient_list_gap'></div>  
                                )}
                            </div>
                        ))}
                    </div>
                }
                <div className='ingredient_result_form_ingredient_list_bottom'></div>
                {exceptIngredientList.length === 0 ?
                    <div className='ingredient_result_form_except_ingredient_title_none_content'></div>
                    :
                    <div className='ingredient_result_form_except_ingredient_title_content'>
                        {exceptIngredientList.map((item, index) => (
                            <label className='ingredient_result_form_except_ingredient_title'>{item}{index !== exceptIngredientList.length - 1 && ", "}</label>
                        ))}
                        <label className='ingredient_result_form_except_ingredient_title2'>을(를) 제외한 레시피입니다.</label>
                    </div>
                        
                }
                <div className='ingredient_result_form_info_container'>
                    {ingredientResultInfoTest.length === 0 ?
                        <div className='ingredient_result_form_info_none_content'>
                            <label>선택된 재료가 포함된<br></br>레시피를 찾을 수 없습니다.</label>
                        </div>
                        :
                        ingredientResultInfoTest.map((item, index) => (
                            <div className='ingredient_result_form_info_content'>
                                <img className='ingredient_result_form_info_img' src={item.img}></img>
                                <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                                    <div className='ingredient_result_form_info_name_content'>
                                        {item.name}
                                    </div>
                                    <div className='ingredient_result_form_info_favorite_content'>
                                        <img className='ingredient_result_form_info_gap' src='https://2bob.co.kr/skin/nodskin_argio/images/rec_icon2.jpg'></img>
                                        1234        
                                    </div>
                                    <div className='ingredient_result_form_info_hits_content'>
                                        <img className='ingredient_result_form_info_gap' src='https://2bob.co.kr/skin/nodskin_argio/images/rec_icon1.jpg'></img>456789
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Ingredient_result_form;