import Head from 'next/head';
import style from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import thumbImg from '../../../public/images/thumb.png';
import {
  FiChevronRight,
  FiChevronsRight,
  FiChevronLeft,
  FiChevronsLeft,
} from 'react-icons/fi';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Blog Front-End</title>
      </Head>
      <main className={style.container}>
        <div className={style.posts}>
          <Link href="/">
            <span>
              <Image
                src={thumbImg}
                alt="post-1"
                width={720}
                height={410}
                quality={100}
              />
              <strong>Criando meu primeiro aplicativo</strong>
              <time>14 de fevereiro 2023</time>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, quaerat necessitatibus ipsum tempore aut odit beatae,
                expedita at maiores officiis numquam asperiores maxime. Dolore
                accusantium ex facilis maiores odit dignissimos?
              </p>
            </span>
          </Link>

          <div className={style.buttonNavigate}>
            <div>
              <button>
                <FiChevronsLeft />
              </button>
              <button>
                <FiChevronLeft />
              </button>
            </div>
            <div>
              <button>
                <FiChevronRight />
              </button>
              <button>
                <FiChevronsRight />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
