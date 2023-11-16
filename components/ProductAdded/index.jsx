import Image from 'next/image';
import classNames from 'helpers/classNames';
import Link from 'next/link';

export default function ProductAdded({ addedProduct, setAddedProduct, selectedColor, selectedSize }) {
  const imgSrc = addedProduct[`attachments-${selectedColor}`][0].thumbnails.large.url;

  return (
    <div className="fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <div className="m-[20px] max-h-[100vh-40px] rounded-lg bg-white p-4 sm:p-8">
        <div className="relative mb-4 flex border-b-2 pb-3 sm:mb-8 sm:pb-6">
          <h2 className="tablet:6xl max-w-[90%] text-lg sm:text-2xl">Produkt został dodany do koszyka</h2>

          <button type="button" onClick={() => setAddedProduct(null)} className="absolute right-0 text-lg font-bold sm:right-[-20px] sm:top-[-20px]">
            X
          </button>
        </div>
        <div className="flex flex-col">
          <div className="relative h-[180px] w-[90px] sm:h-[280px] sm:w-[160px] xs:h-[210px] xs:w-[120px]">
            <Image src={imgSrc} className="rounded-xl" layout="fill" objectFit="cover" />
          </div>
          <div className="mx-auto justify-center pt-4 text-lg sm:text-2xl xs:pt-6">
            <h3 className="text-lg font-semibold sm:text-2xl">{addedProduct.name}</h3>
            <div className="my-4 flex xs:my-6">
              <p className="mr-4">Rozmiar:</p>
              <p className="font-semibold">{selectedSize}</p>
            </div>
            <div className="my-4 flex xs:my-6">
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
            <div className="mt-4 flex sm:my-6 xs:mt-6">
              <p className="mr-4">Cena:</p>

              {addedProduct.promotionValue > 0 ? (
                <p className="text-xl font-semibold xs:text-2xl">{addedProduct.promotionPrice} zł</p>
              ) : (
                <p className="text-xl font-semibold xs:text-2xl">{addedProduct.price} zł</p>
              )}
            </div>
            <div className="relative mt-2 flex w-[100%] justify-between">
              <button type="button" className="w-[45%] text-base underline underline-offset-4 sm:text-2xl" onClick={() => setAddedProduct(null)}>
                Kontynuj zakupy
              </button>
              <Link href="/card-summary" as="/koszyk">
                <a className="w-[45%] cursor-pointer text-center text-base underline underline-offset-4 underline-offset-4 transition hover:text-black hover:underline sm:mr-6 sm:text-2xl tablet:ml-8 tablet:mr-8 tablet:p-0">
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
