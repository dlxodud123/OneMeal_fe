import './../css/signup_form.css';
import Header from '../../common/header/js/header';
import Footer from '../../common/footer/js/footer';

const Signup_form = () => {

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
                                        <input className='signup_form_default_info_id_input' type='text'></input>
                                    </div>
                                    <div className='signup_form_default_info_id_input_copy_content'>
                                        <label className='signup_form_default_info_id_input_copy'>중복확인</label>
                                    </div>
                                    <div className='signup_form_default_info_id_input_explain_content'>
                                        <label className='signup_form_default_info_id_input_explain'>공백없는 6~12자의 문자를 입력해야 합니다.</label>
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
                                        <input className='signup_form_default_info_pwd_input' type='text'></input>
                                    </div>
                                    <div className='signup_form_default_info_pwd_input_explain_content'>
                                        <label className='signup_form_default_info_pwd_input_explain'>공백없는 8~14자의 문자를 입력해야 합니다.</label>
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
                                        <input className='signup_form_default_info_pwd_check_input' type='text'></input>
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
                                        <input className='signup_form_default_info_name_input' type='text'></input>
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
                                    <select className='signup_form_default_info_phone_first_input_content'>
                                        <option value>선택</option>
                                        <option value="010">010</option>
                                        <option value="011">011</option>
                                        <option value="016">016</option>
                                        <option value="017">017</option>
                                    </select>
                                    <div className='signup_form_default_info_phone_input_blank_content'>
                                        <label className='signup_form_default_info_phone_input_blank'>-</label>
                                    </div>
                                    <input className='signup_form_default_info_phone_second_input' maxLength={4} type='text' ></input>
                                    <div className='signup_form_default_info_phone_input_blank_content'>
                                        <label className='signup_form_default_info_phone_input_blank'>-</label>
                                    </div>
                                    <input className='signup_form_default_info_phone_third_input' maxLength={4} type='text' ></input>
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
                                <input type='checkbox'></input>
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
                                asdf
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            <Footer></Footer>
        </div>
    )
}

export default Signup_form;