import BaseLayout from 'components/BaseLayout';
import EnterParagraph from 'components/StoreBask/EnterParagraph';
import Products from 'components/StoreBask/Products';
import { getAllRecords } from 'services/airtable/getAllRecords';
import { db } from 'data/dbData';

const title = 'Bask - Stylowe Stroje Kąpielowe dla Dzieci z Ochroną UV';
const description =
  'Odkryj nasz sklep Bask z szerokim wyborem stylowych strojów kąpielowych dla dzieci, zapewniających skuteczną ochronę przed promieniowaniem UV. Wybierz jakość i modny wygląd dla Twojego dziecka. Sprawdź naszą kolekcję już dziś!';
const canonical = `${process.env.NEXT_PUBLIC_CANONICAL_URL_BASE}`;
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
