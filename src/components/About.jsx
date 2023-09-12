import Food from "../assets/food.jpg";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <h1>Little Lemon</h1>
                <h1>Chicago</h1>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div className="about-images">
                <img src={Food} width={"400px"} className="about-image-1"/>
                <img src={Food} width={"400px"}  className="about-image-2"/>
            </div>
        </section>
    )
}

export default About;