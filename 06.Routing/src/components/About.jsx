import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import Mission from "./Mission";
import Values from "./Values";

const About = () => {
    return (
        <>
            <h2>About Page</h2>
            <nav>
                <p><Link to='about-us'>About Us</Link></p>
                <p><Link to='mission'>Our Mission</Link></p>
                <p><Link to='values'>Our Values</Link></p>
            </nav>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ea nam dolores omnis, error labore fuga atque cum voluptates sint harum voluptatibus? Nobis commodi est molestiae iste cumque ea consequatur?</p>
            <Routes>
                <Route path="/about-us" element={<AboutUs />}></Route>
                <Route path="/mission" element={<Mission />}></Route>
                <Route path="/values" element={<Values />}></Route>
            </Routes>
        </>
    );
}

export default About;