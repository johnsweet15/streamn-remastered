import Link from 'next/link';
import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <ul>
        <li>
          <Link href='/'>Streamn</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
