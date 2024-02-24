import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'; 
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
 
 const footerData=[
    {
        title:'About Elearning',
        subTitleOne:'Future and Current Students',
        subTitleTwo:'Academic programs',
        subTitleFour:'Research'

    },
    {
        title:'Library',
        subTitleOne:'Recreation',
        subTitleTwo:'Varsity Sports',
        subTitleFour:'Alumni & Friends',
    },
    {
        title:'Resources for Current Student',
        subTitleOne:'Resources For Faculty & Staff',
        subTitleTwo:'Bookstore',
        subTitleFour:'Campus Map',

    },
    {
        title:'Careers@BU',
        subTitleOne:'Communications Office',
        subTitleTwo:'Give Now',
        subTitleFour:'Disclaimer'
    }
 ];


  return (
    <div className='main_footer'>
        <div className="container">
            <div className="row">
                {footerData.map((item)=>(
                    <div className="col" key={item.title}>
                        <p className="title">{item.title}</p>
                        <ul className='footer_ul'>
                            <li className="footer_li"><p>{item.subTitleOne}</p></li>
                            <li className="footer_li"><p>{item.subTitleTwo}</p></li>
                            {item.subTitleFour && <li className="footer_li"><p>{item.subTitleFour}</p></li>}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="section_b">
                <hr/>
                <div className="social_media">
                    <ul>
                        <li><Link to="#"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                        <li><Link to="#"><FontAwesomeIcon icon={faYoutube} /></Link></li>
                        <li><Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
