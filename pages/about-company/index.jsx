import BaseLayout from 'components/BaseLayout';
import EcoPl from 'components/EcoPl';
import Fabric from 'components/Fabric';
import AboutUs from 'components/AboutCompany';

const title = '';
const description = '';
const canonical = '';
const ogData = {};

export default function AboutCompany() {
  const seoData = { title, description, canonical, ogData };
  const indexingCondition = process.env.NEXT_PUBLIC_APP_STAGE === 'PROD';

  return (
    <BaseLayout seoData={seoData} indexPage={indexingCondition}>
      <AboutUs />

      <EcoPl />

      <Fabric />
    </BaseLayout>
  );
}
