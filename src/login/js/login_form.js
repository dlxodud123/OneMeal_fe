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
    const clientId = '357346370305-im49i267ggf9efg53vn0ndk11j5ud7m2.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:3000/callback'; 

    const handleGoogleLogin = () => {
        const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=email%20profile&include_granted_scopes=true&state=state_parameter_passthrough_value`;
        window.location.href = googleAuthUrl; // Google 로그인 페이지로 리다이렉트
    };

    useEffect(() => {
        const hash = window.location.hash;
        const params = new URLSearchParams(hash.substring(1)); // # 뒤의 값을 추출
        const accessToken = params.get('access_token'); // 토큰을 추출

        if (accessToken) {
            console.log('Access Token:', accessToken);

            // 사용자 정보를 요청하는 API 호출
            fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('네트워크 응답이 좋지 않습니다.');
                }
                return response.json(); // JSON 형태로 응답 변환
            })
            .then((userInfo) => {
                console.log('사용자 정보: ', userInfo);
                console.log('사용자 이메일: ', userInfo.email);
                console.log('사용자 이름: ', userInfo.name);
                // 사용자 정보를 상태에 저장하거나 처리
                setGoogleLogin(true); // 구글 로그인 확인
                navigate('/'); // 토큰 처리 후 원하는 페이지로 이동
            })
            .catch((error) => {
                console.error('사용자 정보 요청 실패:', error);
            });
        }
    }, [navigate, setGoogleLogin]);

    // 카카오톡 로그인
    useEffect(() => {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init('747fd8f5dc40c3ca09b3c944d4e795bd');  // 발급받은 JavaScript 키
        }
    }, []);
    const handleKakaoLogin = () => {
        window.Kakao.Auth.login({
            success: function (authObj) {
            console.log('카카오 로그인 성공', authObj);

            window.Kakao.API.request({
                url: '/v2/user/me',
                success: function (res) {
                console.log('사용자 정보: ', res);
                // 사용자 정보를 상태에 저장하거나 처리
                const kakaoAccount = res.kakao_account;

                // 이메일 정보 확인 및 콘솔 출력
                if (kakaoAccount.has_email) {
                    console.log('사용자 이메일: ', kakaoAccount.email); 
                    console.log('사용자 이름: ', kakaoAccount.profile.nickname);
                    setKakaoLogin(true); // 카카오톡 로그인 확인
                    navigate("/")
                } else {
                    console.log('이메일 제공에 동의하지 않음');
                }
                },
                fail: function (error) {
                console.log('사용자 정보 요청 실패', error);
                },
            });
            },
            fail: function (err) {
            console.log('카카오 로그인 실패', err);
            },
        });
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
                                        <img src={`${process.env.PUBLIC_URL}/img/login/image.png`} className='login_form_all_sns_icon'></img>
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