import './footer.css'
import fb from '../../assets/Facebook.png'
import ig from '../../assets/Instagram.png'
import tw from '../../assets/Twitter.png'
export default function Footer(){
    return(
        <footer>
            <hr />
            <div className="local-info">
                <div className="info">
                    <h5>LOCATION:</h5>
                    <p>Street ramdom 1234, City, State</p>
                </div>
                <div className="info">
                    <h5>PHONE:</h5>
                    <p>(999) 999-9999</p>
                </div>
                <div className="info">
                    <h5>AVAILABILITY:</h5>
                    <p>MONDAY - THURDAY: 9:00am - 6:00pm</p>
                    <p>FRIDAY - SATURDAY: 8:00am - 8:00pm</p>
                    <p>SUNDAY: CLOSED</p>
                </div>
            </div>
            <h5 className='socials-header'>LET'S CONNECT!</h5>
            <div className="socials">
                <a href="#"><img src={ig} alt="instagram logo" /></a>
                <a href="#"><img src={fb} alt="facebook logo" /></a>
                <a href="#"><img src={tw} alt="twitter logo" /></a>
            </div>
            <hr />
            <p className='copyright'>Copyright &copy; Restaurant 2024</p>
        </footer>
    )
}