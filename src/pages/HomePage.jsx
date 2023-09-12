import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Specials from '../components/Specials';
import About from '../components/About';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </main>
    )
}
export default HomePage;