import { v4 as uuid } from 'uuid';
import { products } from 'data/mock/products';
import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  return (
    <section className="flex justify-between flex-wrap mt-16">
      {products.map((item) => {
        return (
          <Link key={uuid()} href={`/store-bask/${item.slug}`} as={`/sklep/${item.slug}`}>
            <a className="mb-8 w-[45%] laptop:w-[30%] tablet:mb-16 cursor-pointer">
              <div className="w-full h-[450px] tablet:h-[650px] desktop:h-[600px] relative">
                <Image src={item.images[item.startColor][0].src} layout="fill" objectFit="cover" alt="" className="rounded-lg" />
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
