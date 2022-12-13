import { useRouter } from 'next/router'
import Layout from "../../components/Layout";
import Head from "next/head";
import Title_Path from "../../utils/title";
import {useEffect, useState} from "react";
import {collection, doc, getDoc, getDocs} from "@firebase/firestore";
import {db} from "../../utils/firebase";
import Link from "next/link";

const Project = (): JSX.Element => {
    const router = useRouter()
    const { id } = router.query

    const [Title, setTitle] = useState(Title_Path);
    const [Data, setData] = useState([]);

    const fetchPost = async () => {

        // @ts-ignore
        const docRef = doc(db, 'projects', id);
        try {
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()) {
                // @ts-ignore
                setData(docSnap.data());
                setTitle(Title_Path + Data.title);
            }
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if(id) {
            fetchPost();
        }
    }, [id])

    return (
        <>
            <Head>
                <title>{Title}</title>
            </Head>
            <Layout>
                {
                    Data &&
                    <div className="flex flex-col gap-3.5">
                        <h1 className="text-4xl text-slate-300">{Data.title}</h1>
                        <hr className="border-slate-400 border-b-2"/>
                        <p className="text-slate-300 text-justify">{Data.content}</p>
                        <Link href={"/projects"} className="text-4xl ml-20 text-slate-300">&#8592;</Link>
                    </div>
                }
            </Layout>
        </>
        );
}

export default Project