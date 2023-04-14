import BaseLayout from 'components/BaseLayout';
import EnterParagraph from 'components/StoreBask/EnterParagraph';
import Products from 'components/StoreBask/Products';
import { getAllRecords } from 'services/airtable/getAllRecords';
import { db } from 'data/dbData';

const title = '';
const description = '';
const canonical = '';
const ogData = {};

export default function StoreBask({ products }) {
  const seoData = { title, description, canonical, ogData };
  const indexingCondition = process.env.NEXT_PUBLIC_APP_STAGE === 'PROD';

  return (
    <BaseLayout seoData={seoData} indexPage={indexingCondition}>
      <div className="m-auto my-8 flex w-full max-w-screen-xl flex-col px-4 text-gray-700 tablet:px-8 laptop:my-20">
        <EnterParagraph />
        {/* <Filters /> */}
        <Products products={products} />
      </div>
    </BaseLayout>
  );
}

export async function getServerSideProps() {
  const dbId = process.env.AIRTABLE_PRODUCTS_BASE;
  const subDb = db.products.products;

  const allProducts = await getAllRecords(dbId, subDb);

  return {
    props: {
      products: allProducts,
    },
  };
}
