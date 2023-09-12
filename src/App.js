import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import HomePage from './pages/HomePage';
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
