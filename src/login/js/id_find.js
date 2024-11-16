import './../css/id_find.css';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Id_find = () => {
    const {api} = useContext(MyContext);

    return(
        <div className='id_find_container'>
            <div className='id_find_title_container'>
                <div className='id_find_title_content'>
                    아이디찾기
                </div>
            </div>
            <div className='id_find_title_serve_content'>
                아이디를 잊어버리셨나요?회원님의 성명과 전화번호를 입력하여 주세요.
            </div>
            <div className='id_find_name_container'>
                <div className='id_find_name_content'>
                    <div className='id_find_name'>
                        이름
                    </div>
                    <div className='id_find_name_input_content'>
                        <input className='id_find_name_input'></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Id_find;