import { NextPage } from 'next';
import { useState } from 'react';
import Input from '../../components/input/input';

const SignUp: NextPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  return (
    <div style={{ padding: 40 }}>
      Sign up
      <Input
        label='Email'
        required
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <Input
        label='Username'
        required
        onChange={(event) => setUsername(event.target.value)}
        value={username}
      />
    </div>
  );
};

export default SignUp;
