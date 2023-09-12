import Logo from "../assets/footer-logo.png";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsTwitter, BsPinFill, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="Little Lemon logo" width={"200px"}/>
            <div>
                <h2>Little Lemon</h2>
                <ul className="footerNavigations">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/"}>About</Link></li>
                    <li><Link to={"/"}>Menu</Link></li>
                    <li><Link to={"/booking"}>Reservations</Link></li>
                    <li><Link to={"/"}>Order online</Link></li>
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