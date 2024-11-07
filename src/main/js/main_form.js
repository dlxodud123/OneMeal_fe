import './../css/main_form.css';
import Header from '../../common/header/js/header';
import Main_img from './main_img';
import Main_info from './main_info';
import Footer from '../../common/footer/js/footer';

const Main_from = () => {

    return(
        <div className='main_form_container'>
            <Header></Header>
            <Main_img></Main_img>
            
            <Main_info></Main_info>
            <Footer></Footer>
        </div>
    )
}

export default Main_from;