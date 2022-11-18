import Head from 'next/head'
import Image from 'next/image'

interface CardProps {
    img?: string
}

const Card = (props: CardProps): JSX.Element => {
    return (
        <section className="p-8 shadow-2xl">
            <h1 className="text-3xl text-gray-300">Lorem ipsum et dolor</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam turpis. Pellentesque placerat
                vestibulum orci non egestas. Cras iaculis sit amet ipsum id molestie. Mauris nec nunc ante. Integer nec
                tortor facilisis, mattis ipsum at, scelerisque velit. Duis quis massa id elit consectetur feugiat.
                Pellentesque egestas, arcu id bibendum tincidunt, risus ipsum vulputate nunc, a ultricies lectus arcu
                eget nisi. Pellentesque euismod laoreet nibh sit amet convallis. Maecenas purus ipsum, aliquet accumsan
                eros nec, suscipit sollicitudin mi.</p>
        </section>
    )
}

const MainContainer = (): JSX.Element => {
    return (
        <main className="flex flex-wrap flex-1 justify-center flex-col">
            <Card/>
            <Card/>
        </main>
    )
}

const FooterNavigation: string[][] = [
    ['Home', '/'],
    ['Blog', '/blog'],
    ['Research', '/research'],
    ['Projects', '/projects'],
    ['Instagram', 'https://www.instagram.com/kordiangalinski'],
];

const Footer = (): JSX.Element => {
    return (
        <footer className="flex flex-col justify-center p-8 text-slate-50">
            <nav className="flex gap-x-10 justify-center items-center py-6 flex-wrap">
                {FooterNavigation.map(
                    ([title, url], index) => (
                        <a key={index} href={url} className="text-lg hover:underline hover:underline-offset-8">{title}</a>
                    ))}
            </nav>
            <span className="text-center">&copy; Kordian Galiński | 2016 - {new Date().getFullYear()}</span>
        </footer>
    );
}

export default function Home(): JSX.Element {
    return (
        <div className="min-h-screen bg-gray-800">
            <Head>
                <title>./kordiangalinski | Home</title>
            </Head>
            <div className="container mx-auto">
                <MainContainer/>
                <Footer/>
            </div>
        </div>
    )
}
