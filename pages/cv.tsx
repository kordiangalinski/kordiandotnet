import Title_Path from "../utils/title";
import Head from "next/head";
import Layout from "../components/Layout";

const CV = (): JSX.Element => {
    const Title = Title_Path + "Curriculum Vitae";
    return (
        <>
            <Head>
                <title>{Title}</title>
            </Head>
            <Layout>
                <object data=
                            "https://gcc.gnu.org/onlinedocs/gcc.pdf"
                        width="800"
                        height="500" />

            </Layout>
        </>
    );
}

export default  CV;