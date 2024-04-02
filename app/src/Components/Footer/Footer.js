import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaRegLifeRing } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer id="footer">
            <section className="section bg-white shadow-md pt-4 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                            <div className="featured-box text-center">
                                <div className="featured-box-icon"> <FaLock /> </div>
                                <h4>100% Secure Payments</h4>
                                <p>Moving your card details to a much more secured place.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="featured-box text-center">
                                <div className="featured-box-icon"> <FaThumbsUp /> </div>
                                <h4>Trust pay</h4>
                                <p>100% Payment Protection. Easy Return Policy.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="featured-box text-center">
                                <div className="featured-box-icon"> <FaBullhorn /> </div>
                                <h4>Refer & Earn</h4>
                                <p>Invite a friend to sign up and earn up to $100.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="featured-box text-center">
                                <div className="featured-box-icon"> <FaRegLifeRing /> </div>
                                <h4>24X7 Support</h4>
                                <p>We're here to help. Have a query and need help ? <Link to={"/Support"}>Click here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mt-4">
                <div className="row g-4">
                    <div className="col-md-6">
                        <p>Payment</p>
                        <ul className="payments-types">
                            <li><img src="images/visa.png" alt="visa" /></li>
                            <li><img src="images/discover.png" alt="discover" /></li>
                            <li><img src="images/paypal.png" alt="paypal" /></li>
                            <li><img src="images/american.png" alt="american express" /></li>
                            <li><img src="images/mastercard.png" alt="discover" /></li>
                        </ul>
                    </div>
                    <div className="col-md-6 d-flex align-items-md-end flex-column">
                        <p>Keep in touch</p>
                        <ul className="social-icons">
                            <li className="social-icons-facebook"><Link to="http://www.facebook.com/" target="_blank"><FaFacebookF /></Link></li>
                            <li className="social-icons-twitter"><Link to="http://www.twitter.com/" target="_blank"><FaTwitter /></Link></li>
                            <li className="social-icons-google"><Link to="http://www.google.com/" target="_blank"><FaGoogle /></Link></li>
                            <li className="social-icons-linkedin"><Link to="http://www.linkedin.com/" target="_blank"><FaLinkedinIn /></Link></li>
                            <li className="social-icons-youtube"><Link to="http://www.youtube.com/" target="_blank"><FaYoutube /></Link></li>
                            <li className="social-icons-instagram"><Link to="http://www.instagram.com/" target="_blank"><FaInstagram /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-copyright">
                    <ul className="nav justify-content-center">
                        <li className="nav-item"> <Link to={"About-Us"} className="nav-link active">About Us</Link> </li>
                        <li className="nav-item"> <Link to={"Faq"} className="nav-link">Faq</Link> </li>
                        <li className="nav-item"> <Link to={"Contact-us"} className="nav-link">Contact</Link> </li>
                        <li className="nav-item"> <Link to={"Support"} className="nav-link">Support</Link> </li>
                        <li className="nav-item"> <Link to={"Help"} className="nav-link">Help</Link> </li>
                    </ul>
                    <p className="copyright-text">Copyright © 2022 <Link to={'/'}>Quickai</Link>. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
