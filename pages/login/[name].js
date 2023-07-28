import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div className='text-6xl text-center bg-black text-white h-full w-full min-h-screen p-10'>
      <h1>Welcome, {name}!</h1>
    </div>
  );
};

export default LoginPage;
