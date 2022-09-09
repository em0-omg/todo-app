import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { drawerOpen } from '@/slices/pageSlice';

import { UserIcon } from '../UserIcon';

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className='flex px-4 justify-between items-center h-[56px] border-b'>
      <h1>
        <Link href='/'>
          <a className='text-2xl'>TODO APP</a>
        </Link>
      </h1>
      <button onClick={() => dispatch(drawerOpen())}>
        <UserIcon />
      </button>
    </header>
  );
};
