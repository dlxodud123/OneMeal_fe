import './../css/product_form.css';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import { useParams } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import Header from '../../common/header/js/header';
import Product_img from './product_img';
import Product_info from './product_info';
import Footer from '../../common/footer/js/footer';

const Product_form = () => {
    const {api} = useContext(MyContext);
    const {id} = useParams();

    // let [productInfo, setProductInfo] = useState();
    
    let productInfoTest = [
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img4.jpg`, name: "된장찌개", servename: ["한국인들의 소울푸드", "혼자사는 자취인들을 위한 실용적이고 간단한 레시피"], category: "밥요리", bookmark: true, favorite: 1234, hits: 45677891, people: 2, material: ["대파", "마늘", "삼겹살", "김치", "고춧가루", "물", "두부", "새우젓"], seasoning: ["간장", "멸치액젓", "참기름"] },
    ];

    useEffect(() => {
        const axiosProductInfo = async () => {
            console.log("axios 실행");
            try {
                const response = await axios.get(`${api}/product/${id}`, {
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
            <Footer></Footer>
        </div>
    )
}

export default Product_form;