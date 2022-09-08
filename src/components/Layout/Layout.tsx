import { ReactNode } from 'react';

import Header from '../Header/Header';

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className='layout min-h-main'>{children}</div>
    </>
  );
};

export default Layout;
