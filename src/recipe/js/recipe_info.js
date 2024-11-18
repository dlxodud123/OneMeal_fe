import './../css/recipe_info.css';

const Recipe_info = ({recipeCategory}) => {

    const recipeInfo = [
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img1.jpg`, name: "삼겹살", bookmark: true },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img2.jpg`, name: "곱창", bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img3.jpg`, name: "회", bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img4.jpg`, name: "김치찌개", bookmark: true },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img5.jpg`, name: "된장찌개", bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img1.jpg`, name: "삼겹살", bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img2.jpg`, name: "곱창", bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img3.jpg`, name: "회", bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img4.jpg`, name: "김치찌개", bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img5.jpg`, name: "된장찌개", bookmark: true },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img1.jpg`, name: "삼겹살", bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img2.jpg`, name: "곱창", bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img3.jpg`, name: "회", bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img4.jpg`, name: "김치찌개", bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img5.jpg`, name: "된장찌개", bookmark: true },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img1.jpg`, name: "삼겹살", bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img2.jpg`, name: "곱창", bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img3.jpg`, name: "회", bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img4.jpg`, name: "김치찌개", bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img5.jpg`, name: "된장찌개", bookmark: false }
    ];

    return(
        <div className='recipe_info_conatiner'>
            <div className='recipe_info_title_content'>
                {recipeCategory}
            </div>
            <div className='recipe_info_content'>
                {recipeInfo.map((info, index) => (
                    <div className='recipe_info_info_content'>
                        <img className='recipe_info_info_img' src={info.img}></img>
                        <div className='recipe_info_info_text'>
                            {info.name}
                        </div>
                    </div>
                ))}
            </div>
            <div className='recipe_info_pagination_container'>
                asdf
            </div>
        </div>
    )
}

export default Recipe_info;