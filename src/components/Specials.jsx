import { MdDeliveryDining } from "react-icons/md"
import Food from "../assets/food.jpg";
const Specials = () => {
    return (
        <section className="specials-container" id="specials">
            <div className="specials-header">
                <h1>Current Specials</h1>
                <button className="menu-btn">Online Menu</button>
            </div>
            <div className="specials-items">
                <article className="specials-item">
                    <img src={Food} alt="Greek Salad"/>
                    <div>
                        <h3>Greek Salad</h3>
                        <p className="price">$12.99</p>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <a href="#order" className="order-online">Order Online<MdDeliveryDining /></a>
                </article>
                <article className="specials-item">
                    <img src={Food} alt="Greek Salad"/>
                    <div>
                        <h3>Greek Salad</h3>
                        <p className="price">$12.99</p>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <a href="#order" className="order-online">Order Online<MdDeliveryDining /></a>
                </article>
                <article className="specials-item">
                    <img src={Food} alt="Greek Salad"/>
                    <div>
                        <h3>Greek Salad</h3>
                        <p className="price">$12.99</p>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <a href="#order" className="order-online">Order Online<MdDeliveryDining /></a>
                </article>
            </div>
        </section>
    )
}

export default Specials;