import { useState } from "react";

const BookingForm = ({availableTimes, dispatch, submitForm}) => {

    const [formData, setFormData] = useState({
        date: "",
        time: availableTimes[0],
        guests: '2',
        occasion: 'Other'
    });

    const [errors, setErrors] = useState({
        date: "",
        guests: "",
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        // Validate date
        const currentDate = new Date();
        const selectedDate = new Date(formData.date);

        if (selectedDate < currentDate) {
          newErrors.date = "Selected date must be in the future";
          isValid = false;
        } else {
          newErrors.date = "";
        }

        // Validate guests
        if (formData.guests < 1 || formData.guests > 10) {
          newErrors.guests = "Number of guests must be between 1 and 10";
          isValid = false;
        } else {
          newErrors.guests = "";
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
        setErrors({
            ...errors,
            [id]: "",
        });
        if (id === "date") {
            dispatch({ type: "UPDATE_TIMES", payload: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log(formData);
          submitForm(formData);
        }
    };

    return (
        <>
        <h1>Book a Table</h1>
        <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" value={formData.date} onChange={handleChange} required/>
            <span className="error">{errors.date}</span>
            <label htmlFor="time">Time</label>
            <select id="time" value={formData.time} onChange={handleChange}>
                {availableTimes.map((time, index) => (
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
            <span className="error">{errors.guests}</span>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={formData.occasion} onChange={handleChange}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Other" selected>Other</option>
            </select>
            <input id="submit" type="submit" value="Make Your reservation" aria-label="On Click" />
        </form>
        </>
    )
}

export default BookingForm;