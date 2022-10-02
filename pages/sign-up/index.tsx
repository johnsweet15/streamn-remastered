import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Input from '../../components/input/input';
import { LoginResponse } from '../../interfaces/responses';
import { createAccountRequest } from '../../services/auth';
import { useRouter } from 'next/router';
import Button from '../../components/button';
import { setCookies } from '../../utils/auth';
import { getUserDataRequest } from '../../services/user';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../state';
import { bindActionCreators } from 'redux';

const SignUp: NextPage = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const { setUser } = bindActionCreators(actionCreators, dispatch);

  const [email, setEmail] = useState<string | undefined>('');
  const [username, setUsername] = useState<string>('');
  const [googleId, setGoogleId] = useState<string | undefined>('');

  useEffect(() => {
    const userData = getUserData();
    setEmail(userData?.googleEmail);
    setGoogleId(userData?.googleId);
  }, []);

  const getUserData = (): LoginResponse | null => {
    const googleInfo = sessionStorage.getItem('google-info');
    let userData: LoginResponse | null = null;
    if (googleInfo) {
      userData = JSON.parse(googleInfo);
    }
    return userData;
  };

  const createAccount = async () => {
    if (email && googleId) {
      const [response, error] = await createAccountRequest({
        email: email,
        googleId: googleId,
        username: username,
      });
      if (response?.status === 200) {
        const { profileId, sessionToken, sessionExpirationTS } =
          response.data.profileSession;
        setCookies(
          { profileId: profileId },
          { sessionToken: sessionToken },
          { sessionExpirationTS: sessionExpirationTS }
        );
        const [userDataResponse, error] = await getUserDataRequest(
          profileId,
          sessionToken
        );
        if (userDataResponse?.data) {
          setUser(userDataResponse.data);
        }

        router.push('/');
      }
    }
  };

  return (
    <div style={{ padding: 40 }}>
      Sign up
      <Input
        label='Email'
        required
        onChange={(event) => setEmail(event.target.value)}
        defaultValue={email}
        disabled
      />
      <Input
        label='Username'
        required
        onChange={(event) => setUsername(event.target.value)}
        value={username}
      />
      <Button onClick={() => createAccount()}>Create Account</Button>
    </div>
  );
};

export default SignUp;
