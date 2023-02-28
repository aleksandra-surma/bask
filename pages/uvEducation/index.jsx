import BaseLayout from 'components/BaseLayout';

const title = '';
const description = '';
const canonical = '';
const ogData = {};

export default function UvEducation() {
  const seoData = { title, description, canonical, ogData };
  const indexingCondition = process.env.NEXT_PUBLIC_APP_STAGE === 'PROD';

  return (
    <BaseLayout seoData={seoData} indexPage={indexingCondition}>
      <p>UV edukacja</p>
    </BaseLayout>
  );
}
