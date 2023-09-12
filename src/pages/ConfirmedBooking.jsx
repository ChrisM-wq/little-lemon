import { BsPinFill } from "react-icons/bs";

const ConfirmedBooking =() => {
    return (
        <main>
            <section className="confirmation-page">
                <h1>Booking Confirmed</h1>
                <p>See you soon!</p>
                <div className="confirm-location">
                    <BsPinFill color="#495e57"/>
                    1512 W Chicago
                </div>
            </section>
        </main>
    )
}

export default ConfirmedBooking;