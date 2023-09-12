import { useState } from "react";

const BookingForm = ({availableTimes, dispatch, submitForm}) => {

    const [formData, setFormData] = useState({
        date: "",
        time: '17:00',
        guests: '2',
        occasion: 'Other'
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
        if (id === "date") {
            dispatch({ type: 'UPDATE_TIMES', payload: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        submitForm(formData);
    };

    return (
        <>
        <h1>Book a Table</h1>
        <form styles={"display: grid; max-width: 200px; gap: 20px"} onSubmit={handleSubmit}>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" value={formData.date} onChange={handleChange} required/>
            <label htmlFor="time">Time</label>
            <select id="time" value={formData.time} onChange={handleChange}>
                {availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={formData.guests}
                onChange={handleChange}
            />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={formData.occasion} onChange={handleChange}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Anniversary">Other</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
        </>
    )
}

export default BookingForm;