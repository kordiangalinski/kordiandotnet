import Head from 'next/head'
import Image from "next/image";

import Layout from "../components/Layout";

import Title from "../utils/title";

const Home = (): JSX.Element => {
    return (
        <>
            <Head>
                <Title>Home</Title>
            </Head>
            <Layout>
                <MainWrapper/>
            </Layout>
        </>
    );
}

const MainWrapper = (): JSX.Element => {
    return (
        <header className="uppercase text-center text-slate-200">
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

export default Home;