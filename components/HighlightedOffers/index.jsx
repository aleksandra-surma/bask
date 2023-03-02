import { v4 as uuid } from 'uuid';
import Image from 'next/image';
import { products } from 'data/mock/products';
import Link from 'next/link';

export default function HighlightedOffers() {
  return (
    <section className="w-full max-w-screen-xl laptop:py-20 px-4 tablet:px-8">
      <h2 className="mt-20 laptop:mt-0 mb-8 text-center font-semibold laptop:mb-0">WYRÓŻNIONE</h2>
      <div className="m-auto justify-between items-center min-h-[60vh] flex flex-wrap">
        {products.map((product) => {
          return (
            <Link key={uuid()} href={`/store-bask/${product.slug}`} as={`/sklep/${product.slug}`}>
              <div className="flex flex-col justify-between w-[48%] tablet:w-[42%] laptop:w-[20%] h-[450px] mb-24 laptop:mb-0 cursor-pointer">
                <div className="relative h-[360px] rounded rounded-[8px] overflow-hidden">
                  <Image
                    src={product.images[product.startColor][0].src}
                    layout="fill"
                    objectFit="cover"
                    quality={70}
                    className="transition-transform hover:scale-105 duration-300"
                    alt=""
                  />
                </div>
                <p className="ml-1 text-gray-600">{product.name}</p>
                <p className="ml-1 font-semibold">{product.price} zł</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
