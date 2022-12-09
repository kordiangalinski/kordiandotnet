import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({children}: any): JSX.Element => {
    return (
        <div className="bg-slate-800 w-screen min-h-screen flex">
            <div className="mx-auto container flex justify-center items-center md:flex-row flex-col">
                <Navigation />
                <div className="p-20 z-10 lg:max-h-[45rem] overflow-auto w-2/3 shadow-2xl ml-16">
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;