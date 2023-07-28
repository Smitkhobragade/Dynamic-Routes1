// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push(`/login/${username}`);
  };

  return (
    <div className='h-fit flex flex-row content-center justify-center p-5 min-h-screen'>
      <div className='flex  content-center justify-center p-4'>
        <div className=' self-center'>
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className='self-center flex flex-col text-center gap-4 p-4'>
          <h1 className='text-xl font-bold'>Login Form</h1>
          <form onSubmit={handleLogin} className='flex flex-col w-52 content-center items-center gap-4'>
            <input
              className='p-2 text-black rounded '
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
              required
            />
            <input
              className='p-2 text-black rounded'
              type="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className='p-3 text-black bg-blue-500 rounded'>Login</button>
          </form>
        </div>
      </div> 
    </div>
  );
};

export default LoginPage;
