import Image from 'next/image';
import uvHealth from 'public/images/bask-uv-health.jpg';
import { healthTextContent } from 'data/textData';
import ShortDescription from 'components/ShortDescription';
import Description from '../Descritpion';

const moreHref = '/uv-education';
const moreAs = '/edukacja-uv';

export default function UvHealth({ shortDescription }) {
  return (
    <section className="mb-[100px] w-full bg-gray-50 px-4 pb-20 tablet:px-8">
      <div className="relative m-auto flex min-h-[60vh] max-w-screen-xl flex-col-reverse items-center justify-center laptop:items-end">
        <div className="relative block h-[500px] w-[100%] laptop:absolute laptop:bottom-[-100px] laptop:left-0 laptop:h-full laptop:w-[40%] desktop:bottom-[-200px] desktop:h-[120%]">
          <Image src={uvHealth} layout="fill" objectFit="cover" quality={80} priority alt="" />
        </div>
        {shortDescription ? (
          <ShortDescription
            title={healthTextContent.firstSection.title}
            description={healthTextContent.firstSection.shortDescription}
            moreHref={moreHref}
            moreAs={moreAs}
          />
        ) : (
          <Description title={healthTextContent.firstSection.title} description={healthTextContent.firstSection.description} />
        )}
      </div>
    </section>
  );
}
