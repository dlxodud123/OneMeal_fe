import './../css/main_recent.css';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Main_recent = () => {
    const {api} = useContext(MyContext);

    const recentInfo = [
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img1.jpg`, name: "삼겹살" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img2.jpg`, name: "곱창" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img3.jpg`, name: "회" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img4.jpg`, name: "김치찌개" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img5.jpg`, name: "된장찌개" }
    ];

    return(
        <div className='main_recent_container'>
            <div className='main_recent_title_content'>
                <label className='main_recent_title'>최신 레시피</label>
            </div>
            <div className='main_recent_img_content'>
                {recentInfo.map((info, index) => (
                    <div>
                        <img
                            key={index}
                            src={info.img}
                            className='main_recent_img'
                        />
                        <label className='main_recent_img_name'>
                            {info.name}
                            {/* 회곱차아니챠니탕ㄴㅇㄹㅁㄴㅇㄹ */}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )   
}

export default Main_recent