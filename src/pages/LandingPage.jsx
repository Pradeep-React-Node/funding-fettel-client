import "../assets/css/LandingPage.css";
import appIllustration from "../assets/images/app-illustration.jpg";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom"
const LandingPage = () => {



    return (
        <>
            <Navbar />
            <div className="landing-page">
                <header>
                    <h1>Welcome to ChildCare Funding</h1>
                    <p>Empowering parents to access child care funding easily</p>
                </header>
                <section className="illustration-section">
                    <div className="illustration">
                        <img src={appIllustration} alt="App Illustration" />
                    </div>
                    <div className="description">
                        <h2>Our Services and Goals</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            tincidunt, sapien nec blandit feugiat, magna quam sollicitudin
                            mauris, nec euismod ligula nulla ut lorem.
                        </p>
                        <h3>How it Works</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            tincidunt, sapien nec blandit feugiat, magna quam sollicitudin
                            mauris, nec euismod ligula nulla ut lorem.
                        </p>
                        <Link to ="/register">Sign Up for a Demo</Link>
                    </div>
                </section>
                <section className="partners-section">
                    <h2>Day Care Centers Offering Our Services</h2>
                    <ul>
                        <li>Daycare Center 1</li>
                        <li>Daycare Center 2</li>
                        <li>Daycare Center 3</li>
                    </ul>
                </section>
                <section className="local-councils-section">
                    <h2>Local Councils We Work With</h2>
                    {/* <p>
                        <a href="/local-councils">View all local councils in the UK</a>
                    </p> */}
                </section>
                <Footer />
            </div>
        </>
    );
};

export default LandingPage;
