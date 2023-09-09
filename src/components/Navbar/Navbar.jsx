import { useState } from "react";
import Logo from "../../assets/little-lemon-logo.png";
import styles from "./Navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    return (
        <nav>
            <AiOutlineMenu className={styles.menu} size={"25px"} onClick={() => setMenu(!menu)}/>
            <img src={Logo} alt="Little Lemon Logo" />
            <ul className={styles.navLinks}>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order online</li>
                <li>Login</li>
            </ul>
            {menu && <ul className={styles.mobileLinks}>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order online</li>
                <li>Login</li>
            </ul>}
        </nav>
    )
};

export default Navbar;