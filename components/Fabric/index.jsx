import Image from 'next/image';
import ecoPl from 'public/images/bask-eco-pl-test-image-01.jpg';
import { fabricTextContent } from 'data/textData';
// import ShortDescription from 'components/ShortDescription';
import Description from '../Descritpion';

export default function Fabric({ shortDescription }) {
  return (
    <section className="w-full bg-gray-50 px-4 tablet:px-8 pb-20 mb-20">
      <div className="flex flex-col-reverse m-auto justify-center relative items-center laptop:items-end min-h-[60vh] max-w-screen-xl">
        <div className="relative block h-[500px] w-[100%] laptop:w-[40%] laptop:h-full laptop:absolute laptop:bottom-[-100px] laptop:left-0 desktop:bottom-[-160px] desktop:h-[120%]">
          <Image src={ecoPl} layout="fill" objectFit="cover" quality={80} priority alt="" />
        </div>

        {shortDescription ? null : (
          // <ShortDescription title={title} description={description} moreHref={moreHref} moreAs={moreAs} />
          <Description title={fabricTextContent.title} description={fabricTextContent.description} />
        )}
      </div>
    </section>
  );
}
