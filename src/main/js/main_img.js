import './../css/main_img.css';
import { MyContext } from '../../App';
import { useContext, useEffect, useState } from 'react';

const Main_img = () => {
    const {api} = useContext(MyContext);

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [`${process.env.PUBLIC_URL}/img/slide/main-img1.png`, `${process.env.PUBLIC_URL}/img/slide/main-img2.png`];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(timer); // 컴포넌트가 언마운트될 때 타이머 정리
    }, [images.length]);

    return(
        <div className="main_img_container">
            <div className='main_img_slide_container'>
                <div className='main_img_slide_content'>
                    <svg className='main_img_slide_prev' onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className='main_img_slide_next' onClick={() => setCurrentIndex((currentIndex + 1) % images.length)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className='main_img_content'>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={`main_img ${index === currentIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Main_img;