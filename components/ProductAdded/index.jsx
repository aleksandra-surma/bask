import Image from 'next/image';
import classNames from '../../helpers/classNames';
// import Link from 'next/link';

export default function ProductAdded({ addedProduct, setAddedProduct, selectedColor, selectedSize }) {
  // First product image's src
  const imgSrc = addedProduct.images[selectedColor.name][0].src.src;

  return (
    <div className="fixed top-0 flex justify-center items-center bg-[rgba(0,0,0,0.3)] w-screen h-screen z-10">
      <div className="bg-white rounded-lg p-8 mx-4">
        <div className="flex relative pb-6 mb-8 border-b-2">
          <h2 className="text-3xl tablet:6xl">Produkt został dodany do koszyka</h2>

          <button type="button" onClick={() => setAddedProduct(null)} className="absolute top-[-20px] right-[-20px] font-bold text-lg">
            X
          </button>
        </div>
        <div className="flex">
          <Image src={imgSrc} width={160} height={240} className="rounded-xl" />
          <div className="mx-auto justify-center px-6">
            <h3 className="text-2xl font-semibold">{addedProduct.name}</h3>
            <div className="flex my-6">
              <p className="text-xl mr-4">Rozmiar:</p>
              <p className="text-xl font-semibold">{selectedSize.name}</p>
            </div>
            <div className="flex my-6">
              <p className="text-xl mr-4">Kolor:</p>
              {/* <p className="text-xl font-semibold">{selectedColor.name}</p> */}
              <span
                aria-hidden="true"
                className={classNames(
                  'h-12 w-12 rounded-full ring-2 ring-neutral-300 ring-offset-4',
                  selectedColor.name !== 'white' ? `bg-${selectedColor.name}` : null,
                  selectedColor.name === 'white' ? 'border-2 border-neutral-200' : null,
                )}
              />
            </div>
            <div className="flex my-6">
              <p className="text-xl mr-4">Cena:</p>
              <p className="text-xl font-semibold">{addedProduct.price} zł</p>
            </div>
            <button type="button" className="underline underline-offset-4 text-neutral-400" onClick={() => setAddedProduct(null)}>
              Kontynuj zakupy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
