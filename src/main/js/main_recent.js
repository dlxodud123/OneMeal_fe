import './../css/main_recent.css';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Main_recent = () => {
    const {api} = useContext(MyContext);

    return(
        <div className='main_recent_container'>
            <div className='main_recent_title_content'>
                <label className='main_recent_title'>최신 레시피</label>
            </div>
            <div className='main_recent_img_content'>

            </div>
        </div>
    )   
}

export default Main_recent