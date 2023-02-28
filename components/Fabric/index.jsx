import Image from 'next/image';
import ecoPl from 'public/images/bask-eco-pl-test-image-01.jpg';
// import ShortDescription from 'components/ShortDescription';
import Description from '../Descritpion';

const title = 'Materiał';
const description = `Pragniemy podzielić się naszą wiedzą i doświadczeniem, które wykorzystujemy w dążeniu do zdrowia i piękna. Podstawową wartością naszej marki jest chęć dawania przyjemności ze stosowania naszych produktów, które tworzymy dla Was z zachowaniem wszystkich standardów i norm. Dbamy o każdy detal aby jak najlepiej spełniać Państwa oczekiwania.`;

export default function Fabric({ shortDescription }) {
  return (
    <section className="w-full bg-gray-50 px-4 tablet:px-8 pb-20 mb-20">
      <div className="flex flex-col-reverse m-auto justify-center relative items-center laptop:items-end min-h-[60vh] max-w-screen-xl">
        <div className="relative block h-[500px] w-[100%] laptop:w-[40%] laptop:h-full laptop:absolute laptop:bottom-[-100px] laptop:left-0 desktop:bottom-[-160px] desktop:h-[120%]">
          <Image src={ecoPl} layout="fill" objectFit="cover" quality={80} priority alt="" />
        </div>

        {shortDescription ? null : (
          // <ShortDescription title={title} description={description} moreHref={moreHref} moreAs={moreAs} />
          <Description title={title} description={description} />
        )}
      </div>
    </section>
  );
}
