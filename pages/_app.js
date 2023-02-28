import 'styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import HeadMeta from 'components/HeadMeta';
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
    <>
      <HeadMeta />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
    // </SessionProvider>
  );
}

export default MyApp;
