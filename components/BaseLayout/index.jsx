import Header from 'components/Header';
import Footer from 'components/Footer';
import { NextSeo } from 'next-seo';
import InfoBar from 'components/InfoBar';
import useFlags from 'hooks/useFlags';

// T-17 Change default state to false and make it depends on airtable data

export default function BaseLayout({ children, seoData, indexPage = false }) {
  const { title, description, canonical, ogData } = seoData;
  const { showNewsBar } = useFlags();
  return (
    <>
      <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} noindex={!indexPage} nofollow={!indexPage} />

      <main className="flex flex-col items-center justify-center bg-white">
        {showNewsBar ? <InfoBar /> : null}

        <Header />

        {children}

        <Footer />
      </main>
    </>
  );
}
