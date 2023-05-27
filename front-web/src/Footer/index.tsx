import './styles.css';
import { ReactComponent as YouTubeIcon } from "./youtube.svg";
import { ReactComponent as LinkedinIcon } from "./linkedin.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";

function Footer() {
    return( 
        <footer className='main-footer'>
            <a href="https://github.com/cledilson-devcode">https://github.com/cledilson-devcode</a>
            <div className="footer-icons">
                <a href="#" target='_blank'> <YouTubeIcon/> </a>
                <a href="#" target='_blank'>
                    <LinkedinIcon/>
                </a>
                <a href="#" target='_blank'>
                    <InstagramIcon/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;