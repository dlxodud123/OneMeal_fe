import './../css/main_form.css';
import Header from '../../common/header/js/header';
import Main_img from './main_img';
import Main_recent from './main_recent';
import Main_search from './main_search';
import Main_category from './main_category';
import Main_ranking from './main_ranking';
import Footer from '../../common/footer/js/footer';
import axios from 'axios';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';

const Main_from = () => {
    const {api} = useContext(MyContext);

    let [data, setData] = useState(null); // 데이터를 저장할 상태
    let [loading, setLoading] = useState(true); // 로딩 상태
    let [error, setError] = useState(null); // 에러 상태

    const username = 'dlxodud5080';

    const fetchData = async () => {

        console.log("시작");

        setLoading(true); // 로딩 시작
        try {
            const response = await axios.post(`${api}/member`, 
                { usename: username},
                { headers: { 'Content-Type': 'application/json' } }
            );

            // status 확인
            console.log("status Code : ", response.status);
            console.log("Status Text:", response.data);

            if (response.status === 200) {
                // 성공적인 요청인 경우 (status 200)
                // console.log(response.data.address);
                setData(response.data); // 서버에서 반환한 데이터 설정
            } else if (response.status === 401) {
                // 인증 실패 등의 상황 (status 401)
                setError("인증에 실패했습니다. 이메일과 비밀번호를 확인하세요.");
            } else {
                // 그 외의 에러
                throw new Error(`Error: ${response.status} : ${response.statusText}`);
            }
            
        } catch (error) {
            setError(error.message); // 에러 메시지 설정
        } finally {
            setLoading(false); // 로딩 종료
        }
    };


    return(
        <div className='main_form_container'>
            <Header></Header>
            <Main_img></Main_img>
            <Main_recent></Main_recent>
            <Main_search></Main_search>
            <Main_category></Main_category>
            <Main_ranking></Main_ranking>
            <button style={{width:"100px", height:"100px"}} onClick={() => fetchData()}>클릭</button>
            <Footer></Footer>
        </div>
    )
}

export default Main_from;