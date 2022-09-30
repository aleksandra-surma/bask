import Image from 'next/image';
import uvHealth from 'public/images/bask-uv-health-test-image-01.jpg';

export default function UvHealth() {
  return (
    <section className="w-full bg-gray-50 mt-[10vh]">
      <div className="m-auto justify-between relative items-center min-h-[60vh] max-w-screen-xl flex">
        <div>
          <div className="w-[35%] h-[640px] absolute top-[-100px] left-[-160px]">
            <Image src={uvHealth} layout="fill" objectFit="cover" quality={80} priority alt="" />
          </div>
        </div>
        <div className="w-1/2">
          <h2>UV A ZDROWIE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, placeat quis. Accusamus ad architecto asperiores autem, consequatur
            culpa deleniti distinctio et facere facilis fugiat incidunt inventore iste libero nesciunt non nulla porro qui recusandae rerum vero vitae
            voluptate voluptatibus! Amet, dolore doloremque eaque eligendi expedita, fugit incidunt minima nihil quam quas qui recusandae, tenetur
            voluptate. Aliquid culpa deserunt optio, perspiciatis quasi rerum temporibus! Beatae excepturi labore neque non nostrum.
          </p>
          <div>
            <p>Więcej...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
