import styles from '../styles/home.module.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por Tencologia - Brenner Paiva</title>
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
      </main>
    </>
  );
}
