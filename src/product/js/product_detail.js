import './../css/product_detail.css';

const Product_detail = ({ detailImg, detailImgInfo }) => {

    return(
        <div className='product_detail_container'>
            {detailImg.map((item, index) => (
                <div className='product_detail_content'>
                    <img className='product_detail_img' src={item}></img>
                    <div className='product_detail_img_info_content'>
                        <label className='product_detail_img_info_num'>{index+1}</label>
                        <label className='product_detail_img_info_text'>{detailImgInfo[index]}</label>
                    </div>
                </div>
            ))}
            <div className='product_detail_bottom_border'></div>
        </div>
    )
}

export default Product_detail;