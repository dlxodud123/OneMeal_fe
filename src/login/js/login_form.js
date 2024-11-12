import './../css/login_form.css';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import Header from '../../common/header/js/header';
import Footer from '../../common/footer/js/footer';

const Login_form = () => {
    const {api} = useContext(MyContext);
    const navigate = useNavigate();

    let [googleLogin, setGoogleLogin] = useState(false);
    let [kakaoLogin, setKakaoLogin] = useState(false);

    // 구글 로그인
    const clientId = '597673576446-t8vtu1oo6bge8i7on5a502m59ugvrs7b.apps.googleusercontent.com'; // 클라이언트 id 기입
    const redirectUri = 'http://localhost:3000/google/callback';
    
    const handleGoogleLogin = () => {
        const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=email%20profile&include_granted_scopes=true&state=state_parameter_passthrough_value`;
        window.location.href = googleAuthUrl; // Google 로그인 페이지로 리다이렉트
    };

    // 카카오톡 로그인
    useEffect(() => {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init('747fd8f5dc40c3ca09b3c944d4e795bd'); // 발급받은 JavaScript 키
        }
    }, []);
    const handleKakaoLogin = () => {
        window.Kakao.Auth.login({
            success: function (authObj) {
                console.log('카카오 로그인 성공', authObj);
                navigate('/kakao/callback');
            },
            fail: function (err) {
                console.log('카카오 로그인 실패', err);
            },
        });
    };

    // 네이버 로그인
    const handleNaverLogin = () => {
        const clientId = '6ygsXgVhlIwzoMfZtVY7';  // 네이버 클라이언트 ID
        const redirectUri = 'http://localhost:3000/naver/callback';  // 리다이렉트 URI
        const state = 'random_state_value';  // CSRF 방지용 랜덤값
        const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;
        
        window.location.href = naverAuthUrl;
    };
    
    return(
        <div className='login_form_container'>
            <Header></Header>
            <body className='login_form_content'>
                <div className='login_form_title_content'>
                    <label className='login_title'>로그인</label>
                    <label className='login_title_serve'>한끼식사 홈페이지에 오신 것을 환영합니다.</label>
                </div>
                <div className='login_form_default_sns_container'>
                    <div className='login_form_default_container'>
                        <div className='login_form_default_content'>
                            <div className='login_form_default_title_content'>
                                <label className='login_form_default_title'>로그인</label>
                            </div>
                            <div className='login_form_input_container'>
                                <div className='login_form_input_content'>
                                    <div className='login_form_default_input_id_content'>
                                        <label className='login_form_default_input_id_title'>아이디</label>
                                        <input type='text' className='login_form_default_input_id'></input>
                                    </div>
                                    <div className='login_form_default_input_pwd_content'>
                                        <label className='login_form_default_input_pwd_title'>비밀번호</label>
                                        <input type='text' className='login_form_default_input_pwd'></input>
                                    </div>
                                </div>
                                <div className='login_form_defualt_btn_content'>
                                    <label className='login_form_default_btn'>로그인</label>
                                </div>  
                            </div>
                            <div className='login_form_default_find_content'>
                                <div className='login_form_default_find_id_content'>
                                    <label className='login_form_default_find_id'>아이디 찾기</label>
                                </div>
                                <div className='login_form_default_pipe_content'>
                                    <label className='login_form_default_pipe'>|</label>
                                </div>
                                <div className='login_form_default_find_pwd_content'>
                                    <label className='login_form_default_find_pwd'>비밀번호 찾기</label>
                                </div>
                                <div className='login_form_default_pipe_content'>
                                    <label className='login_form_default_pipe'>|</label>
                                </div>
                                <div className='login_form_default_find_signup_content'>
                                    <label className='login_form_default_find_signup'>회원가입</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='login_form_sns_container'>
                        <div className='login_form_sns_content'>
                            <div className='login_form_sns_title_container'>
                                <div className='login_form_sns_title_content'>
                                    <label className='login_form_sns_title'>소셜 로그인</label>
                                </div>
                            </div>
                            <div className='login_form_sns_icon_container'>
                                <div className='login_form_sns_icon_content'>
                                    <div className='login_form_sns_all_icon_content'>
                                        <img onClick={handleGoogleLogin} src={`${process.env.PUBLIC_URL}/img/login/google-logo.png`} className='login_form_all_sns_icon'></img>
                                    </div>
                                    <div className='login_form_sns_all_icon_content'>
                                        <img onClick={handleKakaoLogin} src={`${process.env.PUBLIC_URL}/img/login/kakao-logo.png`} className='login_form_all_sns_icon'></img>
                                    </div>
                                    <div className='login_form_sns_all_icon_content'>
                                        <img onClick={handleNaverLogin} src={`${process.env.PUBLIC_URL}/img/login/image.png`} className='login_form_all_sns_icon'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            <Footer></Footer>
        </div>
    )
}

export default Login_form;