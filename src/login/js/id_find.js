import './../css/id_find.css';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import axios from 'axios';

const Id_find = () => {
    const {api} = useContext(MyContext);

    let [name, setName] = useState('');
    let [phone, setPhone] = useState('');
    let [findIdBtn, setFindIdBtn] = useState(false);
    let [id, setId] = useState('xodud5080');
    
    const hadnleIdFindBtnChange = async () => {
        if (name === '') {alert("이름을 입력해주세요"); setFindIdBtn(false); return;}
        if (phone === '') {alert("전화번호를 입력해주세요"); setFindIdBtn(false); return;}
        const data = {
            name : `${name}`,
            phoneNumber : `${phone}`,
        };
        try {
            setFindIdBtn(true);
            const response = await axios.post(`${api}/member/findid/`,
                data, 
                {headers: {
                    'Content-Type': 'application/json' // 요청 헤더 설정
                }}
            );
            
            if (response.status === 200) {
                // 응답 성공 시
                setId("");
                // setFindIdBtn(true);
                console.log(response.status); // status 확인
                console.log(response.data); // 응답 데이터 확인
            }
        } catch (error) {
            // 응답 실패 또는 네트워크 오류 시
            if (error.response) {
                // 서버가 응답했으나 상태 코드가 2xx가 아님
                console.error('서버 응답 오류:', error.response.status);
                console.error('응답 메시지:', error.response.data);
            } else if (error.request) {
                // 요청이 서버에 도달하지 못한 경우
                console.error('요청 실패: 서버가 응답하지 않음', error.request);
            } else {
                // 요청 설정 중 문제 발생
                console.error('요청 설정 오류:', error.message);
            }
        }
    }

    const handleClose = () => {
        window.close();
    }

    return(
        <div className='id_find_container'>
            <div className='id_find_title_container'>
                <div className='id_find_title_content'>
                    아이디찾기
                </div>
            </div>
            {
                findIdBtn ? 
                    id === '' ? 
                    <>
                        <div className='id_find_fail_success_container'>
                            <label style={{color:"#003366", fontWeight:"bold"}}>{name}</label>님의 회원정보가 없습니다.
                        </div>
                        <div className='id_find_ok_container'>
                            <div onClick={handleClose} className='id_find_ok'>
                                확인
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className='id_find_fail_success_container'>
                            <label style={{color:"#003366", fontWeight:"bold"}}>{name}</label>님의 아이디는&nbsp;<label style={{color:"#003366", fontWeight:"bold"}}>{id}</label>&nbsp;입니다.
                        </div>
                        <div className='id_find_ok_container'>
                            <div onClick={handleClose} className='id_find_ok'>
                                확인
                            </div>
                        </div>
                    </>
                :
                <>
                    <div className='id_find_title_serve_content'>
                        아이디를 잊어버리셨나요?회원님의 성명과 전화번호를 입력하여 주세요.
                    </div>
                    <div className='id_find_content'>
                        <div className='id_find_subject_content'>
                            <div className='id_find_subject'>
                                이름
                            </div>
                            <div className='id_find_input_content'>
                                <input onChange={(e) => {setName(e.target.value)}} className='id_find_input'></input>
                            </div>
                        </div>
                        <div className='id_find_subject_content'>
                            <div className='id_find_subject'>
                                전화번호
                            </div>
                            <div className='id_find_input_content'>
                                <input onChange={(e) => {setPhone(e.target.value)}} className='id_find_input'></input>
                            </div>
                        </div>
                    </div>
                    <div onClick={hadnleIdFindBtnChange} className='id_find_btn_container'>
                        <div className='id_find_btn'>확인</div>
                    </div>
                </>
            }
        </div>
    )
}

export default Id_find;