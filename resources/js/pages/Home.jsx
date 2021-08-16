import { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Navigation from "./../components/Navigation";

const Home = () => {
    const [counter, setCounter] = useState(0);

    const click = () => {
        console.log("Clicked!");
    };

    return (
        <div>
            <Head>
                <title>Home page</title>
            </Head>

            <Navigation />

            <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
        </div>
    );
};

export default Home;
