import './../css/recipe_info.css';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Recipe_info = ({recipeCategory}) => {
    const {api} = useContext(MyContext);
    const navigate = useNavigate();
    
    // let [recipeInfo, setRecipeInfo] = useState();    

    const recipeInfoTest = [
        ...Array.from({ length: 25 }, () => [
            { img: `${process.env.PUBLIC_URL}/img/recent/recent-img1.jpg`, name: "삼겹살", bookmark: true },
            { img: `${process.env.PUBLIC_URL}/img/recent/recent-img2.jpg`, name: "곱창", bookmark: false },
            { img: `${process.env.PUBLIC_URL}/img/recent/recent-img3.jpg`, name: "회", bookmark: false },
            { img: `${process.env.PUBLIC_URL}/img/recent/recent-img4.jpg`, name: "김치찌개", bookmark: true },
            { img: `${process.env.PUBLIC_URL}/img/recent/recent-img5.jpg`, name: "된장찌개", bookmark: false },
        ]).flat()
    ].map((item, index) => ({ ...item, id: index + 1 }));
       
    let [recipePaginationSelect, setRecipePaginationSelect] = useState(1);
    let [recipePaginationLength, setRecipePaginationLength] = useState(1);
    let [paginationRange, setPaginationRange] = useState([1, 5]); // 5개씩 표시 범위

    // 페이지 수 계산 (20개씩 나누기)
    useEffect(() => {
        const pages = Math.ceil(recipeInfoTest.length / 20);
        setRecipePaginationLength(pages);
    }, [recipeInfoTest]);

    // 페이지 범위 업데이트
    const updatePaginationRange = (currentPage) => {
        const start = Math.floor((currentPage - 1) / 5) * 5 + 1;
        setPaginationRange([start, start + 4]);
    };

    // 페이지 변경 시 범위 조정
    const handlePageChange = (page) => {
        setRecipePaginationSelect(page);
        updatePaginationRange(page);
    };

    // 현재 페이지 데이터 계산
    const currentPageData = recipeInfoTest.slice(
        (recipePaginationSelect - 1) * 20,
        recipePaginationSelect * 20
    );

    useEffect(() => {
        const axiosRecipeInfo = async () => {
            console.log("axios 실행");
            try {
                const response = await axios.get(`${api}/recipe/${recipeCategory}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.status === 200) {
                    console.log("status Code : ", response.status);
                    console.log("Status Text:", response.data);
                    // setRecipeInfo(response.data);
                }     
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        axiosRecipeInfo();
    }, [recipeCategory])

    return(
        <div className='recipe_info_conatiner'>
            <div className='recipe_info_title_content'>
                {recipeCategory}
            </div>
            <div className='recipe_info_content'>
                {currentPageData.map((info, index) => (
                    <div onClick={() => {navigate(`/product/${info.id}`)}} className='recipe_info_info_content' key={index}>
                        <img className='recipe_info_info_img' src={info.img} alt={info.name}></img>
                        <div className='recipe_info_info_text'>
                            {info.name}
                        </div>
                    </div>
                ))}
            </div>
            <div className='recipe_info_pagination_container'>
                <div className='recipe_info_pagination_content'>
                    <div className='recipe_info_pagination_arrow_content'>
                        <IoIosArrowBack onClick={() => handlePageChange(recipePaginationSelect > 1 ? recipePaginationSelect - 1 : recipePaginationSelect)} className='recipe_info_pagination_arrow'></IoIosArrowBack>
                    </div>
                    <div className='recipe_info_pagination_num_content'>
                    {Array.from(
                            { length: recipePaginationLength },
                            (_, index) => index + 1
                        )
                        .filter((page) => page >= paginationRange[0] && page <= paginationRange[1])
                        .map((page) => (
                            <div key={page} onClick={() => handlePageChange(page)} style={{border: recipePaginationSelect === page ? "1px solid rgba(0,0,0,0.1)" : "none", color: recipePaginationSelect === page ? "#003366" : "rgba(0,0,0,0.3)"}} className="recipe_info_pagination_num">
                                {page}
                            </div>
                    ))}
                    </div>
                    <div className='recipe_info_pagination_arrow_content'>
                        <IoIosArrowForward onClick={() => handlePageChange(recipePaginationSelect < recipePaginationLength ? recipePaginationSelect + 1 : recipePaginationSelect)} className='recipe_info_pagination_arrow'></IoIosArrowForward>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe_info;