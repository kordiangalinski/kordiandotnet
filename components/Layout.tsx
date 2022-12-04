import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({children}: any): JSX.Element => {
    return (
        <div className="bg-slate-800 w-screen min-h-screen flex">
            <div className="mx-auto container flex justify-center items-center md:flex-row flex-col">
                <Navigation />
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;