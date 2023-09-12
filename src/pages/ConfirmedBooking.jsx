import { useEffect, useState } from "react";
import { BsPinFill } from "react-icons/bs";

const ConfirmedBooking =() => {

    const [booking, setBooking] = useState({});

    useEffect(() => {
        
        setBooking(JSON.parse(localStorage.getItem('booking')));
        console.log(JSON.parse(localStorage.getItem('booking')))
        console.log(booking)
    }, [])

    return (
        <main>
            <section className="confirmation-page">
                <h1>Booking Confirmed</h1>
                <p>See you soon!</p>
                <ul className="confirm-location">
                    <li>{booking.date}</li>
                    <li>{booking.time}</li>
                    <li>{booking.guests} guests</li>
                    <li>{booking.occasion}</li>
                    <li><BsPinFill color="#495e57"/></li>
                    <li>1512 W Chicago</li>
                </ul>
            </section>
        </main>
    )
}

export default ConfirmedBooking;