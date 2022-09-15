import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>河合耀介のプロフィールサイトです</p>
        <p>質素なサイトですみません、、、このプロフィールサイトはNext.jsの公式チュートリアルに沿って作成し、少し改良を加えました。</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>my-site</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <div className={utilStyles.achievement}>
          <p>実績</p>
          <a href='https://fukui-hougen.net/'>福井の方言愛着ましましプロジェクト</a>
          <a href='https://koge-school.com/'>KOGE塾様</a>
          <a href='https://unsung-hair.com/'>美容室unsung様</a>
          <a href='https://meme-sns.com/'>株式会社meme様</a>
          <a href='https://my-todo-vert.vercel.app/?'>Reactでtodoアプリ作ってみました</a>
        </div>
      </section>
    </Layout>
  );
}