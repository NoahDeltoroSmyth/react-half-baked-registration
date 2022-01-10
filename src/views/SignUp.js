import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signUpUser } from '../services/users';

export default function SignUp({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signUpUser(email, password);
      setCurrentUser(resp);
    } catch {
      setError('Try again');
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
