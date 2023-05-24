import 'styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import HeadMeta from 'components/HeadMeta';
import App from 'next/app';
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

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  if (appContext.ctx.res?.statusCode === 404) {
    appContext.ctx.res.writeHead(301, { Location: '/' });
    appContext.ctx.res.end();
    return {};
  }

  return { ...appProps };
};

export default MyApp;
