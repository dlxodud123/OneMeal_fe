import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Naver_callback = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추적
    const [error, setError] = useState(null); // 에러 상태 추적

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');  // 네이버에서 받은 code
        const state = params.get('state');  // CSRF 방지용 state (선택사항)

        if (code) {
            // Authorization Code 받은 후 액세스 토큰 요청
            const clientId = '6ygsXgVhlIwzoMfZtVY7';  // 네이버 클라이언트 ID
            const clientSecret = 'vpuZ1mZp3e';  // 네이버 클라이언트 시크릿
            const redirectUri = 'http://localhost:3000/naver/callback';  // 리다이렉트 URI

            // 액세스 토큰을 요청할 URL
            const tokenUrl = 'https://cors-anywhere.herokuapp.com/https://nid.naver.com/oauth2.0/token';  // CORS 우회 URL 사용

            const tokenParams = new URLSearchParams({
                client_id: clientId,
                client_secret: clientSecret,
                code: code,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code',
            });

            // 액세스 토큰 요청
            fetch(`${tokenUrl}?${tokenParams.toString()}`, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    if (data.access_token) {
                        // 액세스 토큰을 사용해 사용자 정보 요청
                        fetch('https://openapi.naver.com/v1/nid/me', {
                            method: 'GET',
                            headers: {
                                Authorization: `Bearer ${data.access_token}`,
                            },
                        })
                            .then(response => response.json())
                            .then(userInfo => {
                                console.log('사용자 정보:', userInfo);
                                setIsLoading(false);
                                navigate('/');  // 사용자 정보 요청 후 페이지 이동
                            })
                            .catch(error => {
                                console.error('사용자 정보 요청 실패:', error);
                                setError('사용자 정보 요청에 실패했습니다.');
                                setIsLoading(false);
                            });
                    } else {
                        setError('액세스 토큰 요청에 실패했습니다.');
                        setIsLoading(false);
                    }
                })
                .catch(error => {
                    console.error('Access token 요청 실패:', error);
                    setError('Access token 요청에 실패했습니다.');
                    setIsLoading(false);
                });
        } else {
            setError('Authorization code가 없습니다.');
            setIsLoading(false);
        }
    }, [navigate]);

    // return <div>Loading...</div>;
}

export default Naver_callback;