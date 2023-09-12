import { Link } from "react-router-dom";
import Food from "../assets/hero-food.jpg";

const Hero = () => {
    return (
        <header id="home">
            <section className="hero-container">
                <div className="hero-content">
                    <h1>Little Lemon</h1>
                    <h4>Chicago</h4>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to={"/booking"}>Reserve a Table</Link>
                </div>
                <img className="heroImage" src={Food} />
            </section>
        </header>
    )
};

export default Hero;