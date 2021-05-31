import Head from 'next/head';
import styles from './styles.module.scss';
export default function Posts(){
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a>
                        <time>31 de maio de 2021</time>
                        <strong>Creating o Monorepo gabriel</strong>
                        <p>In this guide , you will create</p>
                    </a>
                    <a>
                        <time>31 de maio de 2021</time>
                        <strong>Creating o Monorepo gabriel</strong>
                        <p>In this guide , you will create</p>
                    </a>
                    <a>
                        <time>31 de maio de 2021</time>
                        <strong>Creating o Monorepo gabriel</strong>
                        <p>In this guide , you will create</p>
                    </a>
                </div>
            </main>
        </>

    );
}