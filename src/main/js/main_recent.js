import './../css/main_recent.css';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import axios from 'axios';

const Main_recent = () => {
    const {api} = useContext(MyContext);

    const recentInfoTest = [
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img1.jpg`, name: "삼겹살" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img2.jpg`, name: "곱창" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img3.jpg`, name: "회" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img4.jpg`, name: "김치찌개" },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img5.jpg`, name: "된장찌개" }
    ];

    // let [recentInfo, setRecentInfo] = useState();

    useEffect(() => {
        const axiosRecentInfo = async () => {
            console.log("axios 실행");
            try {
                const response = await axios.get(`${api}/recent`, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.status === 200) {
                    console.log("status Code : ", response.status);
                    console.log("Status Text:", response.data);
                    // setRecentInfo(response.data);
                }     
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        axiosRecentInfo();
    }, [])

    return(
        <div className='main_recent_container'>
            <div className='main_recent_title_content'>
                <label className='main_recent_title'>최신 레시피</label>
            </div>
            <div className='main_recent_img_content'>
                {recentInfoTest.map((info, index) => (
                    <div>
                        <img
                            key={index}
                            src={info.img}
                            className='main_recent_img'
                        />
                        <label className='main_recent_img_name'>
                            {info.name}
                            {/* 회곱차아니챠니탕회곱차아니챠니탕 */}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )   
}

export default Main_recent