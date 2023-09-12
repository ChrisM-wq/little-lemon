import { useState, useReducer } from "react"
import BookingForm from "../components/BookingForm";

import { fetchAPI, submitAPI } from "../utils/api";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {

    const [date, setDate] = useState(new Date())

    function initializeTimes(date) {
        return fetchAPI(date);
    }

    function updateTimes(date) {
        const dateObj = new Date(date);
        return fetchAPI(dateObj);
    }

    const navigate = useNavigate();

    function submitForm(formData) {
        const isSubmitted = submitAPI(formData);

        if (isSubmitted) {
            navigate("/confirmed");
        }
    }

    function reducer(state, action) {
        let newTimes;
        switch (action.type) {
            case 'UPDATE_TIMES':
                const newDate = new Date(action.payload);
                newTimes = updateTimes(newDate)
                break;
            default:
                throw new Error()
        }
        return newTimes;
    }

    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date));

    return (
        <main className="form-page">
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        </main>
    )
}

export default BookingPage;