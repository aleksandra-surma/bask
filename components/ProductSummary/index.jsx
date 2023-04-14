import { useLayoutEffect, useState } from 'react';
// import Link from 'next/link';
import Image from 'next/image';
import useBasketState from 'hooks/useBasketState';

export default function ProductSummary({ product }) {
  const { setBasketItemsAmount } = useBasketState();
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

  return (
    <div className="mb-8 rounded-lg bg-white">
      <div className="flex w-full">
        <div className="relative h-[120px] w-[120px]">
          <Image src={product.img} className="rounded-lg" layout="fill" objectFit="cover" />
        </div>
        <div className="w-full justify-center px-6">
          <div className="flex items-center justify-between">
            <h3 className="text-md">{product.name}</h3>
          </div>
          <div className="my-2 flex">
            <p className="mr-4 text-sm">Rozmiar:</p>
            <p className="text-sm">{product.size}</p>
          </div>
          <div className="my-2 flex text-sm">
            <p className="mr-4">Kolor:</p>
            <p>{product.color}</p>
          </div>
          {/* Quantity */}
          <div className="flex">
            <div className="flex">
              <p className="mr-2 text-sm">Cena:</p>
              <p className="text-sm">{product.price * product.quantity} zł /</p>
            </div>
            <div className="flex">
              <p className="ml-1 text-sm">Ilość: {productQuantity}</p>
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
