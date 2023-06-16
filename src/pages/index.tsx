import styles from '../styles/home.module.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog FrontEnd</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você ao proximo nível!</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
              dignissimos quam nesciunt sed tenetur quia facere ratione labore
              provident quod sunt rem consequuntur exercitationem.
            </span>
            <a>
              <button>COMEÇAR AGORA!</button>
            </a>
          </section>
          <img src="/images/banner-conteudos.png" alt="Conteúdos" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda a criar aplicativos Android e Ios</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium dolores molestias{' '}
            </span>
          </section>

          <img src="/images/financasApp.png" alt="Conteúdo Mobile" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img src="/images/webDev.png" alt="Conteúdo Web" />
          <section>
            <h2>Aprenda a criar Sistemas Web</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium dolores molestias{' '}
            </span>
          </section>
        </div>
      </main>
    </>
  );
}
