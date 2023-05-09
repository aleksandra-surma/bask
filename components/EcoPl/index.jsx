import Image from 'next/image';
import ecoPl from 'public/images/bask-box-top.jpg';
import { ecoTextContent } from 'data/textData';
import ShortDescription from 'components/ShortDescription';
import Description from '../Descritpion';

const moreHref = '/about-company';
const moreAs = '/o-firmie';

export default function EcoPl({ shortDescription = false }) {
  return (
    <section className="w-full overflow-hidden px-4 tablet:px-8 desktop:my-20">
      <div className="relative m-auto flex min-h-[60vh] max-w-screen-xl flex-col items-center justify-center laptop:items-start">
        {shortDescription ? (
          <ShortDescription title={ecoTextContent.title} description={ecoTextContent.shortDescription} moreHref={moreHref} moreAs={moreAs} />
        ) : (
          <Description title={ecoTextContent.title} description={ecoTextContent.description} />
        )}

        <div className="relative block h-[500px] w-full laptop:absolute laptop:right-[-40px] laptop:top-[10%] laptop:h-[80%] laptop:w-[40%] desktop:top-0 desktop:mt-0 desktop:h-[100%] desktop:w-2/5">
          <Image src={ecoPl} layout="fill" objectFit="cover" quality={80} alt="" />
        </div>
      </div>
    </section>
  );
}
