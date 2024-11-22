import './../css/product_info.css';
import { RxPerson } from "react-icons/rx";

const Product_info = ({productInfo}) => {

    return(
        <div className='product_info_container'>
            <div className='product_info_popularity_container'>
                <div className='product_info_popularity_content'>
                    <img src="https://2bob.co.kr/skin/nodskin_argio/images/rec_icon1.jpg"></img>
                    &nbsp;{productInfo[0].hits}&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src='	https://2bob.co.kr/skin/nodskin_argio/images/rec_icon2.jpg'></img>
                    &nbsp;{productInfo[0].favorite}
                </div>
            </div>
            <div className='product_info_name_content'>
                {productInfo[0].name}
            </div>  
            <div className='product_info_name_serve_container'>
                <div className='product_info_name_serve1_content'>
                    {productInfo[0].servename[0]}
                </div>
                <div className='product_info_name_serve2_content'>
                    {productInfo[0].servename[1]}
                </div>
            </div>
            <div className='product_info_material_seasoning_content'>
                <label className='product_info_material_seasoning_title'>
                    재료&nbsp;
                </label>
                <RxPerson className='product_info_material_seasoning_people_icon' />
                <label className='product_info_material_seasoning_people'>
                    {productInfo[0].people}인분
                </label>
            </div>
            <div className='product_info_material_content'>
                <div className='product_info_material_title'>
                    필수재료
                </div>
                <div className='product_info_material'>
                    {productInfo.map((item, index) => (
                        <label>{item.material.join(', ')}</label>
                    ))}
                </div>
            </div>
            <div className='product_info_seasoning_content'>
                <div className='product_info_seasoning_title'>
                    양념
                </div>
                <div className='product_info_seasoning'>
                    {productInfo.map((item, index) => (
                        <label>{item.seasoning.join(', ')}</label>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product_info;