import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Google_callback = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추적
    const [error, setError] = useState(null); // 에러 상태 추적

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
                console.log('사용자 이름: ', userInfo.name)
                setIsLoading(false); // 데이터 로딩 완료 시 상태 변경
            })
            .catch((error) => {
                console.error('사용자 정보 요청 실패:', error);
                setError('사용자 정보 요청에 실패했습니다.'); // 에러 상태 처리
                setIsLoading(false); // 로딩 완료 상태
            });

            navigate('/'); // 토큰 처리 후 원하는 페이지로 이동
        } else {
            setIsLoading(false); // 액세스 토큰이 없으면 로딩 완료 처리
            setError('액세스 토큰이 없습니다.'); // 에러 처리
        }
    }, [navigate]);

    // return <div>Loading...</div>;
};

export default Google_callback;