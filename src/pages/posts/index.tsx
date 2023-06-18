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
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

type Post = {
  slug: string;
  title: string;
  cover: string;
  description: string;
  updatedAt: string;
};
interface PostProps {
  posts: Posts[];
}

export default function Posts({ posts }: PostProps) {
  console.log(posts);
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'post')],
    {
      orderings: '[document.last_publication_date desc]', //Ordenar pelo mais recente
      fetch: ['post.title', 'post.description', 'post.cover'],
      pageSize: 3,
    }
  );

  console.log(JSON.stringify(response, null, 2));

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      description:
        post.data.description.find((content) => content.type === 'paragraph')
          ?.text ?? '',
      cover: post.data.cover.url,
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }
      ),
    };
  });

  return {
    props: {
      posts,
    },
    revalidate: 60 * 10,
  };
};
