import { Link } from "@inertiajs/inertia-react";
import axios from "axios";
import { useEffect, useState } from "react";

const Navigation = () => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        getLinks();

        // eslint-ignore-next-line
    }, []);

    const getLinks = async () => {
        await axios
            .get("http://localhost:1337/links")
            .then((res) => setLinks(res.data));
    };

    return (
        <nav>
            <ul>
                {links.map((link, i) => (
                    <li key={i}>
                        <Link href="/">{link.page_name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
