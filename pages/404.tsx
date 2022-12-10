import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";

import Lebowski from '../public/biglebowski.gif';

import Title_Path from "../utils/title";

const About = (): JSX.Element => {
    const Title = Title_Path + "Not Found";
    return (
        <>
            <Head>
                <title>{Title}</title>
            </Head>
            <Layout>
                <div className="text-slate-300">
                    <h1 className="text-2xl ">Error 404 - Page Not Found</h1>
                    <Image src={Lebowski} alt={""} className="my-4"/>
                    <h1 className="text-2xl">Unfortunately we could not find the page you are looking for...</h1>
                    <h2 className="text-lg">Are you sure you are looking at correct url ?</h2>
                </div>
            </Layout>
        </>
    );
}

export default About;