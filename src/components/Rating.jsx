import Stars from "../assets/stars.png";
import Person from "../assets/person1.jpg"
const Rating = () => {
    return (
        <div className="rating">
            <img src={Stars}/>
            <h2>Name</h2>
            <img src={Person}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}
export default Rating;