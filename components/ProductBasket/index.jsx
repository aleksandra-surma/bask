import { useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'helpers/classNames';
import { TrashIcon } from '@heroicons/react/outline';
import handleBasket from 'utils/handleBasket';
import useBasketState from 'hooks/useBasketState';

export default function ProductBasket({ product }) {
  const { dispatch, setBasketItemsAmount } = useBasketState();
  const [productQuantity, setProductQuantity] = useState(0);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const localBasket = JSON.parse(localStorage.getItem('bask-basket'));

    if (!localBasket) {
      return;
    }

    const basketProduct = localBasket.basket.find((localProduct) => {
      // return product.id === localProduct.id;
      return product.name === localProduct.name && product.size.name === localProduct.size.name && product.color.name === localProduct.color.name;
    });

    setProductQuantity(basketProduct?.quantity);

    const basketAllProductsQuantity = localBasket.basket?.reduce((prevItem, currItem) => {
      return prevItem + currItem.quantity;
    }, 0);

    setBasketItemsAmount(basketAllProductsQuantity);
  }, [product.quantity, productQuantity, setProductQuantity]);

  const isQuantityDecrementDisabled = productQuantity < 2;

  return (
    <div className="bg-white rounded-lg mb-16">
      <div className="flex w-full">
        <div className="relative w-[160px] h-[220px]">
          <Image src={product.img} className="rounded-xl" layout="fill" objectFit="cover" />
        </div>
        <div className="justify-center px-6 w-full">
          <div className="flex justify-between items-center">
            <Link href={`/bask-store/${product.slug}`} as={`/sklep/${product.slug}`}>
              <h3 className="text-xl font-semibold cursor-pointer hover:underline underline-offset-4">{product.name}</h3>
            </Link>
            <button
              type="button"
              onClick={() => handleBasket.removeProduct(product, dispatch)}
              className="cursor-pointer hover:scale-110 hover:bg-neutral-100 hover:rounded-full p-1"
            >
              <TrashIcon width={24} height={24} />
            </button>
          </div>
          <div className="flex my-6">
            <p className="text-lg mr-4">Rozmiar:</p>
            <p className="text-lg font-semibold">{product.size.name}</p>
          </div>
          <div className="flex my-6">
            <p className="text-lg mr-4">Kolor:</p>
            {/* <p className="text-xl font-semibold">{selectedColor.name}</p> */}
            <span
              aria-hidden="true"
              className={classNames(
                'h-8 w-8 rounded-full ring-2 ring-neutral-300 ring-offset-2',
                product.color.name !== 'white' ? `bg-${product.color.name}` : null,
                product.color.name === 'white' ? 'border-2 border-neutral-200' : null,
              )}
            />
          </div>
          {/* Quantity */}
          <div className="flex justify-between">
            <div className="flex">
              <button
                type="button"
                onClick={() => handleBasket.decrementQuantity(product, dispatch)}
                disabled={isQuantityDecrementDisabled}
                className={classNames(
                  'flex justify-center items-center w-8 h-8 rounded-full text-2xl pt-1',
                  isQuantityDecrementDisabled ? 'bg-neutral-50 text-neutral-300' : 'bg-neutral-300 text-neutral-800 hover:scale-110',
                )}
              >
                -
              </button>{' '}
              <p className="mx-4 text-2xl font-semibold">{productQuantity}</p>
              <button
                type="button"
                onClick={() => handleBasket.incrementQuantity(product, dispatch)}
                className="flex justify-center items-center bg-neutral-300 w-8 h-8 text-neutral-800 rounded-full text-2xl pt-1 hover:scale-110"
              >
                +
              </button>
            </div>

            <div className="flex">
              <p className="text-lg mr-4">Cena:</p>
              <p className="text-lg font-semibold">{product.price * product.quantity} zł</p>
            </div>
          </div>
          {/* <button type="button" className="underline underline-offset-4 text-neutral-400" onClick={() => setAddedProduct(null)}> */}
          {/*  Kontynuj zakupy */}
          {/* </button> */}
        </div>
      </div>
    </div>
  );
}
