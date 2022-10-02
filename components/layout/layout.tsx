import React, { ReactNode } from 'react';
import Navbar from '../navbar/navbar';
import { useEffect } from 'react';
import { getCookies, logout, validateSignInCookies } from '../../utils/auth';
import { getUserDataRequest } from '../../services/user';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { useRouter } from 'next/router';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { setUser } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    authenticate();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Get profileId, sessionToken, sessionExpirationTS from cookies.
   * Check cookies are valid.
   * Valid => Send request to get user data.
   * Invalid => Remove all cookies and refresh.
   */
  const authenticate = async () => {
    const { profileId, sessionToken, sessionExpirationTS } = getCookies();
    if (
      profileId &&
      sessionToken &&
      validateSignInCookies(profileId, sessionToken, sessionExpirationTS)
    ) {
      const [response, error] = await getUserDataRequest(
        profileId,
        sessionToken
      );
      if (response?.data) {
        setUser(response.data);
      }
      if (error) {
        logout();
        router.reload();
      }
    }
  };

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
