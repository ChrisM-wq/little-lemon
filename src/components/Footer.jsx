import Logo from "../assets/footer-logo.png";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsTwitter, BsPinFill, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="Little Lemon logo" width={"200px"}/>
            <div>
                <h2>Little Lemon</h2>
                <ul className="footerNavigations">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#about">Menu</a></li>
                    <li><a href="#about">Reservations</a></li>
                    <li><a href="#about">Order online</a></li>
                </ul>
            </div>
            <div>
                <h2>Contact</h2>
                <ul className="contactDetails">
                    <li><BsPinFill /> 1512 W Chicago</li>
                    <li><MdEmail /> littlelemon@gmail.com</li>
                    <li><AiFillPhone /> (125) 255-2511</li>
                </ul>
            </div>
            <div className="mediaContainer">
                <h2>Social Media</h2>
                <ul className="mediaLinks">
                    <li><a href="#facebook"><BsFacebook size={"20px"}/></a></li>
                    <li><a href="#instagram"><BsInstagram size={"20px"}/></a></li>
                    <li><a href="#twitter"><BsTwitter size={"20px"}/></a></li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;