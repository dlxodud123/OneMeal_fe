import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Kakao_callback = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추적
    const [error, setError] = useState(null); // 에러 상태 추적

    useEffect(() => {
        // 로그인 후 /kakao/callback에서 인증 정보를 처리합니다
        if (window.Kakao.Auth.getAccessToken()) {
            // 로그인 성공 시 액세스 토큰을 가져옵니다
            const accessToken = window.Kakao.Auth.getAccessToken();
            console.log('Access Token:', accessToken);

            // 사용자 정보를 요청합니다
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: function (res) {
                    console.log('사용자 정보:', res);
                    const kakaoAccount = res.kakao_account;

                    if (kakaoAccount.has_email) {
                        console.log('사용자 이메일:', kakaoAccount.email);
                        console.log('사용자 이름:', kakaoAccount.profile.nickname);
                        setIsLoading(false); // 로딩완료
                        // 로그인 성공 후 처리할 작업 추가 (예: 상태 저장, 리다이렉트 등)
                        navigate('/');
                    } else {
                        console.log('이메일 제공에 동의하지 않음');
                        setIsLoading(false); // 로딩 완료
                    }
                },
                fail: function (error) {
                    console.error('사용자 정보 요청 실패:', error);
                    setError('사용자 정보 요청에 실패했습니다.');
                    setIsLoading(false); // 로딩 완료
                },
            });
        } else {
            console.error('액세스 토큰이 없습니다.');
            setError('액세스 토큰이 없습니다.');
            setIsLoading(false); // 로딩 완료
        }
    }, [navigate]);

    // return <div>Loading...</div>;
};

export default Kakao_callback;