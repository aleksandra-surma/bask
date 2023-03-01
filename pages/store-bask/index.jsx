import BaseLayout from 'components/BaseLayout';
import EnterParagraph from 'components/StoreBask/EnterParagraph';
// import Filters from 'components/StoreBask/Filters';
import Products from 'components/StoreBask/Products';

const title = '';
const description = '';
const canonical = '';
const ogData = {};

export default function StoreBask() {
  const seoData = { title, description, canonical, ogData };
  const indexingCondition = process.env.NEXT_PUBLIC_APP_STAGE === 'PROD';

  return (
    <BaseLayout seoData={seoData} indexPage={indexingCondition}>
      <div className="flex flex-col my-8 laptop:my-20 w-full m-auto max-w-screen-xl text-gray-700 px-4 tablet:px-8">
        <EnterParagraph />
        {/* <Filters /> */}
        <Products />
      </div>
    </BaseLayout>
  );
}
