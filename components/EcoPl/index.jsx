import Image from 'next/image';
import ecoPl from 'public/images/bask-eco-pl-test-image-01.jpg';
import ShortDescription from 'components/ShortDescription';
import Description from '../Descritpion';

const title = 'ECO + PL';
const description = `Pragniemy podzielić się naszą wiedzą i doświadczeniem, które wykorzystujemy w dążeniu do zdrowia i piękna. Podstawową wartością naszej marki jest chęć dawania przyjemności ze stosowania naszych produktów, które tworzymy dla Was z zachowaniem wszystkich standardów i norm. Dbamy o każdy detal aby jak najlepiej spełniać Państwa oczekiwania.`;
const moreHref = '/about-company';
const moreAs = '/o-firmie';

export default function EcoPl({ shortDescription = false }) {
  return (
    <section className="w-full px-4 tablet:px-8 desktop:my-20 overflow-hidden">
      <div className="flex flex-col m-auto justify-center relative items-center laptop:items-start min-h-[60vh] max-w-screen-xl">
        {shortDescription ? (
          <ShortDescription title={title} description={description} moreHref={moreHref} moreAs={moreAs} />
        ) : (
          <Description title={title} description={description} />
        )}

        <div className="relative block w-full h-[500px] laptop:w-[45%] desktop:w-3/5 laptop:h-[80%] desktop:h-[100%] laptop:absolute desktop:mt-0 laptop:top-[10%] desktop:top-0 laptop:right-[-40px] desktop:right-[-200px]">
          <Image src={ecoPl} layout="fill" objectFit="cover" quality={80} priority alt="" />
        </div>
      </div>
    </section>
  );
}
