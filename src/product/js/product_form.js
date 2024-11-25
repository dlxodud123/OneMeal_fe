import './../css/product_form.css';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import { useLocation, useParams } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import Header from '../../common/header/js/header';
import Product_img from './product_img';
import Product_info from './product_info';
import Product_detail from './product_detail';
import Product_comment from './product_comment';
import Footer from '../../common/footer/js/footer';

const Product_form = () => {
    const {api} = useContext(MyContext);
    const {id} = useParams();

    const location = useLocation(); 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // let [productInfo, setProductInfo] = useState();
    
    let productInfoTest = [
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img4.jpg`, name: "된장찌개", servename: ["한국인들의 소울푸드", "혼자사는 자취인들을 위한 실용적이고 간단한 레시피"], category: "밥요리", bookmark: true, favorite: 1234, hits: 45677891, people: 2, material: ["대파", "마늘", "삼겹살", "김치", "고춧가루", "물", "두부", "새우젓"], seasoning: ["간장", "멸치액젓", "참기름"],
        detailImg: [`${process.env.PUBLIC_URL}/img/recent/recent-img2.jpg`, `${process.env.PUBLIC_URL}/img/recent/recent-img1.jpg`, `${process.env.PUBLIC_URL}/img/recent/recent-img3.jpg`], 
        detailImgInfo: ["대파는 세로로 반 갈라 송송 썰고,명란젓은 5~6등분하고", "그릇에 밥을 담고 가운데 부분을 숟가락으로 가볍게 누르고", "누른 부분에 달걀을 깨 넣고 꼬치로 노른자를 2~3번 짜른다."] }
    ];

    useEffect(() => {
        const axiosProductInfo = async () => {
            console.log("axios 실행");
            try {
                const response = await axios.get(`${api}/post/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.status === 200) {
                    console.log("status Code : ", response.status);
                    console.log("Status Text:", response.data);
                    // setProductInfo(response.data);
                }     
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        axiosProductInfo();
    }, [])

    return(
        <div>
            <Header></Header>
            <div className='product_form_title_content'>
                레시피&nbsp;<IoIosArrowForward />&nbsp;{productInfoTest[0].category}&nbsp;<IoIosArrowForward />&nbsp;{productInfoTest[0].name}
            </div>
            <div className='product_form_content'>
                <Product_img productImg={productInfoTest[0].img}></Product_img>
                <Product_info productInfo={productInfoTest}></Product_info>
            </div>
            <div className='product_form_detail_content'>
                <Product_detail detailImg={productInfoTest[0].detailImg} detailImgInfo={productInfoTest[0].detailImgInfo}></Product_detail>
            </div>
            <div className='product_form_comment_content'>
                <Product_comment id={id}></Product_comment>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Product_form;