const Footer = () => {
    return (
        <footer className="fixed bottom-2 text-center w-screen p-4 text-slate-400 font-medium select-none z-0">
            <span>&#169; Copyright | Kordian Galiński | 2016 - {new Date().getFullYear()}</span>
        </footer>
    );
}

export default Footer;