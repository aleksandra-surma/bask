import Image from 'next/image';
import offer1 from 'public/images/bask-offer-test-image-01.jpg';
import offer2 from 'public/images/bask-offer-test-image-02.jpg';
import offer3 from 'public/images/bask-offer-test-image-03.jpg';
import offer4 from 'public/images/bask-offer-test-image-04.jpg';

export default function HighlightedOffers() {
  return (
    <section className="w-full max-w-screen-xl laptop:py-20 px-4 tablet:px-8">
      <h2 className="mt-20 laptop:mt-0 mb-8 text-center font-semibold laptop:mb-0">WYRÓŻNIONE</h2>
      <div className="m-auto justify-between items-center min-h-[60vh] flex flex-wrap">
        <div className="flex flex-col justify-between w-[48%] tablet:w-[42%] laptop:w-[20%] h-[450px] mb-24 laptop:mb-0 cursor-pointer">
          <div className="relative h-[360px] rounded rounded-[8px] overflow-hidden">
            <Image src={offer1} layout="fill" objectFit="cover" quality={70} className="transition-transform hover:scale-105 duration-300" alt="" />
          </div>
          <p className="ml-1 text-gray-600">Strój epic</p>
          <p className="ml-1 font-semibold">120zł</p>
        </div>
        <div className="flex flex-col justify-between w-[48%] tablet:w-[42%] laptop:w-[20%] h-[450px] mb-24 laptop:mb-0 cursor-pointer">
          <div className="relative h-[360px] rounded rounded-[8px] overflow-hidden">
            <Image src={offer2} layout="fill" objectFit="cover" quality={70} className="transition-transform hover:scale-105 duration-300" alt="" />
          </div>
          <p className="text-gray-600">Strój jungle</p>
          <p className="font-semibold">90zł</p>
        </div>
        <div className="flex flex-col justify-between w-[48%] tablet:w-[42%] laptop:w-[20%] h-[450px] mb-24 laptop:mb-0 cursor-pointer">
          <div className="relative h-[360px] rounded rounded-[8px] overflow-hidden">
            <Image src={offer3} layout="fill" objectFit="cover" quality={70} className="transition-transform hover:scale-105 duration-300" alt="" />
          </div>
          <p className="text-gray-600">Water kit</p>
          <p className="font-semibold">110zł</p>
        </div>
        <div className="flex flex-col justify-between w-[48%] tablet:w-[42%] laptop:w-[20%] h-[450px] mb-24 laptop:mb-0 cursor-pointer">
          <div className="relative h-[360px] rounded rounded-[8px] overflow-hidden">
            <Image src={offer4} layout="fill" objectFit="cover" quality={70} className="transition-transform hover:scale-105 duration-300" alt="" />
          </div>
          <p className="text-gray-600">Super outfit</p>
          <p className="font-semibold">240zł</p>
        </div>
      </div>
    </section>
  );
}
