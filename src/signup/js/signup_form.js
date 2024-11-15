import './../css/signup_form.css';
import Header from '../../common/header/js/header';
import Footer from '../../common/footer/js/footer';
import { MyContext } from '../../App';
import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Signup_form = () => {
    const {api} = useContext(MyContext);

    // 생년월일 반복문
    const years = [];
    for (let year = 2024; year >= 1941; year--) {
        years.push(year);
    }
    const months = [];
    for (let month = 1; month <= 12; month++) {
        months.push(month);
    }
    const days = [];
    for (let day = 1; day <= 31; day++) {
        days.push(day);
    }
    // 뒤로가기 버튼
    const handleBack = () => {
        window.history.back();
    };

    // 아이디 중복확인
    let [idValue, setIdValue] = useState('');
    let [id, setId] = useState('');

    let [idCopyData, setIdCopyData] = useState(null); // 데이터를 저장할 상태
    let [idCopyLoading, setIdCopyLoading] = useState(true); // 로딩 상태
    let [idCopyError, setIdCopyError] = useState(null); // 에러 상태
    useEffect(() => {
        setId('');
    }, [idValue])
    const fetchIdCopy = async () => {
        if (idValue.length == 0) { alert("아이디를 입력해주세요."); setId(''); return; }
        if (idValue.length <= 5) { alert("아이디는 6자 이상이어야 합니다."); setId(''); return; }
        // alert("사용가능한 아이디입니다.");
        
        setIdCopyLoading(true); // 로딩 시작
        try {
            const response = await axios.get(`${api}/member/username/${idValue}`, {
                headers: {
                    'Content-Type': 'application/json', // 텍스트 형식으로 응답 받기
                }
            });
            
            // status 확인
            console.log("status Code : ", response.status);
            console.log("Status Text:", response.data);
            
            if (response.status === 200) {
                // 성공적인 요청인 경우 (status 200)
                setId(idValue); // 최종
                alert("사용가능한 아이디입니다.");
                setIdCopyData(response.data); // 서버에서 반환한 데이터 설정
            } else if (response.status === 401) {
                // 인증 실패 등의 상황 (status 401)
                setIdCopyError("인증에 실패했습니다. 이메일과 비밀번호를 확인하세요.");
            } else {
                // 그 외의 에러
                throw new Error(`Error: ${response.status} : ${response.statusText}`);
            }
            
        } catch (error) {
            setIdCopyError(error.message); // 에러 메시지 설정
        } finally {
            setIdCopyLoading(false); // 로딩 종료
        }
    }

    // 비밀번호 값
    let [password, setPassword] = useState('');
    useEffect(() => {
        console.log("비밀번호 : ", password);
    }, [password])

    // 비밀번호 확인 값
    let [passwordCheck, setPasswordCheck] = useState('');
    useEffect(() => {
        console.log("비밀번호 확인 : ", passwordCheck);
    }, [passwordCheck])

    // 성명 값
    let [name, setName] = useState('');
    useEffect(() => {
        console.log("성명 확인 : ", name);
    }, [name])

    // 휴대전화 값 및 focus
    let [firstPhone, setFirstPhone] = useState('');
    let [secondPhone, setSecondPhone] = useState('');
    let [thirdPhone, setThirdPhone] = useState('');
    let phoneSecondRef = useRef(null);
    let phoneThirdRef = useRef(null);
    let [phone, setPhone] = useState('');

    const isValidPhone = firstPhone && secondPhone.length >= 3 && thirdPhone.length == 4 && /^\d+$/.test(secondPhone) && /^\d+$/.test(thirdPhone); // 값이 모두 유효한지 확인
    const formattedPhone = isValidPhone ? `${firstPhone}-${secondPhone}-${thirdPhone}` : '';
    useEffect(() => {
        setPhone(formattedPhone);
    }, [formattedPhone])
    useEffect(() => {
        console.log("전화번호 : ", phone);
    }, [phone])

    // 연령제한 값
    let [ageLimit, setAgeLimit] = useState(false);
    useEffect(() => {
        if (ageLimit) {
            console.log("연령제한 동의");
        } else{
            console.log("연령제한 비동의")
        }
    }, [ageLimit])


    // 주소 값 및 우편번호 api 
    let [zonecode, setZonecode] = useState('');
    let [address, setAddress] = useState('');
    let [detailAddress, setDetailAddress] = useState('');

    const zonecodeRef = useRef(null);
    const addressRef = useRef(null);
    const openDaumPostcode = () => {
        new window.daum.Postcode({
            oncomplete: function (data) {
                const { zonecode, address, bname, buildingName } = data;
                
                if (zonecodeRef.current) {
                    zonecodeRef.current.value = zonecode;
                    setZonecode(zonecode);
                }

                const formattedAddress = `${address} ${bname ? `(${bname}` : ''}${bname && buildingName ? ', ' : ''}${buildingName ? buildingName : ''}${bname || buildingName ? ')' : ''}`;
                if (addressRef.current) {
                    addressRef.current.value = formattedAddress;
                    setAddress(formattedAddress);
                }
            },
        }).open();
    };

    const handleDetailAddressChange = (e) => {
        setDetailAddress(e.target.value);
    }
    useEffect(() => {
        console.log("우편번호 : ", zonecode)
        console.log("주소 : ", address)
        console.log("상세주소 : ", detailAddress);
    }, [zonecode, address, detailAddress])

    // 생년월일 값
    let [birthYear, setBirthYear] = useState('');
    let [birthMonth, setBirthMonth] = useState('');
    let [birthDay, setBirthDay] = useState('');
    let [birth, setBirth] = useState('');
    const isValidDate = birthYear && birthMonth && birthDay; // 값이 모두 유효한지 확인
    const date = isValidDate ? new Date(Date.UTC(birthYear, birthMonth - 1, birthDay)) : null;
    const formattedDate = date ? date.toISOString().split('T')[0] : '';
    useEffect(() => {
        setBirth(formattedDate);
    }, [formattedDate]);
    useEffect(() => {
        console.log("생년월일 : ", birth);
    }, [birth])

    // 성별 값
    let [gender, setGender] = useState('F');
    useEffect(() => {
        console.log("성별 : ", gender);
    }, [gender]);



    // 최종 회원가입
    const singupBtn = () => {
        if (id) {
            // alert("사용 가능한 아이디입니다.");
            if (password) {
                alert("비밀번호를 입력해주세요.")
            }
        }else{
            alert("아이디 중복확인을 해주세요.");
        }
    }

    return(
        <div className='signup_form_container'>
            <Header></Header>
            <body className='signup_form_content'>
                <div className='signup_form_title_content'>
                    <label className='signup_form_title'>회원가입</label>
                    <label className='signup_form_title_serve'>한끼식사 홈페이지에 오신 것을 환영합니다.</label>
                </div>
                <div className='signup_form_info_container'>
                    <div className='signup_form_default_info_container'>
                        <div className='signup_form_default_info_title_content'>
                            <label className='signup_form_default_info_title'>기본정보입력</label>
                        </div>
                        <tbody>
                            <tr className='signup_form_default_info_content'>
                                <th className='signup_form_default_info_subject_content'>
                                    <div className='signup_form_default_info_subject_icon'>
                                        <img src='https://2bob.co.kr/skin/nodskin_argio/images/icon_join_point.jpg'></img>
                                    </div>
                                    <div className='signup_form_default_info_subject'>
                                        아이디
                                    </div>
                                </th>
                                <td className='signup_form_default_info_id_input_container'>
                                    <div className='signup_form_default_info_id_input_content'>
                                        <input onChange={(e) => {setIdValue(e.target.value);}} className='signup_form_default_info_id_input' type='text' maxLength={20}></input>
                                    </div>
                                    <div onClick={fetchIdCopy} className='signup_form_default_info_id_input_copy_content'>
                                        중복확인
                                    </div>
                                    <div className='signup_form_default_info_id_input_explain_content'>
                                        6~20자의 문자를 입력해야 합니다.
                                    </div>
                                </td>
                            </tr>
                            <tr className='signup_form_default_info_content'>
                                <th className='signup_form_default_info_subject_content'>
                                    <div className='signup_form_default_info_subject_icon'>
                                        <img src='https://2bob.co.kr/skin/nodskin_argio/images/icon_join_point.jpg'></img>
                                    </div>
                                    <div className='signup_form_default_info_subject'>
                                        비밀번호
                                    </div>
                                </th>
                                <td className='signup_form_default_info_pwd_input_container'> 
                                    <div className='signup_form_default_info_pwd_input_content'>
                                        <input onChange={(e) => {setPassword(e.target.value);}} className='signup_form_default_info_pwd_input' type='password' maxLength={16}></input>
                                    </div>
                                    <div className='signup_form_default_info_pwd_input_explain_content'>
                                        <label className='signup_form_default_info_pwd_input_explain'>8~16자의 문자를 입력해야 합니다.</label>
                                    </div>
                                </td>
                            </tr>
                            <tr className='signup_form_default_info_content'>
                                <th className='signup_form_default_info_subject_content'>
                                    <div className='signup_form_default_info_subject_icon'>
                                        <img src='https://2bob.co.kr/skin/nodskin_argio/images/icon_join_point.jpg'></img>
                                    </div>
                                    <div className='signup_form_default_info_subject'>
                                        비밀번호 확인
                                    </div>
                                </th>
                                <td className='signup_form_default_info_pwd_check_input_container'> 
                                    <div className='signup_form_default_info_pwd_check_input_content'>
                                        <input onChange={(e) => {setPasswordCheck(e.target.value);}} className='signup_form_default_info_pwd_check_input' type='password' maxLength={16}></input>
                                    </div>
                                </td>
                            </tr>
                            <tr className='signup_form_default_info_content'>
                                <th className='signup_form_default_info_subject_content'>
                                    <div className='signup_form_default_info_subject_icon'>
                                        <img src='https://2bob.co.kr/skin/nodskin_argio/images/icon_join_point.jpg'></img>
                                    </div>
                                    <div className='signup_form_default_info_subject'>
                                        성명
                                    </div>
                                </th>
                                <td className='signup_form_default_info_name_input_container'> 
                                    <div className='signup_form_default_info_name_input_content'>
                                        <input onChange={(e) => {setName(e.target.value);}} className='signup_form_default_info_name_input' type='text' maxLength={10}></input>
                                    </div>
                                    <div className='signup_form_default_info_name_input_explain_content'>
                                        <label className='signup_form_default_info_name_input_explain'>한글과 영문만 입력 가능합니다.</label>
                                    </div>
                                </td>
                            </tr>
                            <tr className='signup_form_default_info_content'>
                                <th className='signup_form_default_info_subject_content'>
                                    <div className='signup_form_default_info_subject_icon'>
                                        <img src='https://2bob.co.kr/skin/nodskin_argio/images/icon_join_point.jpg'></img>
                                    </div>
                                    <div className='signup_form_default_info_subject'>
                                        휴대전화
                                    </div>
                                </th>
                                <td className='signup_form_default_info_phone_input_container'> 
                                    <select onChange={(e) => {setFirstPhone(e.target.value); if (phoneSecondRef.current){phoneSecondRef.current.focus()} }} className='signup_form_default_info_phone_first_input_content'>
                                        <option value="">선택</option>
                                        <option value="010">010</option>
                                        <option value="011">011</option>
                                        <option value="016">016</option>
                                        <option value="017">017</option>
                                        <option value="017">018</option>
                                        <option value="017">019</option>
                                    </select>
                                    <div className='signup_form_default_info_phone_input_blank_content'>
                                        <label className='signup_form_default_info_phone_input_blank'>-</label>
                                    </div>
                                    <input onChange={(e) => {setSecondPhone(e.target.value); if(e.target.value.length === 4){ if(phoneThirdRef.current){phoneThirdRef.current.focus()} }}} ref={phoneSecondRef} className='signup_form_default_info_phone_second_input' maxLength={4} type='text' ></input>
                                    <div className='signup_form_default_info_phone_input_blank_content'>
                                        <label className='signup_form_default_info_phone_input_blank'>-</label>
                                    </div>
                                    <input onChange={(e) => {setThirdPhone(e.target.value); }} ref={phoneThirdRef} className='signup_form_default_info_phone_third_input' maxLength={4} type='text' ></input>
                                </td>
                            </tr>
                        </tbody>
                    </div>

                    <div className='signup_form_age_info_container'>
                        <div className='signup_form_age_info_title_content'>
                            <label className='signup_form_age_info_title'>연령 제한 동의</label>
                        </div>
                        <div className='signup_form_age_info_agree_container'>
                            <div className='signup_form_age_info_agree_check_content'>
                                <input checked={ageLimit} onChange={(e) => {setAgeLimit(e.target.checked);}} type='checkbox'></input>
                            </div>
                            <div>
                                <label className='signup_form_age_info_agree'>본인은 만 14세 이상입니다.</label>
                            </div>
                        </div>
                    </div>

                    <div className='signup_form_select_info_container'> 
                        <div className='signup_form_select_info_title_content'>
                            <label className='signup_form_select_info_title'>선택정보입력</label>
                        </div>
                        <div className='signup_form_select_info_address_container'>
                            <div className='signup_form_select_info_address_subject_content'>
                                주소
                            </div>
                            <div className='signup_form_select_info_address_content'>
                                <div className='signup_form_select_info_address_btn_content'>
                                    <input readOnly ref={zonecodeRef} className='signup_form_select_info_address_zonecode'></input>
                                    <div onClick={openDaumPostcode} className='singup_form_select_info_address_btn'>
                                        우편번호
                                    </div>
                                </div>
                                <input readOnly ref={addressRef} className='signup_form_select_info_address'></input>
                                <input onChange={handleDetailAddressChange} className='signup_form_select_info_detail_address'></input>
                            </div>
                        </div>

                        <div className='signup_form_select_info_birth_container'>
                            <div className='signup_form_select_info_birth_subject_content'>
                                생년월일
                            </div>
                            <div className='signup_form_select_info_birth_content'>
                                <div style={{display:"flex"}}>
                                    <select onChange={(e) => {setBirthYear(e.target.value);}} className='signup_form_select_info_birth'>
                                        <option value=""></option>
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                    <div className='signup_form_select_info_birth_serve'>
                                        년
                                    </div>
                                </div>
                                <div style={{display:"flex"}}>
                                    <select onChange={(e) => {setBirthMonth(e.target.value);}} className='signup_form_select_info_birth'>
                                        <option value=""></option>
                                        {months.map((month) => (
                                            <option key={month} value={month}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                    <div className='signup_form_select_info_birth_serve'>
                                        월
                                    </div>
                                </div>
                                <div style={{display:"flex"}}>
                                    <select onChange={(e) => {setBirthDay(e.target.value);}} className='signup_form_select_info_birth'>
                                        <option value=""></option>
                                        {days.map((day) => (
                                            <option key={day} value={day}>
                                                {day}
                                            </option>
                                        ))}
                                    </select>
                                    <div className='signup_form_select_info_birth_serve'>
                                        일
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='signup_form_select_info_gender_container'>
                            <div className='signup_form_select_info_gender_subject_content'>
                                성별
                            </div>   
                            <div className='signup_form_select_info_gender_content'>
                                <div style={{display:"flex"}}>
                                    <div className='signup_form_select_info_gender_choice_content'>
                                        <input onChange={(e) => {setGender(e.target.value);}} checked={gender === 'F'} type='radio' name='gender' value="F"  />
                                    </div>
                                    <div className='signup_form_select_info_gender_choice_serve'>
                                        여성
                                    </div>
                                </div>
                                <div style={{display:"flex"}}>
                                    <div className='signup_form_select_info_gender_choice_content'>
                                        <input onChange={(e) => {setGender(e.target.value);}} checked={gender === 'M'} type='radio' name='gender' value="M" />
                                    </div>
                                    <div className='signup_form_select_info_gender_choice_serve'>
                                        남성
                                    </div>
                                </div>  
                            </div>             
                        </div>
                    </div>
                    
                    <div className='signup_form_btn_container'>
                        <div onClick={handleBack} className='signup_from_back_btn'>
                            뒤로
                        </div>
                        <div className='signup_form_btn_gap'></div>
                        <div onClick={singupBtn} className='signup_form_btn'>
                            회원가입
                        </div>
                    </div>
                </div>
            </body>
            <Footer></Footer>
        </div>
    )
}

export default Signup_form;