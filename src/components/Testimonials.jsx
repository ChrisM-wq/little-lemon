import Stars from "../assets/stars.png";
import Person1 from "../assets/person1.jpg"
import Person2 from "../assets/person2.jpg"
import Person3 from "../assets/person3.jpg"
import Person4 from "../assets/person4.jpg"

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h1>Testimonials</h1>
            <div className="rating-container">
                <div className="rating">
                    <img src={Person1} className="profile"/>
                    <h2>James</h2>
                    <img src={Stars} className="stars"/>

                    <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em></p>
                </div>
                <div className="rating">
                    <img src={Person2} className="profile"/>
                    <h2>Bill</h2>
                    <img src={Stars} className="stars"/>
                    <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em></p>
                </div>
                <div className="rating">
                    <img src={Person3} className="profile"/>
                    <h2>Ashley</h2>
                    <img src={Stars} className="stars"/>
                    <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em></p>
                </div>
                <div className="rating">
                    <img src={Person4} className="profile"/>
                    <h2>Tyra</h2>
                    <img src={Stars} className="stars"/>
                    <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em></p>
                </div>
            </div>
        </section>
    )
}
export default Testimonials;