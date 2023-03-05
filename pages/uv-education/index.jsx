import BaseLayout from 'components/BaseLayout';
import Image from 'next/image';
import uvHealth from 'public/images/bask-uv-health.jpg';
import { fabricTextContent, healthTextContent } from 'data/textData';
import Description from 'components/Descritpion';

const title = '';
const description = '';
const canonical = '';
const ogData = {};

export default function UvEducation() {
  const seoData = { title, description, canonical, ogData };
  const indexingCondition = process.env.NEXT_PUBLIC_APP_STAGE === 'PROD';

  return (
    <BaseLayout seoData={seoData} indexPage={indexingCondition}>
      <section className="w-full px-4 tablet:px-8 pb-20">
        <div className="flex flex-col-reverse m-auto relative items-center laptop:items-end min-h-[60vh] max-w-screen-xl">
          <div className="relative block h-[500px] w-[100%] laptop:w-[40%] laptop:h-[80%] laptop:absolute laptop:top-[0] laptop:left-0 desktop:h-[60%] mt-12">
            <Image src={uvHealth} layout="fill" objectFit="cover" quality={80} priority alt="" />
          </div>
          <Description title={healthTextContent.firstSection.title} description={healthTextContent.firstSection.description} />
        </div>
      </section>

      <section className="w-full bg-gray-50 mt-10 px-4 tablet:px-8 pb-20 mb-[100px]">
        <div className="flex flex-col m-auto justify-center relative items-center laptop:items-end min-h-[60vh] max-w-screen-xl">
          <div className="relative block h-[440px] w-[100%] laptop:w-[40%] laptop:h-full laptop:absolute laptop:bottom-[-100px] laptop:right-0 desktop:top-[-60px] desktop:h-3/4">
            <Image src={uvHealth} layout="fill" objectFit="cover" quality={80} priority alt="" />
          </div>
          <div>
            <Description title={healthTextContent.secondSection.title} description={healthTextContent.secondSection.description} />
          </div>
        </div>
      </section>

      <section className="w-full px-4 tablet:px-8 pb-20">
        <div className="flex flex-col-reverse m-auto relative items-center laptop:items-end min-h-[60vh] max-w-screen-xl">
          <div className="relative block h-[500px] w-[100%] laptop:w-[40%] laptop:h-[80%] laptop:absolute laptop:top-[0] laptop:left-0 desktop:h-[80%] mt-12">
            <Image src={uvHealth} layout="fill" objectFit="cover" quality={80} priority alt="" />
          </div>
          <Description title={fabricTextContent.secondSection.title} description={fabricTextContent.secondSection.description} />
        </div>
      </section>

      {/* <EcoPl /> */}
    </BaseLayout>
  );
}
