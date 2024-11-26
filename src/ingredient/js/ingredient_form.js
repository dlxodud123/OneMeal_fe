import './../css/ingredient_form.css';
import Header from '../../common/header/js/header';
import Footer from '../../common/footer/js/footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import axios from 'axios';

const Ingredient_form = () => {
    const {api} = useContext(MyContext);
    const navigate = useNavigate();
    const ingredient = 'ingredient';

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    let [ingredientValue, setIngredientValue] = useState([]);
    let [exceptIngredientValue, setExceptIngredientValue] = useState([]);    

    const handleInputChange = (e) => {
        const input = e.target.value;
        setIngredientValue(input.split(/[,|\s]+/).map((item) => item.trim()).filter(item => item)); // ','로 나누고 공백 제거
    };
    
    const handleInputExceptChange = (e) => {
        const input = e.target.value;
        setExceptIngredientValue(input.split(/[,|\s]+/).map((item) => item.trim()).filter(item => item)); // ',' 또는 공백으로 나누고 공백 제거
    };

    const idTest = [1, 10, 56, 20];

    const ingredientSearchBtn = async () => {
        if (ingredientValue.length === 0 && exceptIngredientValue.length === 0) {alert("냉장고 속 재료 혹은 제외할 재료를 입력해 주세요."); return;}
        if (ingredientValue.length >= 10) {alert("냉장고 속 재료는 10개 이내로 입력해 주세요."); return;}
        console.log("재료 : ", ingredientValue);
        console.log("제외 재료 : ", exceptIngredientValue);
        console.log("재료 검색 버튼 활성화");
        console.log("test : ", idTest);
        navigate('/ingredient/result', { state: {idList: idTest, ingredientList: ingredientValue, exceptIngredientList: exceptIngredientValue} });
        try {
            const response = await axios.get(`${api}/ingredient`, {
                params: {
                    ingredient: ingredientValue,
                    exceptIngredient: exceptIngredientValue,
                },
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.status === 200) {
                console.log("status Code : ", response.status);
                console.log("Status Text:", response.data);
                // navigate('/ingredient/result');
                // 메뉴 id만 받아오기(배열로)
            }   
        } catch (error) {
            console.error('에러 발생:', error);
        }
    }

    return(
        <div>
            <Header select={ingredient}></Header>
            <div className='ingredient_form_content'>
                <div className='ingredient_form_title_content'>
                    <label style={{color:"#003366", fontWeight:"bold"}}>냉장고 속의 재료</label>만 입력하시면<br></br>
                    <label style={{color:"black", fontWeight:"600"}}>최적의 레시피</label>를 추천해 드려요.
                </div>
                <div className='ingredient_form_input_content'>
                    <div className='ingredient_form_input_title'>
                        냉장고 재료
                    </div>
                    <input onChange={handleInputChange} className='ingredient_form_input' placeholder='냉장고 속 재료 입력'></input>
                    <div className='ingredient_form_input_serve_title'>
                        여러개의 재료 입력 시에 각 재료는 띄어쓰기로 구분해주세요
                    </div>
                </div>
                <div className='ingredient_form_except_input_content'>
                    <div className='ingredient_form_except_input_title'>
                        제외 재료
                    </div>
                    <input onChange={handleInputExceptChange} className='ingredient_form_except_input' placeholder='제외할 재료 입력'></input>
                </div>
                <div onClick={ingredientSearchBtn} className='ingredient_form_search_btn_content'>
                    검색
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Ingredient_form;