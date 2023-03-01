import { v4 as uuid } from 'uuid';
import { products } from 'data/mock/products';
import Image from 'next/image';

export default function Products() {
  return (
    <section className="flex justify-between flex-wrap mt-16">
      {products.map((item) => {
        return (
          <div key={uuid()} className="mb-8 w-[45%] laptop:w-[30%] tablet:mb-16 cursor-pointer">
            <div className="w-full h-[450px] tablet:h-[650px] desktop:h-[600px] relative">
              <Image src={item.images[0].src} layout="fill" objectFit="cover" alt="" />
              {/* <img src={item.images[0].src} alt={item.images[0].alt} className="h-full w-full object-cover object-center" /> */}
            </div>
            <div className="mt-2 text-lg">
              <p className="font-semibold">{item.name}</p>
              <p>{item.price} zł</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

// display: flex;
// align-items: flex-start;
// flex-wrap: wrap;
// & > button {
//   width: 28%;
// }
//
// & > button:nth-child(1),
// & > button:nth-child(2) {
//   width: 45%;
// }
//
// & > button:nth-child(2) {
//   margin-left: 10%;
// }
//
// & > button:nth-child(n + 4) {
//   margin-left: 8%;
// }
//
// & > button:nth-child(3n) {
//   margin-left: 0;
// }
