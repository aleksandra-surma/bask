import Header from 'components/Header';
import Footer from 'components/Footer';
import HeadMeta from 'components/HeadMeta';
import { NextSeo } from 'next-seo';
// import { useState } from 'react';
import InfoBar from 'components/InfoBar';

// todo: make airtable feature table for info bar
// todo: change default state to false and make it depends on airtable data

export default function BaseLayout({ children, seoData }) {
  const { title, description, canonical, ogData } = seoData;
  // const [barVisible, setBarVisible] = useState(false);
  const barVisible = false;

  return (
    <>
      <HeadMeta />

      <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} />

      <main className="flex flex-col items-center justify-center">
        {barVisible ? <InfoBar /> : null}

        <Header />

        {children}

        <Footer />
      </main>
    </>
  );
}
