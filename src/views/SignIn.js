// import React, { useState } from 'react';
// import AuthForm from '../components/AuthForm';
// import { signInUser } from '../services/users';

// export default function SignIn({ setCurrentUser }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const resp = await signInUser(email, password);
//       setCurrentUser(resp);
//     } catch {
//       setError('Try again');
//     }
//   };

//   return (
//     <div>
//       <h1>Sign In</h1>
//       <AuthForm
//         email={email}
//         setEmail={setEmail}
//         password={password}
//         setPassword={setPassword}
//         error={error}
//         handleSubmit={handleSubmit}
//       />
//     </div>
//   );
// }
