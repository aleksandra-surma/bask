import BaseLayout from 'components/BaseLayout';
import HeroPhotos from 'components/HeroPhotos';
import HighlightedOffers from 'components/HighlightedOffers';
import AboutCompany from 'components/AboutCompany';
// import BestsellersOffers from 'components/BestsellersOffers';
import EcoPl from 'components/EcoPl';
import UvHealth from 'components/UvHealth';
import UnderConstruction from 'components/UnderConstruction';

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const canonical = '';
const ogData = {};

export default function Home() {
  const seoData = { title, description, canonical, ogData };
  const indexingCondition = process.env.NEXT_PUBLIC_APP_STAGE === 'PROD';
  const isUnderConstruction = false;

  return (
    <div>
      {isUnderConstruction ? (
        <UnderConstruction />
      ) : (
        <BaseLayout seoData={seoData} indexPage={indexingCondition}>
          <HeroPhotos />

          <HighlightedOffers />

          <AboutCompany shortDescription />

          <EcoPl shortDescription />

          <UvHealth shortDescription />

          {/* <BestsellersOffers /> */}
        </BaseLayout>
      )}
    </div>
  );
}
