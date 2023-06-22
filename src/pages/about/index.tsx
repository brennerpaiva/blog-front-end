import styles from './styles.module.scss';
import Head from 'next/head';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <Head>
        <title>Quem Somos?</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Front-End Insights</h1>
            <p>
              O Front-end Insights acredita na importância da aprendizagem
              contínua e no compartilhamento de conhecimento. Queremos Capacitar
              desenvolvedores front-end, iniciantes e experientes, a alcançarem
              seus objetivos e se destacarem em suas carreiras. Compartilhamos
              nossas experiências, insights e truques do ofício para ajudá-lo a
              enfrentar os desafios do desenvolvimento front-end.
            </p>
            <a
              href="https://www.linkedin.com/in/brenner-paiva1/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/brennerpaiva" target="_blank">
              <FaGithub />
            </a>
          </section>
          <img src="images/about-us.png" alt="about us" />
        </div>
      </main>
    </>
  );
}
