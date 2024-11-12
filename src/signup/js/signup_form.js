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
                        <tbody className='signup_form_default_info_content'>
                            <tr className='signup_form_default_info_id_content'>
                                <th className='signup_form_default_info_id_title_content'>
                                    <div className='signup_form_default_info_id_title_icon'>
                                        <img src='https://2bob.co.kr/skin/nodskin_argio/images/icon_join_point.jpg'></img>
                                    </div>
                                    <div className='signup_form_default_info_id_title'>
                                        아이디
                                    </div>
                                </th>
                                <td className='signup_form_default_info_id_input_content'>
                                    <input className='signup_form_default_info_id_input' type='text'></input>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    asdf
                                </th>
                                <td>
                                    zxcv
                                </td>
                            </tr>
                        </tbody>
                    </div>
                    <div className='signup_form_select_info_container'> 

                    </div>
                </div>
            </body>
            <Footer></Footer>
        </div>
    )
}

export default Signup_form;