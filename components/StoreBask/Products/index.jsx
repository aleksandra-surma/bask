import { v4 as uuid } from 'uuid';
import Image from 'next/image';
import Link from 'next/link';
import sortProductByHighlight from 'helpers/sortProductByHighlight';

export default function Products({ products }) {
  const sortedProducts = sortProductByHighlight(products);

  return (
    <section className="mt-16 flex flex-wrap justify-between">
      {sortedProducts.map((item) => {
        const src = item.highlightedPhotos[0].url;

        return (
          <Link key={uuid()} href={`/store-bask/${item.slug}`} as={`/sklep/${item.slug}`}>
            <a className="mb-8 w-[45%] cursor-pointer tablet:mb-16 laptop:w-[30%]">
              <div className="relative h-[450px] w-full tablet:h-[650px] desktop:h-[600px]">
                <Image src={src} layout="fill" objectFit="cover" alt="" className="rounded-lg" />
              </div>
              <div className="mt-2 text-lg">
                <p className="font-semibold">{item.name}</p>
                <p>{item.price} zł</p>
              </div>
            </a>
          </Link>
        );
      })}
    </section>
  );
}
