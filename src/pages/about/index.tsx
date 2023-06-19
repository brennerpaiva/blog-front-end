import styles from './styles.module.scss';
import Head from 'next/head';
import { FaLinkedin } from 'react-icons/fa';
import ImageAboutUs from '../../../public/images/about-us.png';

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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              natus molestiae doloribus voluptate perspiciatis placeat quia
              facere! Sapiente officia rerum molestias eius libero, ipsum
              asperiores vero dolorum, mollitia, sunt assumenda.
            </p>
            <a
              href="https://www.linkedin.com/in/brenner-paiva1/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </section>
          <img src="images/about-us.png" alt="texxxt" />
        </div>
      </main>
    </>
  );
}
