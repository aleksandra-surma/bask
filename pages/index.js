import BaseLayout from 'components/BaseLayout';
import HeroPhotos from 'components/HeroPhotos';
import HighlightedOffers from 'components/HighlightedOffers';
import AboutCompany from 'components/AboutCompany';
import EcoPl from 'components/EcoPl';
import UvHealth from 'components/UvHealth';
import { getFilteredRecords } from 'services/airtable/getAllRecords';
import { db } from 'data/dbData';

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const canonical = `${process.env.NEXT_PUBLIC_CANONICAL_URL_BASE}`;
const ogData = {};

export default function Home({ products }) {
  const seoData = { title, description, canonical, ogData };
  const indexingCondition = process.env.NEXT_PUBLIC_APP_STAGE === 'PROD';

  return (
    <BaseLayout seoData={seoData} indexPage={indexingCondition}>
      <HeroPhotos />

      <HighlightedOffers products={products} />

      <AboutCompany shortDescription />

      <EcoPl shortDescription />

      <UvHealth shortDescription />

      {/* <BestsellersOffers /> */}
    </BaseLayout>
  );
}

export async function getServerSideProps() {
  const allProducts = await getFilteredRecords(process.env.AIRTABLE_PRODUCTS_BASE, db.products.products, "isHighlighted = '1'");

  return {
    props: {
      products: JSON.parse(JSON.stringify(allProducts)),
      // strange solution but works https://github.com/vercel/next.js/issues/11993#issuecomment-879857441 //todo: handle it in a better way
    },
  };
}
