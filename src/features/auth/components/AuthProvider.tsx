import { doc, getDoc, setDoc } from '@firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth, db } from '@/lib/firebase';

import { setUser } from '@/features/auth/slices/userSlice';
import { User } from '@/features/auth/types';

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
      if (user) {
        const ref = doc(db, `users/${user.uid}`);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const appUser = (await getDoc(ref)).data() as User;
          dispatch(setUser(appUser));
        } else {
          const appUser: User = {
            id: user.uid,
            name: user.displayName!,
            photoURL: user.photoURL!,
            email: user.email!,
            createdAt: Date.now(),
          };

          setDoc(ref, appUser).then(() => {
            dispatch(setUser(appUser));
          });
        }
      } else {
        dispatch(setUser(null));
        !user && !isAvailableForViewing && (await router.push('/login'));
      }
    });
    return () => {
      authStateChanged();
    };
  }, []);

  return <main>{children}</main>;
};
