import axios from 'axios';
import './test.css';
import { useState } from 'react';

const Test = () => {

    const openSmallWindow = (id) => {
        window.open(
            `/idfind/${id}`, // 새 창에서 열릴 경로
            "_blank",
            "width=400,height=300,top=300,left=400"
        );
    };
    return(
        <div>
            <button onClick={() => openSmallWindow('id')}>열기</button>
        </div>
    )
}

export default Test;