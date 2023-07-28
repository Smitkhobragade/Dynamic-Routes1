import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div className='text-6xl text-center mt-10'>
      <h1>Welcome, {name}!</h1>
    </div>
  );
};

export default LoginPage;
