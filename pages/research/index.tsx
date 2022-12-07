import Title_Path from "../../utils/title";
import Head from "next/head";
import Layout from "../../components/Layout";
import {useEffect, useState} from "react";
import {collection, getDocs, Timestamp} from "@firebase/firestore";
import {db} from "../../utils/firebase";
import Link from "next/link";

const Researchs = (): JSX.Element => {
    const Title = Title_Path + "Research";
    const [Projects, setProjects] = useState<any[]>([]);

    const fetchPost = async () => {

        await getDocs(collection(db, "research"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setProjects(newData);
            })

    }

    useEffect(()=>{
        fetchPost();
    }, [])

    return (
        <>
            <Head>
                <title>{Title}</title>
            </Head>
            <Layout>
                <h1 className="text-3xl text-slate-300 border-b border-slate-400 mb-2">Recent Research</h1>
                <main className="flex flex-col gap-5">
                    {Projects && Projects.map((items, key) =>
                        <Card
                            key={key}
                            id={items.id}
                            title={items.title}
                            content={items.content}
                            date={items.date}
                        />
                    )}
                </main>
            </Layout>
        </>
    );
}

interface CardProps {
    id: string
    title: string
    content: string
    date: Timestamp
};

const Card = (props: CardProps): JSX.Element => {
    return(
        <div className="p-2 shadow-xl text-slate-400">
            <h2 className="text-2xl">{props.title}</h2>
            <p>{props.content.substring(0, 200)}</p>
            <div className="flex justify-between p-1">
                <Link href={`/research/${props.id}`} className="font-bold">Read More</Link>
                <span>{props.date.toDate().toLocaleDateString()}</span>
            </div>
        </div>
    );
}

export default Researchs;