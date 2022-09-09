import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from '@/store';

import { drawerClose } from '@/slices/pageSlice';

import { Drawer } from '../Elements/Drawer/Drawer';
import { Header } from '../Header';

type LayoutProps = { children: ReactNode };

export const Layout = ({ children }: LayoutProps) => {
  const dispatch = useDispatch();
  const { isDrawerOpen } = useSelector((state) => state.page);
  return (
    <>
      <Header />
      <div className='layout min-h-main'>{children}</div>
      <Drawer title='設定' isOpen={isDrawerOpen} onClose={() => dispatch(drawerClose())}>
        <span>メニュー</span>
      </Drawer>
      {isDrawerOpen ? (
        <div className='absolute top-0 left-0 w-full h-full bg-gray-200 opacity-80'></div>
      ) : null}
    </>
  );
};
