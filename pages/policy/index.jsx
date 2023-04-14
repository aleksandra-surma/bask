import BaseLayout from 'components/BaseLayout';

const title = '';
const description = '';
const canonical = '';
const ogData = {};

export default function Policy() {
  const seoData = { title, description, canonical, ogData };

  return (
    <BaseLayout seoData={seoData}>
      <div className="mx-auto mb-12 mt-10 max-w-screen-xl px-4 sm:px-6">
        <div className="flex flex-col">
          <div className="w-full px-4 sm:px-0 tablet:px-6 ">
            <h3 className="text-4xl font-bold leading-6 text-gray-900">Polityka prywatności</h3>
            <p className="mt-1 py-8 text-sm text-gray-700 tablet:text-base tablet:leading-6">Już wkrótce...</p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
