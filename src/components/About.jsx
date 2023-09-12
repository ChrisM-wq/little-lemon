import Owners from "../assets/MarioAdrianA.jpg";
import Owners2 from "../assets/MarioAdrianB.jpg";


const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div className="about-images">
                <img src={Owners} width={"400px"} className="about-image-1"/>
                <img src={Owners2} width={"400px"}  className="about-image-2"/>
            </div>
        </section>
    )
}

export default About;