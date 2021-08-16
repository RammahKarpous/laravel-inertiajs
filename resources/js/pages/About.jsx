import Navigation from "../components/Navigation";
import { Head } from "@inertiajs/inertia-react";
import Layout from "./../components/Layout";

const About = ({ title }) => {
    return (
        <div>
            <h1>About page</h1>
            <p>{title}</p>
        </div>
    );
};

About.layout = (page) => <Layout children={page} title="About page" />;

export default About;
