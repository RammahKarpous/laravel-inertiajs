import { Head } from "@inertiajs/inertia-react";
import Navigation from "./Navigation";
const Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>

            <Navigation />

            {children}
        </div>
    );
};

export default Layout;
