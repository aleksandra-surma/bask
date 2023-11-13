import { v4 as uuid } from 'uuid';
import Image from 'next/image';
import Link from 'next/link';

export default function HighlightedOffers({ products }) {
  // const shuffledProducts = products.slice(0, 4).sort(() => 0.5 - Math.random());

  return (
    <section className="w-full max-w-screen-xl px-4 tablet:px-8 laptop:py-20">
      <h2 className="mb-8 mt-20 text-center font-semibold laptop:mb-0 laptop:mt-0">WYRÓŻNIONE</h2>
      <div className="m-auto flex min-h-[60vh] flex-wrap items-center justify-between">
        {products.slice(0, 4).map(({ fields: product }) => {
          return (
            <Link key={uuid()} href={`/store-bask/${product.slug}`} as={`/sklep/${product.slug}`}>
              <div className="mb-24 flex h-[480px] w-[48%] cursor-pointer flex-col justify-between tablet:w-[42%] laptop:mb-0 laptop:w-[20%]">
                <div className="relative h-[360px] overflow-hidden rounded rounded-[8px]">
                  <Image
                    src={product.highlightedPhotos[0].url}
                    layout="fill"
                    objectFit="cover"
                    quality={70}
                    className="transition-transform duration-300 hover:scale-105"
                    alt=""
                  />

                  {product.promotionValue > 0 ? (
                    <span className="absolute right-3 top-3 rounded bg-neutral-800 p-3 text-[20px] font-semibold leading-4 text-white">
                      - {100 * Number(product.promotionValue)} %
                    </span>
                  ) : null}
                </div>

                <p className="ml-1 text-gray-600">{product.name}</p>

                <div className="ml-1">
                  {product.promotionPrice ? (
                    <>
                      <p className="text-lg font-semibold">{product.promotionPrice} zł</p>
                      <p className="text-xs font-medium tracking-tight text-gray-500 tablet:text-sm">
                        Najniższa cena z 30 dni <span className="text-lg text-gray-600 line-through">{product.price} zł</span>
                      </p>
                    </>
                  ) : (
                    <p className="ml-1 font-semibold">{product.price} zł</p>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
