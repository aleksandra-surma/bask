import { v4 as uuid } from 'uuid';
import Image from 'next/image';
import Link from 'next/link';
import { sortProductByOrder } from 'helpers/sortProduct';

export default function Products({ products }) {
  const sortedProducts = sortProductByOrder(products);

  return (
    <section className="mt-16 flex flex-wrap justify-between">
      {sortedProducts.map((product) => {
        const src = product.highlightedPhotos[0].url;

        return (
          <Link key={uuid()} href={`/store-bask/${product.slug}`} as={`/sklep/${product.slug}`}>
            <a className="mb-8 w-[45%] cursor-pointer tablet:mb-16 laptop:w-[30%]">
              <div className="relative h-[450px] w-full tablet:h-[650px] desktop:h-[600px]">
                <Image src={src} layout="fill" objectFit="cover" alt="" className="rounded-lg" />
                {product.promotionValue > 0 ? (
                  <span className="absolute right-3 top-3 rounded bg-neutral-800 p-3 text-[20px] font-semibold leading-4 text-white">
                    - {100 * Number(product.promotionValue)} %
                  </span>
                ) : null}
              </div>
              <div className="mt-2 text-lg">
                <p className="font-semibold">{product.name}</p>
                {product.promotionValue > 0 ? (
                  <>
                    <p className="text-2xl font-semibold">{product.promotionPrice} zł</p>
                    <p className="text-[16px] font-medium tracking-tight text-gray-500">
                      Najniższa cena z 30 dni <span className="text-lg text-gray-600 line-through">{product.price} zł</span>
                    </p>
                  </>
                ) : (
                  <p className="text-2xl font-semibold">{product.promotionPrice} zł</p>
                )}
              </div>
            </a>
          </Link>
        );
      })}
    </section>
  );
}
