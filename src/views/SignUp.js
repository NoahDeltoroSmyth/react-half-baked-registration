import React from 'react';
import { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signupUser } from '../services/users';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signupUser(email, password);
      console.log(resp);
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
        setError={setError}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
