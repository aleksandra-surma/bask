import Header from 'components/Header';
import Footer from 'components/Footer';
import HeadMeta from 'components/HeadMeta';
import { NextSeo } from 'next-seo';
import InfoBar from 'components/InfoBar';
import useFlags from 'hooks/useFlags';

// T-15 Make airtable feature table switch for info bar
// T-17 Change default state to false and make it depends on airtable data

export default function BaseLayout({ children, seoData }) {
  const { title, description, canonical, ogData } = seoData;
  const { showNewsBar } = useFlags();
  return (
    <>
      <HeadMeta />

      <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} />

      <main className="flex flex-col items-center justify-center">
        {showNewsBar ? <InfoBar /> : null}

        <Header />

        {children}

        <Footer />
      </main>
    </>
  );
}
