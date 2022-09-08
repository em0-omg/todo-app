import type { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';
import '@/styles/globals.css';

import Layout from '@/components/Layout/Layout';

import { AppProvider } from '@/providers';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default App;
