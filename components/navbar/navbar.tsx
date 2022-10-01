import Link from 'next/link';
import { useSelector } from 'react-redux';
import { UserState } from '../../interfaces/user';
import { RootState } from '../../state/reducers';
import GoogleLogin from '../googleLogin';
import styles from './navbar.module.scss';

const Navbar = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div className={styles.navbarContainer}>
      <ul>
        <li>
          <Link href='/'>Streamn</Link>
        </li>
        <li id={styles.googleButton}>
          {user?.profileId ? <button>Logout</button> : <GoogleLogin />}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
