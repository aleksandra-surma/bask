import { useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'helpers/classNames';
import { TrashIcon } from '@heroicons/react/outline';
import handleBasket from 'utils/handleBasket';
import useBasketState from 'hooks/useBasketState';

export default function ProductBasket({ product }) {
  const { dispatch, setBasketItemsAmount } = useBasketState();
  const [productQuantity, setProductQuantity] = useState(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const localBasket = JSON.parse(localStorage.getItem('bask-basket'));

    if (!localBasket) {
      return;
    }

    const basketProduct = localBasket.basket.find((localProduct) => {
      return product.name === localProduct.name && product.size === localProduct.size && product.color === localProduct.color;
    });
    setProductQuantity(basketProduct?.quantity);

    const basketAllProductsQuantity = localBasket.basket?.reduce((prevItem, currItem) => {
      return prevItem + currItem.quantity;
    }, 0);

    setBasketItemsAmount(basketAllProductsQuantity);
  }, [product.quantity, productQuantity, setProductQuantity]);

  const isQuantityDecrementDisabled = productQuantity < 2;

  return (
    <div className="mb-16 rounded-lg bg-white">
      <div className="flex w-full">
        <div className="relative h-[220px] w-[160px]">
          <Image src={product.img} className="rounded-xl" layout="fill" objectFit="cover" />
        </div>
        <div className="w-full justify-center px-6">
          <div className="flex items-center justify-between">
            <Link href={`/bask-store/${product.slug}`} as={`/sklep/${product.slug}`}>
              <h3 className="cursor-pointer text-xl font-semibold underline-offset-4 hover:underline">{product.name}</h3>
            </Link>
            <button
              type="button"
              onClick={() => handleBasket.removeProduct(product, dispatch)}
              className="cursor-pointer p-1 hover:scale-110 hover:rounded-full hover:bg-neutral-100"
            >
              <TrashIcon width={24} height={24} />
            </button>
          </div>
          <div className="my-6 flex">
            <p className="mr-4 text-lg">Rozmiar:</p>
            <p className="text-lg font-semibold">{product.size}</p>
          </div>
          <div className="my-6 flex">
            <p className="mr-4 text-lg">Kolor:</p>
            {/* <p className="text-xl font-semibold">{selectedColor}</p> */}
            <span
              aria-hidden="true"
              className={classNames(
                'h-8 w-8 rounded-full ring-2 ring-neutral-300 ring-offset-2',
                product.color !== 'white' ? `bg-${product.color}` : null,
                product.color === 'white' ? 'border-2 border-neutral-200' : null,
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
                  'flex h-8 w-8 items-center justify-center rounded-full pt-1 text-2xl',
                  isQuantityDecrementDisabled ? 'bg-neutral-50 text-neutral-300' : 'bg-neutral-300 text-neutral-800 hover:scale-110',
                )}
              >
                -
              </button>{' '}
              <p className="mx-4 text-2xl font-semibold">{productQuantity}</p>
              <button
                type="button"
                onClick={() => handleBasket.incrementQuantity(product, dispatch)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-300 pt-1 text-2xl text-neutral-800 hover:scale-110"
              >
                +
              </button>
            </div>

            <div className="flex">
              <p className="mr-4 text-lg">Cena:</p>
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
