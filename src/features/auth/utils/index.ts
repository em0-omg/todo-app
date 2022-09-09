import {
  GoogleAuthProvider,
  signInAnonymously,
  signInWithRedirect,
  signOut,
  UserCredential,
} from 'firebase/auth';

import { auth } from '../../../lib/firebase';

export const guestSignIn = (): Promise<UserCredential> => {
  return signInAnonymously(auth);
};

export const googleSignIn = (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider);
};

export const signout = (): Promise<void> => {
  return signOut(auth);
};
