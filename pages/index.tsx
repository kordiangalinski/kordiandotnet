import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";

const Home = (): JSX.Element => {
    return (
        <div className="bg-slate-800 w-screen min-h-screen flex">
            <Head>
                <title>~/usr/KordianGaliński | Home</title>
            </Head>
            <div className="mx-auto container flex justify-center items-center md:flex-row flex-col">
                <Navigation />
                <MainWrapper />
            </div>
            <Footer/>
        </div>
    );
}

const MainWrapper = (): JSX.Element => {
    return (
        <header className="uppercase text-center p-20 text-slate-200 z-10">
            <h1 className="text-3xl font-bold">Kordian Galiński</h1>
            <h2 className="text-xl"> CEO AT @. | Security Engineer | Software Engineer | CTF Team Captain/Player </h2>
            <main className="flex flex-col items-center justify-center my-6 scroll-auto">
               <Image
                   src={"https://i2-prod.mirror.co.uk/incoming/article21174982.ece/ALTERNATES/s1200b/1_Karl-Lagerfeld.jpg"}
                   alt={'Karl Lagerfeld mock photo'}
                   width={450}
                   height={800}
               />
            </main>
        </header>
    );
}

const NavigationItems = [
    {label: "Home", target: "/"},
    {label: "Who am I?", target: "/about"},
    {label: "Projects", target: "/projects"},
    {label: "Research", target: "/research"},
    {label: "Curriculum Vitae", target: "/cv"},
    {label: "Blog", target: "/blog"},
    {label: "Instagram", target: "https://www.instagram.com/kordiangalinski/"},
]

const Navigation = (): JSX.Element => {
    return (
        <nav className="md:border-r md:p-20 text-center border-slate-400">
            <ul>
                {NavigationItems && NavigationItems.map((items, index) =>
                    <Link key={index} href={items.target}>
                        <li className="my-3 uppercase text-lg font-medium text-slate-300 hover:text-slate-100">
                            {items.label}
                        </li>
                    </Link>
                )}
            </ul>
        </nav>
    );
}

const Footer = () => {
    return (
        <footer className="fixed bottom-2 text-center w-screen p-4 text-slate-400 font-medium select-none z-0">
            <span>&#169; Copyright | Kordian Galiński | 2016 - {new Date().getFullYear()}</span>
        </footer>
    );
}

export default Home;