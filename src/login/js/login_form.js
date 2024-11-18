import './../css/login_form.css';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import Header from '../../common/header/js/header';
import Footer from '../../common/footer/js/footer';
import axios from 'axios';

const Login_form = () => {
    const {api} = useContext(MyContext);
    const navigate = useNavigate();

    let [id, setId] = useState('');
    let [password, setPassword] = useState('');

    useEffect(() => {
        console.log(password)
    }, [password])

    const handleIdFindWindow = () => {
        window.open(
            `/idfind`,
            "_blank",
            "width=550,height=370,top=200,left=300"
        );
    }

    const handlePwdFindWindow = () => {
        window.open(
            `/pwdfind`,
            "_blank",
            "width=550,height=370,top=200,left=300"
        );
    }

    const handleSignupNavigate = () => {
        navigate('/signup')
    }

    const loginBtn = async () => {
        const data = {
            username : `${id}`,
            password : `${password}`,
        };
        try {
            // Axios POST 요청
            const response = await axios.post(`${api}/member/login`,
                data, 
                {headers: {
                    'Content-Type': 'application/json' // 요청 헤더 설정
                }}
            );
            if (response.status === 200) {
                // 응답 성공 시
                console.log(response.status); // status 확인
                console.log(response.data); // 응답 데이터 확인
                console.log("토큰 값 : ", ); // 토큰값
                alert("로그인이 완료되었습니다.");
                navigate('/')
            }
        } catch (error) {
            // 응답 실패 또는 네트워크 오류 시
            if (error.response) {
                // 서버가 응답했으나 상태 코드가 2xx가 아님
                console.error('서버 응답 오류:', error.response.status);
                console.error('응답 메시지:', error.response.data);
                alert('회원가입 실패: 서버 응답 오류');
            } else if (error.request) {
                // 요청이 서버에 도달하지 못한 경우
                console.error('요청 실패: 서버가 응답하지 않음', error.request);
                alert('회원가입 실패: 서버가 응답하지 않습니다.');
            } else {
                // 요청 설정 중 문제 발생
                console.error('요청 설정 오류:', error.message);
                alert('회원가입 실패: 요청 설정 중 문제가 발생했습니다.');
            }
        }
    }

    let [googleLogin, setGoogleLogin] = useState(false);
    let [kakaoLogin, setKakaoLogin] = useState(false);
    let [naverLogin, setNaverLogin] = useState(false);

    const clientId = '597673576446-t8vtu1oo6bge8i7on5a502m59ugvrs7b.apps.googleusercontent.com'; // 클라이언트 id 기입
    const redirectUri = `${api}/oauth/login/google`;
    
    const handleGoogleLogin = () => {
        const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=email%20profile&include_granted_scopes=true&state=state_parameter_passthrough_value`;
        window.location.href = googleAuthUrl; // Google 로그인 페이지로 리다이렉트
    };// 구글 로그인
        

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
                    <label className='login_form_title'>로그인</label>
                    <label className='login_form_title_serve'>한끼식사 홈페이지에 오신 것을 환영합니다.</label>
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
                                        <input onChange={(e) => {setId(e.target.value)}} type='text' className='login_form_default_input_id'></input>
                                    </div>
                                    <div className='login_form_default_input_pwd_content'>
                                        <label className='login_form_default_input_pwd_title'>비밀번호</label>
                                        <input onChange={(e) => {setPassword(e.target.value)}} type='text' className='login_form_default_input_pwd'></input>
                                    </div>
                                </div>
                                <div onClick={loginBtn} className='login_form_defualt_btn_content'>
                                    <label className='login_form_default_btn'>로그인</label>
                                </div>  
                            </div>
                            <div className='login_form_default_find_content'>
                                <div className='login_form_default_find_id_content'>
                                    <label onClick={handleIdFindWindow} className='login_form_default_find_id'>아이디 찾기</label>
                                </div>
                                <div className='login_form_default_pipe_content'>
                                    <label className='login_form_default_pipe'>|</label>
                                </div>
                                <div className='login_form_default_find_pwd_content'>
                                    <label onClick={handlePwdFindWindow} className='login_form_default_find_pwd'>비밀번호 찾기</label>
                                </div>
                                <div className='login_form_default_pipe_content'>
                                    <label className='login_form_default_pipe'>|</label>
                                </div>
                                <div className='login_form_default_find_signup_content'>
                                    <label onClick={handleSignupNavigate} className='login_form_default_find_signup'>회원가입</label>
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