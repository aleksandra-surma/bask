import Header from 'components/Header';
import Footer from 'components/Footer';
import HeadMeta from 'components/HeadMeta';
import { NextSeo } from 'next-seo';

export default function BaseLayout({ children, seoData }) {
  const { title, description, canonical, ogData } = seoData;

  return (
    <>
      <HeadMeta />

      <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} />

      <main className="min-h-full flex flex-col items-center justify-center">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
