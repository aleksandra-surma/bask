import { v4 as uuid } from 'uuid';
import Image from 'next/image';
import Link from 'next/link';

export default function HighlightedOffers({ products }) {
  // const shuffledProducts = products.slice(0, 4).sort(() => 0.5 - Math.random());

  return (
    <section className="w-full max-w-screen-xl px-4 tablet:px-8 laptop:py-20">
      <h2 className="mt-20 mb-8 text-center font-semibold laptop:mt-0 laptop:mb-0">WYRÓŻNIONE</h2>
      <div className="m-auto flex min-h-[60vh] flex-wrap items-center justify-between">
        {products.slice(0, 4).map(({ fields: product }) => {
          return (
            <Link key={uuid()} href={`/store-bask/${product.slug}`} as={`/sklep/${product.slug}`}>
              <div className="mb-24 flex h-[450px] w-[48%] cursor-pointer flex-col justify-between tablet:w-[42%] laptop:mb-0 laptop:w-[20%]">
                <div className="relative h-[360px] overflow-hidden rounded rounded-[8px]">
                  <Image
                    src={product.highlightedPhotos[0].url}
                    layout="fill"
                    objectFit="cover"
                    quality={70}
                    className="transition-transform duration-300 hover:scale-105"
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
