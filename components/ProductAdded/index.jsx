import Image from 'next/image';
import classNames from 'helpers/classNames';
import Link from 'next/link';
// import Link from 'next/link';

export default function ProductAdded({ addedProduct, setAddedProduct, selectedColor, selectedSize }) {
  const imgSrc = addedProduct[`attachments-${selectedColor}`][0].thumbnails.large.url;

  return (
    <div className="fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <div className="mx-4 rounded-lg bg-white p-8">
        <div className="relative mb-8 flex border-b-2 pb-6">
          <h2 className="tablet:6xl text-3xl">Produkt został dodany do koszyka</h2>

          <button type="button" onClick={() => setAddedProduct(null)} className="absolute top-[-20px] right-[-20px] text-lg font-bold">
            X
          </button>
        </div>
        <div className="flex">
          <div className="relative h-[280px] w-[160px]">
            <Image src={imgSrc} className="rounded-xl" layout="fill" objectFit="cover" />
          </div>
          <div className="mx-auto justify-center px-6">
            <h3 className="text-2xl font-semibold">{addedProduct.name}</h3>
            <div className="my-6 flex">
              <p className="mr-4 text-xl">Rozmiar:</p>
              <p className="text-xl font-semibold">{selectedSize}</p>
            </div>
            <div className="my-6 flex">
              <p className="mr-4 text-xl">Kolor:</p>
              {/* <p className="text-xl font-semibold">{selectedColor}</p> */}
              <span
                aria-hidden="true"
                className={classNames(
                  'h-12 w-12 rounded-full ring-2 ring-neutral-300 ring-offset-2',
                  selectedColor === 'white' ? 'border-2 border-neutral-200' : `bg-${selectedColor}`,
                )}
              />
            </div>
            <div className="my-6 flex">
              <p className="mr-4 text-xl">Cena:</p>
              <p className="text-xl font-semibold">{addedProduct.price} zł</p>
            </div>
            <div className="flex justify-between">
              <button type="button" className="underline underline-offset-4" onClick={() => setAddedProduct(null)}>
                Kontynuj zakupy
              </button>
              <Link href="/card-summary" as="/koszyk">
                <a className="mr-6 cursor-pointer p-4 underline underline-offset-4 underline-offset-4 transition hover:text-black hover:underline tablet:mr-8 tablet:ml-8 tablet:p-0 ">
                  Przejdź do koszyka
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
