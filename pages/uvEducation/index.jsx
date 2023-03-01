import BaseLayout from 'components/BaseLayout';
import EcoPl from 'components/EcoPl';
import UvHealth from 'components/UvHealth';

const title = '';
const description = '';
const canonical = '';
const ogData = {};

export default function UvEducation() {
  const seoData = { title, description, canonical, ogData };
  const indexingCondition = process.env.NEXT_PUBLIC_APP_STAGE === 'PROD';

  return (
    <BaseLayout seoData={seoData} indexPage={indexingCondition}>
      <UvHealth />

      <EcoPl />
    </BaseLayout>
  );
}
