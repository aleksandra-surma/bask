import Image from 'next/image';
import ecoPl from 'public/images/econyl-fabric.jpg';
import { fabricTextContent } from 'data/textData';
// import ShortDescription from 'components/ShortDescription';
import Description from '../Descritpion';

export default function Fabric({ shortDescription }) {
  return (
    <section className="mb-20 w-full bg-gray-50 px-4 pb-20 tablet:px-8">
      <div className="relative m-auto flex min-h-[60vh] max-w-screen-xl flex-col-reverse items-center justify-center laptop:items-end">
        <div className="relative block h-[500px] w-[100%] laptop:absolute laptop:bottom-[-100px] laptop:left-0 laptop:h-full laptop:w-[40%] desktop:top-[-60px] desktop:h-[80%]">
          <Image src={ecoPl} layout="fill" objectFit="cover" quality={80} alt="" />
        </div>

        {shortDescription ? null : (
          // <ShortDescription title={title} description={description} moreHref={moreHref} moreAs={moreAs} />
          <Description title={fabricTextContent.firstSection.title} description={fabricTextContent.firstSection.description} />
        )}
      </div>
    </section>
  );
}
