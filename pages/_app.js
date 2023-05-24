import 'styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import HeadMeta from 'components/HeadMeta';
import { BasketProvider } from '../contexts/BasketContext';
// import { SessionProvider } from 'next-auth/react';
// import HeadMeta from 'components/Page/HeadMeta';

/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```

        tailwind UI requirement
*/

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // <SessionProvider session={session}>
    <BasketProvider>
      <HeadMeta />
      <DefaultSeo {...SEO} />

      <Component {...pageProps} />
    </BasketProvider>
    // </SessionProvider>
  );
}

export default MyApp;
