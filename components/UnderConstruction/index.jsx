import Image from 'next/image';
import hero from 'public/images/bask-hero-kids-pinaples.jpg';

export default function UnderConstruction() {
  return (
    <section className="flex h-screen items-center justify-center">
      {/* <div className="flex relative justify-center h-full w-full"> */}
      <div className="z-10">
        <h2 className="text-5xl text-white tablet:text-6xl desktop:text-8xl">STRONA W BUDOWIE</h2>
        <h2 className="text-5xl text-white tablet:text-6xl desktop:text-8xl">STRONA W BUDOWIE</h2>
        <h2 className="text-5xl text-white tablet:text-6xl desktop:text-8xl">STRONA W BUDOWIE</h2>
        <h2 className="text-5xl text-white tablet:text-6xl desktop:text-8xl">STRONA W BUDOWIE</h2>
        <h2 className="text-5xl text-white tablet:text-6xl desktop:text-8xl">STRONA W BUDOWIE</h2>
        <h2 className="text-5xl text-white tablet:text-6xl desktop:text-8xl">STRONA W BUDOWIE</h2>
        <h2 className="text-5xl text-white tablet:text-6xl desktop:text-8xl">STRONA W BUDOWIE</h2>
      </div>
      <Image src={hero} layout="fill" objectFit="cover" quality={80} priority alt="" />
      {/* </div> */}
    </section>
  );
}
