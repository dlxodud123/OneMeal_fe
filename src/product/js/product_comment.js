import './../css/product_comment.css';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import axios from 'axios';
import { IoPersonSharp } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Product_comment = ({ id }) => {
    const {api} = useContext(MyContext);
    const navigate = useNavigate();

    // let [commentInfo, setCommentInfo] = useState();

    let commentInfoTest = [
        { username: "오혜준", comment: "이 레시피대로 해보니까 너무 맛있어요. 감사합니다!" },
        { username: "김민수", comment: "정말 맛있게 잘 만들어 먹었습니다. 추천해요!" },
        { username: "박서연", comment: "간단하고 쉽게 따라 할 수 있어서 좋아요!" },
        { username: "최지훈", comment: "재료도 간단하고 설명도 자세해서 좋았습니다." },
        { username: "이지현", comment: "이 레시피 덕분에 요리 실력이 늘었어요!" },
        { username: "김하영", comment: "아이들도 정말 맛있게 먹었답니다. 최고!" },
        { username: "한서준", comment: "덕분에 특별한 저녁 시간을 보낼 수 있었어요." },
        { username: "유나경", comment: "이렇게 맛있는 요리는 처음이에요! 감사합니다." },
        { username: "문태윤", comment: "간단한데 맛은 정말 최고네요. 자주 해먹을게요!" },
        { username: "서윤아", comment: "친구들에게도 추천하고 싶은 레시피입니다." },
        { username: "정현우", comment: "요리를 처음 해봤는데 정말 쉽고 맛있었어요!" },
    ];
    
    const [commentsToShow, setCommentsToShow] = useState(5); 
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        // 더미 데이터에서 초기 댓글을 로드하는 예시
        setAllComments(commentInfoTest);
    }, []);

    // 더보기 버튼 클릭 시 댓글 추가 로드
    const loadMoreComments = () => {
        setCommentsToShow((prev) => prev + 5); // 5개씩 추가
    };

    useEffect(() => {
        const axiosProductInfo = async () => {
            console.log("axios 실행");
            try {
                const response = await axios.get(`${api}/comment/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.status === 200) {
                    console.log("status Code : ", response.status);
                    console.log("Status Text:", response.data);
                    // setCommentInfo(response.data);
                }     
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        axiosProductInfo();
    }, [])

    let [commentValue, setCommentValue] = useState('');

    const commentBtn = async () => {
        if (commentValue === '') { alert("댓글을 작성해주세요."); return; }
        console.log("axios 실행");
        console.log("댓글 : ", commentValue);
        setCommentValue('');
        alert("댓글이 등록되었습니다.");
        navigate(`/product/${id}`);
        try {
            const response = await axios.get(`${api}/comment/input/${id}`, {
                params: {
                    comment: commentValue,
                },
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.status === 200) {
                console.log("status Code : ", response.status);
                console.log("Status Text:", response.data);
                // setCommentInfo(response.data);
            }       
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    }

    return(
        <div className='product_comment_container'>
            <div className='product_comment_title_content'>
                한줄댓글
            </div>
            <div className='product_comment_input_content'>
                <input value={commentValue} onChange={(e) => setCommentValue(e.target.value)} className='product_comment_input' maxLength={40}></input>
                <div onClick={() => {commentBtn()}} className='product_comment_btn'>
                    댓글남기기
                </div>
            </div>
            {allComments.slice(0, commentsToShow).map((item, index) => (
                <div className='product_comment_content'>
                    <div className='product_comment_icon_container'>
                        <div className='product_comment_icon_content'>
                            <IoPersonSharp className='product_comment_icon'/>
                        </div>
                    </div>
                    <div className='product_comment_content_content'>
                        <div className='product_comment_name'>
                            {item.username}
                        </div>
                        <div className='product_comment'>
                            {item.comment}
                        </div>
                    </div>
                </div>
            ))}
            {commentsToShow < allComments.length ? 
                <div className='product_comment_more_btn_content'>
                    <div className='product_comment_more_btn' onClick={loadMoreComments}>
                        더보기
                    </div>
                </div>
            : 
                <div className='product_comment_more_btn_content'>
                </div>
            }
        </div>
    )
}

export default Product_comment;