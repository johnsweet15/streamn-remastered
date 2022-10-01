import GoogleLoginButton, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { API_URL, GOOGLE_CLIENT_ID } from '../config';
import { googleLogin } from '../services/auth';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { useRouter } from 'next/router';
import { setCookies } from '../utils/auth';

const GoogleLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { setUser } = bindActionCreators(actionCreators, dispatch);

  const onLoginSuccess = async (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ('tokenId' in res) {
      // TODO error handling
      const [response] = await googleLogin(res.tokenId);
      const data = response?.data;
      if (data) {
        if (!data.accExist) {
          router.push('/sign-up');
        } else {
          setUser(data.profile);
          const { profileId, sessionToken, sessionExpirationTS } =
            data.profileSession;
          setCookies(
            { profileId: profileId },
            { sessionToken: sessionToken },
            { sessionExpirationTS: sessionExpirationTS }
          );
        }
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
      buttonText='Login'
      onSuccess={onLoginSuccess}
      onFailure={onLoginFailure}
      cookiePolicy={'single_host_origin'}
      redirectUri={API_URL}
    />
  );
};

export default GoogleLogin;
