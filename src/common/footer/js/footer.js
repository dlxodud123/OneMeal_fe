import './../css/footer.css';

const Footer = () => {

    return(
        <footer className='footer_container'>
            <div className='footer_content'>
                <div className='footer_logo_content'>
                    <img src={`${process.env.PUBLIC_URL}/img/logo/logo.png`} className="footer_logo" ></img>
                </div>
                <div>
                    <div className='footer_address_container'>
                        <div className='footer_address_blog_content'>
                            <label className='footer_address_blog'>Blog</label>
                        </div>
                        <div className='blog_github_split_content'>
                            <label className='blog_github_split'>|</label>
                        </div>
                        <label className='footer_address_github'>Github</label>
                    </div>
                    <label className='footer_info'>
                        회사명 : 한끼식사(서울시 해등로 242 - 11) &nbsp; 대표자 : 이태영 &nbsp; 개인정보관리책임자 : 오혜준
                        <br></br>
                        사업자번호 : 123-12-12345[사업자정보확인] &nbsp; 전화 : 02-3493-3395 &nbsp; 팩스 : 12-123-12345 &nbsp; 메일 : xodud5080@naver.com
                        <br></br>
                        copyright 2024. 한끼식사. All Rights Reserved.
                    </label>
                </div>
            </div>
        </footer>
    )
}

export default Footer;