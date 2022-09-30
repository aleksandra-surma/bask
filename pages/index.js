import BaseLayout from 'components/BaseLayout';
import HeroPhotos from 'components/HeroPhotos';
import HighlightedOffers from 'components/HighlightedOffers';
import AboutCompany from 'components/AboutCompany';
import BestsellersOffers from 'components/BestsellersOffers';
import EcoPl from 'components/EcoPl';
import UvHealth from 'components/UvHealth';

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const canonical = '';
const ogData = {};

export default function Home() {
  const seoData = { title, description, canonical, ogData };

  return (
    <BaseLayout seoData={seoData}>
      <HeroPhotos />

      <HighlightedOffers />

      <AboutCompany />

      <EcoPl />

      <UvHealth />

      <BestsellersOffers />
    </BaseLayout>
  );
}
