import styles from '../styles/home.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '@/services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

interface ContentProps {
  title: string;
  titleContent: string;
  // linkAction: string;,
  section1Title: string;
  section1Content: string;
  section1Banner: string;
  section2Title: string;
  section2Content: string;
  section2Banner: string;
  content: any;
}

export default function Home({ content }: ContentProps) {
  return (
    <>
      <Head>
        <title>FrontEnd Insights</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>{content.title}</h1>
            <span>{content.titleContent} </span>
            <a href="/posts">
              <button>COMEÇAR AGORA!</button>
            </a>
          </section>
          <img src="/images/home.png" alt="Conteúdos" />
        </div>

        <div className={styles.sectionContent}>
          <section>
            <h2>{content.section1Title}</h2>
            <span>{content.section1Content}</span>
          </section>

          <img src={content.section1Banner} alt="Conteúdo Mobile" />
        </div>

        <div className={styles.sectionContent}>
          <img src={content.section2Banner} alt="Conteúdo Web" />
          <section>
            <h2>{content.section2Title}</h2>
            <span>{content.section2Content}</span>
          </section>
        </div>
        <div className={styles.nextLevelContent}>
          <Image quality={100} src={techsImage} alt="Tecnologias" />
          <h2>
            Mais de <span>10 mil</span> acompanham o blog diariamente.
          </h2>
          <span>
            Não perca a chance de evoluir cada vez mais e venha fazer parte da
            nossa comunidade!
          </span>
          <a href="/posts">
            <button>COMEÇAR AGORA!</button>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query([
    Prismic.Predicates.at('document.type', 'home'),
  ]);

  const {
    title,
    sub_title,
    // link_action,
    section1_title,
    section1_content,
    section2_banner,
    section2_title,
    section2_content,
    section2_banner1,
  } = projectResponse.results[0].data;

  const content = {
    title: RichText.asText(title),
    titleContent: RichText.asText(sub_title),
    //linkAction: link_action.url,
    section1Title: RichText.asText(section1_title),
    section1Content: RichText.asText(section1_content),
    section1Banner: section2_banner.url,
    section2Title: RichText.asText(section2_title),
    section2Content: RichText.asText(section2_content),
    section2Banner: section2_banner1.url,
  };

  return {
    props: {
      content,
    },
    revalidate: 60 * 2, // a cada 2 min
  };
};
