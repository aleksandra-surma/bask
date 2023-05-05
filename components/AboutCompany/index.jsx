import Image from 'next/image';
import about from 'public/images/bask-about-us.jpg';
import { aboutUsTextContent } from 'data/textData';
import ShortDescription from 'components/ShortDescription';
import Description from '../Descritpion';

const moreHref = '/about-company';
const moreAs = '/o-firmie';

export default function AboutUs({ shortDescription }) {
  return (
    <section className="w-full bg-gray-50 px-4 pb-20 tablet:px-8">
      <div className="relative m-auto flex min-h-[60vh] max-w-screen-xl flex-col-reverse items-center justify-center laptop:items-end">
        <div className="relative block h-[500px] w-[100%] laptop:absolute laptop:bottom-[-100px] laptop:left-0 laptop:h-full laptop:w-[30%] desktop:bottom-[-200px] desktop:h-[120%]">
          <Image src={about} layout="fill" objectFit="cover" quality={80} priority alt="" />
        </div>

        {shortDescription ? (
          <ShortDescription title={aboutUsTextContent.title} description={aboutUsTextContent.shortDescription} moreHref={moreHref} moreAs={moreAs} />
        ) : (
          <Description title={aboutUsTextContent.title} description={aboutUsTextContent.description} />
        )}
      </div>
    </section>
  );
}
