import './../css/product_img.css';

const Product_img = ({productImg}) => {

    return(
        <div className='product_img_container'>
            <img src={productImg} className='product_img'></img>
        </div>
    )
}

export default Product_img;