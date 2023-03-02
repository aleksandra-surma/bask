import Image from 'next/image';
import uvHealth from 'public/images/bask-uv-health.jpg';
import { healthTextContent } from 'data/textData';
import ShortDescription from 'components/ShortDescription';
import Description from '../Descritpion';

const moreHref = '/uvEducation';
const moreAs = '/edukacja-uv';

export default function UvHealth({ shortDescription }) {
  return (
    <section className="w-full bg-gray-50 px-4 tablet:px-8 pb-20 mb-[100px]">
      <div className="flex flex-col-reverse m-auto justify-center relative items-center laptop:items-end min-h-[60vh] max-w-screen-xl">
        <div className="relative block h-[500px] w-[100%] laptop:w-[40%] laptop:h-full laptop:absolute laptop:bottom-[-100px] laptop:left-0 desktop:bottom-[-200px] desktop:h-[120%]">
          <Image src={uvHealth} layout="fill" objectFit="cover" quality={80} priority alt="" />
        </div>
        {shortDescription ? (
          <ShortDescription title={healthTextContent.title} description={healthTextContent.shortDescription} moreHref={moreHref} moreAs={moreAs} />
        ) : (
          <Description title={healthTextContent.title} description={healthTextContent.description} />
        )}
        s
      </div>
    </section>

    // <section className="w-full bg-gray-50 px-4 pb-20 tablet:px-8">
    //   <div className="flex flex-col-reverse m-auto justify-center relative items-center laptop:items-end min-h-[60vh] max-w-screen-xl">
    //     <div className="relative block h-[540px] w-[100%] laptop:w-[35%] desktop:h-[110%] laptop:absolute laptop:top-[-120px] laptop:left-0 desktopBig:left-[-160px]">
    //       <Image src={uvHealth} layout="fill" objectFit="cover" quality={80} priority alt="" />
    //     </div>
    //
    //   </div>
    // </section>
  );
}
