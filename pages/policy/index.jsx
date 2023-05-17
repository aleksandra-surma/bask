import BaseLayout from 'components/BaseLayout';
import { entries } from 'data/contentful';
import { getEntry } from 'services/contentful/getContent';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import richTextOptions from 'utils/contentful/richTextOptions';

const title = 'Bask - Polityka prywatności';
const description = '';
const canonical = `${process.env.NEXT_PUBLIC_CANONICAL_URL_BASE}/polityka-prywatnosci`;
const ogData = {};

export async function getStaticProps() {
  const {
    fields: { richText },
  } = await getEntry(entries.policy);

  return {
    props: {
      richText,
    },
  };
}

export default function Policy({ richText }) {
  const seoData = { title, description, canonical, ogData };

  return (
    <BaseLayout seoData={seoData}>
      <div className="mx-auto mb-12 mt-10 max-w-screen-xl px-4 sm:px-6">
        <div className="flex flex-col">
          <div className="w-full px-4 sm:px-0 tablet:px-6 ">
            <div className="w-full px-4 sm:px-0 tablet:px-6 ">{documentToReactComponents(richText, richTextOptions)}</div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
