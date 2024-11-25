import React, { useEffect } from 'react';

const Rendering_top = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // 바로 스크롤 위치를 최상단으로 이동
    }, []); // 컴포넌트 첫 렌더링 시 실행

    return null;
};

export default Rendering_top;
