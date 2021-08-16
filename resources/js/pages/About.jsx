import Navigation from "../components/Navigation";
import { Head } from "@inertiajs/inertia-react";

const About = ({ title }) => {
    return (
        <div>
            <Head title="About" />
            <Navigation />
            <h1>About page</h1>
            <p>{title}</p>
        </div>
    );
};

export default About;
