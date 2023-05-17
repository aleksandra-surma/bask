import BaseLayout from 'components/BaseLayout';
import Image from 'next/image';
import uvHealth from 'public/images/bask-uv-health.jpg';
import uvProtection from 'public/images/uv-protection-and-fabric.jpg';
import uvRadiation from 'public/images/uv-radiation.jpg';
import { fabricTextContent, healthTextContent } from 'data/textData';
import Description from 'components/Descritpion';

const title = 'Bask - Promieniowanie UV i Zdrowie Dzieci - Wiedza i Edukacja';
const description =
  'Dowiedz się więcej o wpływie promieniowania UV na zdrowie dzieci. W naszym artykule znajdziesz informacje o ryzykach poparzeń słonecznych, przedwczesnym starzeniu się skóry, raku skóry i innych schorzeniach. Bask to źródło wiedzy i ochrony dla Twojego dziecka!';
const canonical = `${process.env.NEXT_PUBLIC_CANONICAL_URL_BASE}`;
const ogData = {};

export default function UvEducation() {
  const seoData = { title, description, canonical, ogData };
  const indexingCondition = process.env.NEXT_PUBLIC_APP_STAGE === 'PROD';

  return (
    <BaseLayout seoData={seoData} indexPage={indexingCondition}>
      <section className="w-full px-4 pb-20 tablet:px-8">
        <div className="relative m-auto flex min-h-[60vh] max-w-screen-xl flex-col-reverse items-center laptop:items-end">
          <div className="relative mt-12 block h-[500px] w-[100%] tablet:h-[720px] laptop:absolute laptop:left-0 laptop:top-[0] laptop:h-[80%] laptop:w-[40%] desktop:h-[60%]">
            <Image src={uvHealth} layout="fill" objectFit="cover" quality={80} priority alt="" />
          </div>
          <Description title={healthTextContent.firstSection.title} description={healthTextContent.firstSection.description} />
        </div>
      </section>

      <section className="mb-[100px] mt-10 w-full bg-gray-50 px-4 pb-20 tablet:px-8">
        <div className="relative m-auto flex min-h-[60vh] max-w-screen-xl flex-col-reverse items-center justify-center laptop:flex-col laptop:items-end">
          <div className="relative block h-[500px] w-[100%] tablet:h-[720px] laptop:absolute laptop:bottom-[-100px] laptop:right-0 laptop:h-full laptop:w-[40%] desktop:top-[-60px] desktop:h-3/4">
            <Image src={uvRadiation} layout="fill" objectFit="cover" quality={80} alt="" />
          </div>
          <div>
            <Description title={healthTextContent.secondSection.title} description={healthTextContent.secondSection.description} />
          </div>
        </div>
      </section>

      <section className="w-full px-4 pb-20 tablet:px-8">
        <div className="relative m-auto flex min-h-[60vh] max-w-screen-xl flex-col-reverse items-center laptop:items-end">
          <div className="relative mt-12 block h-[500px] w-[100%] tablet:h-[720px] laptop:absolute laptop:left-0 laptop:top-[0] laptop:h-[80%] laptop:w-[40%] desktop:h-[80%]">
            <Image src={uvProtection} layout="fill" objectFit="cover" quality={80} alt="" />
          </div>
          <Description title={fabricTextContent.secondSection.title} description={fabricTextContent.secondSection.description} />
        </div>
      </section>

      {/* <EcoPl /> */}
    </BaseLayout>
  );
}
