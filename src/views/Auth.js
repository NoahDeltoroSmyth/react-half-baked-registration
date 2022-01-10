import React, { useState } from 'react';
import { signInUser, signUpUser } from '../services/users';
import AuthForm from '../components/AuthForm';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'signin') {
        resp = await signInUser(email, password);
      } else {
        resp = await signUpUser(email, password);
      }
      setCurrentUser(resp);
    } catch {
      setError('Error');
    }
  };
  return (
    <div>
      <AuthForm
        error={error}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
