import GoogleLoginButton, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import {
  API_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_COOKIE_POLICY,
} from '../config/config';
import { googleLogin } from '../services/auth';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { useRouter } from 'next/router';
import { logout, setCookies } from '../utils/auth';
import Button from './button';

const GoogleLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { setUser } = bindActionCreators(actionCreators, dispatch);

  const onLoginSuccess = async (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ('tokenId' in res) {
      const [response, error] = await googleLogin(res.tokenId);
      const data = response?.data;
      if (data) {
        // first time user
        if (!data.accExist) {
          sessionStorage.setItem('google-info', JSON.stringify(data));
          router.push('/sign-up');
        }
        // existing user
        else {
          setUser(data.profile);
          const { profileId, sessionToken, sessionExpirationTS } =
            data.profileSession;
          setCookies(
            { profileId: profileId },
            { sessionToken: sessionToken },
            { sessionExpirationTS: sessionExpirationTS }
          );
        }
      } else if (error) {
        logout();
        router.push('/');
        router.reload();
      }
      // TODO idk do something here?
    } else {
      // TODO idk do something here?
    }
  };

  const onLoginFailure = (response: any) => {
    console.log(response);
  };

  return (
    <GoogleLoginButton
      clientId={GOOGLE_CLIENT_ID}
      onSuccess={onLoginSuccess}
      onFailure={onLoginFailure}
      cookiePolicy={GOOGLE_COOKIE_POLICY}
      render={(renderProps) => (
        <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          Login
        </Button>
      )}
      redirectUri={API_URL}
      autoLoad={false}
    />
  );
};

export default GoogleLogin;
