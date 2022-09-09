import { UserCircleIcon } from '@heroicons/react/outline';
import Image from 'next/image';

import { useSelector } from '@/store';

export const UserIcon = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      {user?.photoURL ? (
        <Image src={user.photoURL} alt='user icon' />
      ) : (
        <UserCircleIcon className='h-6 w-6' />
      )}
    </div>
  );
};
