import { Link } from "@inertiajs/inertia-react";
import axios from "axios";

const Navigation = () => {
    const getLinks = async () => {
        await axios
            .get("http://localhost:1337/links")
            .then((res) => console.log(res));
    };

    return (
        <div>
            <Link style={{ padding: 12, display: "inline-block" }} href="/">
                Home
            </Link>
            <Link
                style={{ padding: 12, display: "inline-block" }}
                href="/about"
            >
                About
            </Link>
        </div>
    );
};

export default Navigation;
