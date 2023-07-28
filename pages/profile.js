// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push(`/profile/${username}`);
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div>
        <h1 className='my-6 text-center text-3xl font-bold'>Login To List</h1>
        <form onSubmit={handleLogin} className='flex flex-col'>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            required
            className='text-xl p-2 rounded text-black'
          />
          <button type="submit" className='text-xl font-bold bg-blue-500 my-6 rounded'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
