import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href="/">
          <Image src={logo} alt="Sujeito Programador Logo" />
        </a>

        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <span>Home</span>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <span>Conteúdos</span>
          </ActiveLink>
          <ActiveLink href="/about" activeClassName={styles.active}>
            <span>Quem somos?</span>
          </ActiveLink>
        </nav>

        <a className={styles.readyButton} type="button" href="/posts">
          COMEÇAR
        </a>
      </div>
    </header>
  );
}
