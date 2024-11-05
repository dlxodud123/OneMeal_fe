import './../css/main_form.css';
import Header from '../../common/header/js/header';
import Footer from '../../common/footer/js/footer';
import Main_info from './main_info';

const Main_from = () => {

    return(
        <div className='main_form_container'>
            <Header></Header>
            <Main_info></Main_info>
            <Footer></Footer>
        </div>
    )
}

export default Main_from;