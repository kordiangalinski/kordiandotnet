import Head from "next/head";

import Layout from "../components/Layout";
import Title from "../utils/title";

const About = (): JSX.Element => {
    return (
        <>
            <Head>
                <Title>About</Title>
            </Head>
            <Layout>
                <MainWrapper/>
            </Layout>
        </>
    );
}

const MainWrapper = (): JSX.Element => {
    return(
        <main className="text-slate-300">
            <h1 className="text-2xl">Who am I?</h1>
            <section className="p-4">
                <p className="text-lg">I am the Dude</p>
            </section>

            <h1 className="text-2xl">FAQ</h1>
            <section className="p-4 flex flex-col gap-4">
                <Question>Vim {">"} Emacs?</Question>
                <Answer>Off mates, obviously Emacs rules</Answer>
                <Question>Where are you based?</Question>
                <Answer>Currently in Berlin, Germany</Answer>
                <Question>Where are you from?</Question>
                <Answer>Poland</Answer>
                <Question>What languages can you speak?</Question>
                <AnswerList>
                    <li>Polish</li>
                    <li>English</li>
                    <li>German</li>
                    <li>Spanish</li>
                    <li>French</li>
                </AnswerList>
                <Question>What are your favourite Programming Languages?</Question>
                <AnswerList>
                    <li>x64 Assembly</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>Kotlin</li>
                    <li>Go</li>
                    <li>Rust</li>
                    <li>Elixir</li>
                </AnswerList>
            </section>

            <h1 className="text-2xl">Contact</h1>
            <section className="p-4">
                <ul>
                    <li>Discord</li>
                    <li>IRC</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Matrix</li>
                    <li>E-mail</li>
                </ul>
            </section>
        </main>
    );
}

const Question = ({children}: any) => <p className="text-lg">{children}</p>;

const AnswerList = ({children}: any) => <ul className="list-disc pl-12">{children}</ul>;
const Answer = ({children}: any) => <p className="pl-12">{">"} {children}</p>;

export default About;