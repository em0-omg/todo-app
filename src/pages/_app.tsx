import type { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';
import '@/styles/globals.css';

import { AppProvider } from '@/providers';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />;
    </AppProvider>
  );
}

export default App;
