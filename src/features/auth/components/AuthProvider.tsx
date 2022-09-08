import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from '@/lib/firebase';

import { setUser } from '@/features/auth/slices/userSlice';

export type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAvailableForViewing =
    router.pathname === '/about' || router.pathname === '/login' || router.pathname === '/signup';

  useEffect(() => {
    const authStateChanged = onAuthStateChanged(auth, async (user) => {
      dispatch(setUser(user));
      !user && !isAvailableForViewing && (await router.push('/login'));
    });
    return () => {
      authStateChanged();
    };
  }, []);

  return <div>{children}</div>;
};
