import { ReactNode } from 'react';

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return <div>{children}</div>;
};

export default AppProvider;
