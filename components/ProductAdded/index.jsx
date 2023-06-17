import Image from 'next/image';
import classNames from 'helpers/classNames';
import Link from 'next/link';

export default function ProductAdded({ addedProduct, setAddedProduct, selectedColor, selectedSize }) {
  const imgSrc = addedProduct[`attachments-${selectedColor}`][0].thumbnails.large.url;

  return (
    <div className="fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <div className="mx-4 rounded-lg bg-white p-4 sm:p-8">
        {/*<div className="sm:y-[unset] m-4 h-full w-full rounded-lg bg-white p-4 sm:w-[unset] sm:p-8">*/}

        <div className="relative mb-8 flex border-b-2 pb-6">
          <h2 className="tablet:6xl text-lg sm:text-3xl">Produkt został dodany do koszyka</h2>

          <button type="button" onClick={() => setAddedProduct(null)} className="absolute right-0 text-lg font-bold sm:right-[-20px] sm:top-[-20px]">
            X
          </button>
        </div>
        <div className="flex flex-col">
          <div className="relative h-[210px] w-[120px] sm:h-[280px] sm:w-[160px]">
            <Image src={imgSrc} className="rounded-xl" layout="fill" objectFit="cover" />
          </div>
          <div className="mx-auto justify-center text-lg sm:px-6 sm:text-2xl">
            <h3 className="font-semibold">{addedProduct.name}</h3>
            <div className="my-6 flex">
              <p className="mr-4">Rozmiar:</p>
              <p className="font-semibold">{selectedSize}</p>
            </div>
            <div className="my-6 flex">
              <p className="mr-4">Kolor:</p>
              {/* <p className="text-xl font-semibold">{selectedColor}</p> */}
              <span
                aria-hidden="true"
                className={classNames(
                  'h-8 w-8 rounded-full ring-2 ring-neutral-300 ring-offset-2 sm:h-12 sm:w-12',
                  selectedColor === 'white' ? 'border-2 border-neutral-200' : `bg-${selectedColor}`,
                )}
              />
            </div>
            <div className="mt-6 flex sm:my-6">
              <p className="mr-4">Cena:</p>
              <p className="font-semibold">{addedProduct.price} zł</p>
            </div>
            <div className="flex justify-between">
              <button type="button" className="text-md underline underline-offset-4 sm:text-2xl" onClick={() => setAddedProduct(null)}>
                Kontynuj zakupy
              </button>
              <Link href="/card-summary" as="/koszyk">
                <a className="text-md cursor-pointer p-4 underline underline-offset-4 underline-offset-4 transition hover:text-black hover:underline sm:mr-6 sm:text-2xl tablet:ml-8 tablet:mr-8 tablet:p-0 ">
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
