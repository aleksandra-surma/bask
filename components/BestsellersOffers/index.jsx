import Image from 'next/image';
import best1 from 'public/images/bask-offer-test-image-01.jpg';
import best2 from 'public/images/bask-offer-test-image-02.jpg';
import best3 from 'public/images/bask-offer-test-image-03.jpg';
import best4 from 'public/images/bask-offer-test-image-04.jpg';

export default function BestsellersOffers() {
  return (
    <section className="w-full max-w-screen-xl py-20">
      <h2 className="text-center font-semibold">BESTSELLERS</h2>
      <div className="m-auto justify-between items-center min-h-[60vh] flex">
        <div className="flex flex-col justify-between w-[20%] h-[450px] cursor-pointer">
          <div className="relative h-[360px] rounded rounded-[8px] overflow-hidden">
            <Image src={best1} layout="fill" objectFit="cover" quality={70} className="transition-transform hover:scale-105 duration-300" />
          </div>
          <p className="ml-1 text-gray-600">Strój epic</p>
          <p className="ml-1 font-semibold">120zł</p>
        </div>
        <div className="flex flex-col justify-between w-[20%] h-[450px] cursor-pointer">
          <div className="relative h-[360px] rounded rounded-[8px] overflow-hidden">
            <Image src={best2} layout="fill" objectFit="cover" quality={70} className="transition-transform hover:scale-105 duration-300" />
          </div>
          <p className="text-gray-600">Strój jungle</p>
          <p className="font-semibold">90zł</p>
        </div>
        <div className="flex flex-col justify-between w-[20%] h-[450px] cursor-pointer">
          <div className="relative h-[360px] rounded rounded-[8px] overflow-hidden">
            <Image src={best3} layout="fill" objectFit="cover" quality={70} className="transition-transform hover:scale-105 duration-300" />
          </div>
          <p className="text-gray-600">Water kit</p>
          <p className="font-semibold">110zł</p>
        </div>
        <div className="flex flex-col justify-between w-[20%] h-[450px] cursor-pointer">
          <div className="relative h-[360px] rounded rounded-[8px] overflow-hidden">
            <Image src={best4} layout="fill" objectFit="cover" quality={70} className="transition-transform hover:scale-105 duration-300" />
          </div>
          <p className="text-gray-600">Super outfit</p>
          <p className="font-semibold">240zł</p>
        </div>
      </div>
    </section>
  );
}
