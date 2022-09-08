import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { setupStore } from '@/store';

import { AuthProvider } from '@/features/auth/components/AuthProvider';

export type AppProviderProps = {
  children: ReactNode;
};

const store = setupStore();

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
};
