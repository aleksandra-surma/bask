import Image from 'next/image';
import best1 from 'public/images/bask-offer-test-image-01.jpg';
import best2 from 'public/images/bask-offer-test-image-02.jpg';
import best3 from 'public/images/bask-offer-test-image-03.jpg';
import best4 from 'public/images/bask-offer-test-image-04.jpg';

export default function BestsellersOffers() {
  return (
    <section className="w-full max-w-screen-xl py-20 px-4 tablet:px-8">
      <h2 className="mb-8 text-center font-semibold laptop:mb-0">BESTSELLERS</h2>
      <div className="m-auto flex min-h-[60vh] flex-wrap items-center justify-between">
        <div className="mb-24 flex h-[450px] w-[48%] cursor-pointer flex-col justify-between laptop:mb-0 laptop:w-[20%]">
          <div className="relative h-[360px] overflow-hidden rounded rounded-[8px]">
            <Image src={best1} layout="fill" objectFit="cover" quality={70} className="transition-transform duration-300 hover:scale-105" alt="" />
          </div>
          <p className="ml-1 text-gray-600">Strój epic</p>
          <p className="ml-1 font-semibold">120zł</p>
        </div>
        <div className="mb-24 flex h-[450px] w-[48%] cursor-pointer flex-col justify-between laptop:mb-0 laptop:w-[20%]">
          <div className="relative h-[360px] overflow-hidden rounded rounded-[8px]">
            <Image src={best2} layout="fill" objectFit="cover" quality={70} className="transition-transform duration-300 hover:scale-105" alt="" />
          </div>
          <p className="text-gray-600">Strój jungle</p>
          <p className="font-semibold">90zł</p>
        </div>
        <div className="mb-24 flex h-[450px] w-[48%] cursor-pointer flex-col justify-between laptop:mb-0 laptop:w-[20%]">
          <div className="relative h-[360px] overflow-hidden rounded rounded-[8px]">
            <Image src={best3} layout="fill" objectFit="cover" quality={70} className="transition-transform duration-300 hover:scale-105" alt="" />
          </div>
          <p className="text-gray-600">Water kit</p>
          <p className="font-semibold">110zł</p>
        </div>
        <div className="mb-24 flex h-[450px] w-[48%] cursor-pointer flex-col justify-between laptop:mb-0 laptop:w-[20%]">
          <div className="relative h-[360px] overflow-hidden rounded rounded-[8px]">
            <Image src={best4} layout="fill" objectFit="cover" quality={70} className="transition-transform duration-300 hover:scale-105" alt="" />
          </div>
          <p className="text-gray-600">Super outfit</p>
          <p className="font-semibold">240zł</p>
        </div>
      </div>
    </section>
  );
}
