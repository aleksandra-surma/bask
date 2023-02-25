import { v4 as uuid } from 'uuid';

export default function Products() {
  const products = [
    { name: 'Greta - sukienka midi', price: 219.99 },
    { name: 'Jadak - sukienka ', price: 179.99 },
    { name: 'Kratos - sukienka midi', price: 89.99 },
    { name: 'Lotos puls - sukienka midi', price: 319.99 },
    { name: 'Strudy - sukienka midi', price: 99.99 },
  ];

  return (
    <section className="flex justify-between flex-wrap">
      {products.map((item) => {
        return (
          <div key={uuid()} className="mb-8 w-[45%] laptop:w-[30%] tablet:mb-16">
            <div className="w-full h-[250px] tablet:h-[450px] desktop:h-[500px] bg-sky-300">img</div>
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
