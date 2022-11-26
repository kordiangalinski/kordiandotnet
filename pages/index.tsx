import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image';

import photo from '../public/mock.png';
import {useState} from "react";

interface CardProps {
    title: string
    content: string
    date: Date
    author: string
}

const MockCardData: CardProps = {
    title: 'Lorem ipsum et dolor',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut neque sapien. Integer laoreet lacus elit, non luctus neque luctus in. Suspendisse eu arcu nec velit lacinia suscipit. Nunc pharetra efficitur interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mattis nibh, a suscipit urna. Pellentesque ultrices cursus libero nec suscipit. Duis et venenatis libero.',
    date: new Date(),
    author: 'Kordian Galinski',
};

const Card = (props: CardProps): JSX.Element => {
    return (
        <section className="p-8 shadow-2xl cursor-pointer">
            <div className="py-2.5">
                <h1 className="text-2xl text-gray-100">{props.title}</h1>
                <div className="flex justify-between">
                    <h2 className="text-gray-400 text-">Created by {props.author}</h2>
                    <h2 className="text-gray-400">{props.date.toLocaleDateString()}</h2>
                </div>
            </div>
            <Image src={photo} alt='lex' height={300} className="my-2"/>
            <p className="text-lg text-gray-300 text-justify">{props.content}</p>
        </section>
    )
}

const About = (): JSX.Element => {
    return (
        <div className="flex flex-col justify-center items-center p-6 shadow-2xl">
            <Image src={photo} alt='lex' height={300}/>
            <h1 className="text-2xl p-6 text-gray-100">Kordian Galinski</h1>
            <p className="text-lg text-justify text-gray-200">{MockCardData.content}</p>
        </div>
    )
}

const MainContainer = (): JSX.Element => {
    return (
        <main className="flex flex-wrap flex-1 justify-center flex-col gap-4 items-center p-6">
            <div>
                <h1 className="text-3xl p-6 text-gray-100">Who am I?</h1>
                <About/>
            </div>
            <div>
                <h1 className="text-3xl p-6 text-gray-100">Latest Activity</h1>
                <Card title={MockCardData.title} content={MockCardData.content} date={MockCardData.date} author={MockCardData.author}/>
                <Card title={MockCardData.title} content={MockCardData.content} date={MockCardData.date} author={MockCardData.author}/>
                <Card title={MockCardData.title} content={MockCardData.content} date={MockCardData.date} author={MockCardData.author}/>
                <Card title={MockCardData.title} content={MockCardData.content} date={MockCardData.date} author={MockCardData.author}/>
                <Card title={MockCardData.title} content={MockCardData.content} date={MockCardData.date} author={MockCardData.author}/>
            </div>
            <cite className="text-center text-3xl p-6 text-gray-100 w-fit select-none my-6">Evviva l&apos;arte!</cite>
        </main>
    )
}

const FooterNavigation: string[][] = [
    ['Home', '/'],
    ['Blog', '/blog'],
    ['Research', '/research'],
    ['Projects', '/projects'],
    ['Instagram', 'https://www.instagram.com/kordiangalinski'],
    ['GitHub', 'https://www.github.com/kordiangalinski'],
];

const Footer = (): JSX.Element => {
    return (
        <footer className="flex flex-col justify-center p-8 text-slate-50">
            <nav className="flex gap-x-10 justify-center items-center py-6 flex-wrap">
                {FooterNavigation.map(
                    ([title, url], index) => (
                        <Link key={index} href={url} className="text-lg hover:underline hover:underline-offset-8">{title}</Link>
                    ))}
            </nav>
            <span className="text-center">&copy; Kordian Galiński | 2016 - {new Date().getFullYear()}</span>
        </footer>
    );
}

const TopNavigation: string[][] = [
    ['Home', '/'],
    ['Blog', '/blog'],
    ['Research', '/research'],
    ['Projects', '/projects'],
    ['Instagram', 'https://www.instagram.com/kordiangalinski'],
    ['GitHub', 'https://www.github.com/kordiangalinski'],
];

const TopNavigationBar = (): JSX.Element => {
    return (
        <nav className="w-full flex justify-evenly p-3 text-gray-400 shadow-2xl">
            {TopNavigation.map(
                ([title, url], index) => (
                    <Link key={index} href={url} className="text-lg hover:underline hover:underline-offset-8">{title}</Link>
                ))}
        </nav>
    );
}

export default function Home(): JSX.Element {

    return (
        <div className="min-h-screen bg-gray-800">
            <Head>
                <title>./kordiangalinski | Home</title>
            </Head>
            <div className="container mx-auto ">
                <TopNavigationBar/>
                <MainContainer/>
                <Footer/>
            </div>
        </div>
    )
}
