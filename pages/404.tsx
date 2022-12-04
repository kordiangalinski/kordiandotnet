import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";

import lebowski from '../assets/biglebowski.gif';
import Title from "../utils/title";

const About = (): JSX.Element => {

    return (
        <>
            <Head>
                <Title>Not Found</Title>
            </Head>
            <Layout>
                <div className="text-slate-300">
                    <h1 className="text-2xl ">Error 404 - Page Not Found</h1>
                    <Image src={lebowski} alt={""} className="my-4"/>
                    <h1 className="text-2xl">Unfortunately we could not find the page you are looking for...</h1>
                    <h2 className="text-lg">Are you sure you are looking at correct url ?</h2>
                </div>
            </Layout>
        </>
    );
}

export default About;