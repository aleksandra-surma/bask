import Image from 'next/image';
import hero from 'public/images/bask-hero-kids-pinaples.jpg';
// import hero1 from 'public/images/bask-hero-test-image-01.jpg';
// import hero2 from 'public/images/bask-hero-test-image-02.jpg';
// import hero3 from 'public/images/bask-hero-test-image-03.jpg';
// import hero4 from 'public/images/bask-hero-test-image-04.jpg';

export default function HeroPhotos() {
  return (
    <section className="flex relative h-4/5 h-[90vh] left-0 laptop:left-[unset] w-full">
      <div className="flex relative justify-center items-center w-full">
        <Image src={hero} layout="fill" objectFit="cover" quality={80} priority alt="" />
      </div>
      {/* <div className="flex relative justify-center items-center w-full tablet:w-1/2 laptop:w-1/4"> */}
      {/*  <Image src={hero1} layout="fill" objectFit="cover" quality={80} priority className="hero-photos__image" alt="" /> */}
      {/* </div> */}
      {/* <div className="hidden relative tablet:flex justify-center items-center tablet:w-1/2 laptop:w-1/4 bg-gray-200"> */}
      {/*  <Image src={hero2} layout="fill" objectFit="cover" quality={80} priority className="hero-photos__image" alt="" /> */}
      {/* </div> */}
      {/* <div className="hidden relative laptop:flex justify-center items-center laptop:w-1/4 bg-gray-100"> */}
      {/*  <Image src={hero3} layout="fill" objectFit="cover" quality={80} priority className="hero-photos__image" alt="" /> */}
      {/* </div> */}
      {/* <div className="hidden relative laptop:flex justify-center items-center laptop:w-1/4 bg-gray-200"> */}
      {/*  <Image src={hero4} layout="fill" objectFit="cover" quality={80} priority className="hero-photos__image" alt="" /> */}
      {/* </div> */}
    </section>
  );
}
