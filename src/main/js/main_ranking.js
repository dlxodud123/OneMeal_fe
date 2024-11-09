import './../css/main_ranking.css';
import { useContext } from 'react';
import { MyContext } from '../../App';
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";

const Main_ranking = () => {
    const {api} = useContext(MyContext);

    const bookmarkInfo = [
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img1.jpg`, name: "삼겹살", count: 9487, bookmark: true },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img2.jpg`, name: "곱창", count: 9112, bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img3.jpg`, name: "회", count: 7023, bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img4.jpg`, name: "김치찌개", count: 4890, bookmark: false },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img5.jpg`, name: "된장찌개", count: 4701, bookmark: true }
    ];
    
    const commentInfo = [
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img5.jpg`, name: "된장찌개", count: 25671 },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img4.jpg`, name: "김치찌개", count: 16142 },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img3.jpg`, name: "회", count: 15988 },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img2.jpg`, name: "곱창", count: 15532 },
        { img: `${process.env.PUBLIC_URL}/img/recent/recent-img1.jpg`, name: "삼겹살", count: 14889 }
    ];

    return(
        <div className='main_ranking_container'>

            <div className='main_ranking_bookmark_container'>
                <div className='main_ranking_bookmark_title_content'>
                    <label className='main_ranking_bookmark_title'>
                        찜 랭킹
                    </label>
                </div>

                {bookmarkInfo.map((info, index) => (
                    <div className='main_ranking_bookmark_info_content'>
                        <div className='main_ranking_bookmark_img_num_content'>
                            <label className='main_ranking_bookmark_img_num'>
                                {index + 1}
                            </label>
                        </div>
                        <div className='main_ranking_bookmark_img_content'>
                            <img
                                key={index}
                                src={info.img}
                                className='main_ranking_bookmark_img'
                            />
                        </div>
                        <div className='main_ranking_bookmark_img_name_content'>
                            <label className='main_ranking_bookmark_img_name'>
                                {info.name}
                                {/* 회곱차아니챠니탕회곱차아니챠니탕 */}
                            </label>
                        </div>
                        <div className='main_ranking_bookmark_img_count_container'>
                            {
                                info.bookmark ? 
                                <FaRegHeart className='main_ranking_bookmark_img_count_icon' />
                                :
                                <FaRegHeart className='main_ranking_bookmark_img_count_none_icon' />
                            }
                            <label className='main_ranking_bookmark_img_count'>
                                {info.count}
                            </label>
                        </div>
                    </div>
                ))}
            </div>

            <div className='main_ranking_blank' />

            <div className='main_ranking_comment_container'>
                <div className='main_ranking_comment_title_content'>
                    <label className='main_ranking_comment_title'>
                        댓글 랭킹
                    </label>
                </div>

                {commentInfo.map((info, index) => (
                    <div className='main_ranking_comment_info_content'>
                        <div className='main_ranking_comment_img_num_content'>
                            <label className='main_ranking_comment_img_num'>
                                {index + 1}
                            </label>
                        </div>
                        <div className='main_ranking_comment_img_content'>
                            <img
                                key={index}
                                src={info.img}
                                className='main_ranking_comment_img'
                            />
                        </div>
                        <div className='main_ranking_comment_img_name_content'>
                            <label className='main_ranking_comment_img_name'>
                                {info.name}
                                {/* 회곱차아니챠니탕회곱차아니챠니탕 */}
                            </label>
                        </div>
                        <div className='main_ranking_comment_img_count_container'>
                            <FaRegCommentDots className='main_ranking_comment_img_count_icon' />
                            <label className='main_ranking_comment_img_count'>
                                {info.count}
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Main_ranking;