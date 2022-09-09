import { NextPage } from 'next';

import { Button } from '@/components/Elements/Button';

import { googleSignIn, guestSignIn } from '@/features/auth/utils';

const Login: NextPage = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-main'>
      <h2 className='mb-8'>簡単操作でTODOを管理</h2>
      <Button className='w-full mb-4' variant='secondary' onClick={guestSignIn}>
        いますぐ始める
      </Button>
      <Button className='w-full' onClick={googleSignIn}>
        Googleアカウントでログイン
      </Button>
    </div>
  );
};

export default Login;
