import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';
import GoogleLogin from '../googleLogin';
import styles from './navbar.module.scss';
import { logout } from '../../utils/auth';
import { useRouter } from 'next/dist/client/router';
import Button from '../button';

const Navbar = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);

  const logoutUser = () => {
    logout();
    router.push('/');
    router.reload();
  };

  return (
    <div className={styles.navbarContainer}>
      <ul>
        <li>
          <Link href='/'>Streamn</Link>
        </li>
        <li id={styles.googleButton}>
          {user?.profileId ? (
            <Button onClick={() => logoutUser()}>Logout</Button>
          ) : (
            <GoogleLogin />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
