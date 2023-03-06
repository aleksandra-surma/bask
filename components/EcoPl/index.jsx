import Image from 'next/image';
import ecoPl from 'public/images/bask-box-top.jpg';
import { ecoTextContent } from 'data/textData';
import ShortDescription from 'components/ShortDescription';
import Description from '../Descritpion';

const moreHref = '/about-company';
const moreAs = '/o-firmie';

export default function EcoPl({ shortDescription = false }) {
  return (
    <section className="w-full px-4 tablet:px-8 desktop:my-20 overflow-hidden">
      <div className="flex flex-col m-auto justify-center relative items-center laptop:items-start min-h-[60vh] max-w-screen-xl">
        {shortDescription ? (
          <ShortDescription title={ecoTextContent.title} description={ecoTextContent.shortDescription} moreHref={moreHref} moreAs={moreAs} />
        ) : (
          <Description title={ecoTextContent.title} description={ecoTextContent.description} />
        )}

        <div className="relative block w-full h-[500px] laptop:w-[40%] desktop:w-2/5 laptop:h-[80%] desktop:h-[100%] laptop:absolute desktop:mt-0 laptop:top-[10%] desktop:top-0 laptop:right-[-40px]">
          <Image src={ecoPl} layout="fill" objectFit="cover" quality={80} priority alt="" />
        </div>
      </div>
    </section>
  );
}
