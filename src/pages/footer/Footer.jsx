import './Footer.scss';
import { TiSocialFacebook,TiSocialInstagram,TiSocialSkype} from 'react-icons/ti';
import { BsGithub,BsYoutube,BsTwitter,BsWhatsapp } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { SiGmail } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa';


const Footer = ()=>{
    return(
        <div className="containerFooter">
            <div className="icons">
            <TiSocialFacebook/>
            <TiSocialSkype/>
            <TiSocialInstagram/>
            <MdOutlineAlternateEmail/>
            <SiGmail/>
            <BsGithub/>
            <BsYoutube/>
            <BsTwitter/>
            <TiSocialInstagram/>
            <BsWhatsapp/>
            <FaTelegramPlane/>
            </div>
        </div>
    )
}
export default Footer;