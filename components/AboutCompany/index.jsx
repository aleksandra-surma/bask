import Image from 'next/image';
import about from 'public/images/bask-about-test-image-01.jpg';

export default function AboutCompany() {
  return (
    <section className="w-full bg-gray-50 my-[10vh]">
      <div className="m-auto justify-between relative items-center min-h-[60vh] max-w-screen-xl flex">
        <div>
          <div className="w-[25%] h-full absolute bottom-[-100px] left-0 bg-blue-300">
            <Image src={about} layout="fill" objectFit="cover" quality={80} priority alt="" />
          </div>
        </div>
        <div className="w-1/2">
          <h2>O NAS</h2>
          <p>
            Pragniemy podzielić się naszą wiedzą i doświadczeniem, które wykorzystujemy w dążeniu do zdrowia i piękna. Podstawową wartością naszej
            marki jest chęć dawania przyjemności ze stosowania naszych produktów, które tworzymy dla Was z zachowaniem wszystkich standardów i norm.
            Dbamy o każdy detal aby jak najlepiej spełniać Państwa oczekiwania.
          </p>
          <div>
            <p>Więcej...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
