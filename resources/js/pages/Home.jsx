import { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Layout from "./../components/Layout";

const Home = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <Head>
                <title>Home page</title>
            </Head>

            <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
        </div>
    );
};

Home.layout = (page) => <Layout children={page} title="Home" />;

export default Home;
