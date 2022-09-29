import BaseLayout from 'components/BaseLayout';
import HeroPhotos from 'components/HeroPhotos';
import HighlightedOffers from 'components/HighlightedOffers';

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const canonical = '';
const ogData = {};

export default function Home() {
  const seoData = { title, description, canonical, ogData };

  return (
    <BaseLayout seoData={seoData}>
      <HeroPhotos />

      <HighlightedOffers />

      <section className="w-full bg-gray-50 my-[10vh]">
        <div className="m-auto justify-between relative items-center min-h-[60vh] max-w-screen-xl flex">
          <div className="w-1/2">
            <div className="w-[25%] h-full absolute bottom-[-100px] left-0 bg-blue-300">Photo</div>
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

      <section className="w-full">
        <div className="m-auto justify-between relative items-center min-h-[60vh] max-w-screen-xl flex">
          <div className="w-1/2">
            <h2>ECO + PL</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, placeat quis. Accusamus ad architecto asperiores autem, consequatur
              culpa deleniti distinctio et facere facilis fugiat incidunt inventore iste libero nesciunt non nulla porro qui recusandae rerum vero
              vitae voluptate voluptatibus! Amet, dolore doloremque eaque eligendi expedita, fugit incidunt minima nihil quam quas qui recusandae,
              tenetur voluptate. Aliquid culpa deserunt optio, perspiciatis quasi rerum temporibus! Beatae excepturi labore neque non nostrum.
            </p>
            <div>
              <p>Więcej...</p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-[50vh] h-[50vh] absolute top-0 right-[-200px] bg-blue-300">Photo</div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 mt-[10vh]">
        <div className="m-auto justify-between relative items-center min-h-[60vh] max-w-screen-xl flex">
          <div className="w-1/2">
            <div className="w-[35%] h-[640px] absolute top-[-100px] left-[-160px] bg-blue-300">Photo</div>
          </div>
          <div className="w-1/2">
            <h2>UV A ZDROWIE</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, placeat quis. Accusamus ad architecto asperiores autem, consequatur
              culpa deleniti distinctio et facere facilis fugiat incidunt inventore iste libero nesciunt non nulla porro qui recusandae rerum vero
              vitae voluptate voluptatibus! Amet, dolore doloremque eaque eligendi expedita, fugit incidunt minima nihil quam quas qui recusandae,
              tenetur voluptate. Aliquid culpa deserunt optio, perspiciatis quasi rerum temporibus! Beatae excepturi labore neque non nostrum.
            </p>
            <div>
              <p>Więcej...</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="m-auto justify-between items-center min-h-[60vh] max-w-screen-xl flex">
          <div className="flex flex-col justify-between bg-lime-100 w-[20%] h-[420px]">
            <div className="h-[320px] bg-lime-300">photo</div>
            <p>Product title</p>
            <p>120zł</p>
          </div>
          <div className="flex flex-col justify-between bg-lime-200 w-[20%] h-[420px]">
            <div className="h-[320px] bg-lime-300">photo</div>
            <p>Product title</p>
            <p>120zł</p>
          </div>
          <div className="flex flex-col justify-between bg-lime-100 w-[20%] h-[420px]">
            <div className="h-[320px] bg-lime-300">photo</div>
            <p>Product title</p>
            <p>120zł</p>
          </div>
          <div className="flex flex-col justify-between bg-lime-200 w-[20%] h-[420px]">
            <div className="h-[320px] bg-lime-300">photo</div>
            <p>Product title</p>
            <p>120zł</p>
          </div>
        </div>
      </section>

      {/* <HiglightedOffers /> */}
      {/* <AboutUs /> */}
      {/* <IdeaBask /> */}
      {/* <AboutUs /> */}
    </BaseLayout>
  );
}
