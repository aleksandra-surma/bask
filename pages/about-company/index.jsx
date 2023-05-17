import BaseLayout from 'components/BaseLayout';
import EcoPl from 'components/EcoPl';
import Fabric from 'components/Fabric';
import AboutUs from 'components/AboutCompany';

const title = 'Bask - Innowacyjne Stroje Kąpielowe dla Dzieci z Ochroną UV';
const description =
  'W Bask troszczymy się o zdrowie skóry dzieci. Oferujemy stroje kąpielowe z ochroną UV, które zapobiegają szkodliwemu promieniowaniu. Dowiedz się więcej o naszej pasji i wybierz nasze produkty, które łączą styl z ochroną Twojego dziecka!';
const canonical = `${process.env.NEXT_PUBLIC_CANONICAL_URL_BASE}/o-firmie`;
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
