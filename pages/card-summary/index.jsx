import { useEffect, useState } from 'react';
import Link from 'next/link';
import BaseLayout from 'components/BaseLayout';
import { v4 as uuid } from 'uuid';
import useBasketState from 'hooks/useBasketState';
import ProductBasket from 'components/ProductBasket';
import classNames from 'helpers/classNames';

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const canonical = '';
const ogData = {};

export default function BasketSummary() {
  const { state, basketItemsAmount, setBasketItemsAmount } = useBasketState();
  const [basket, setBasket] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);

  const seoData = { title, description, canonical, ogData };

  useEffect(() => {
    if (!window) return;

    const storedBasket = JSON.parse(localStorage.getItem('bask-basket'));

    if (!storedBasket?.basket) {
      return;
    }

    const summaryPrice = storedBasket.basket.reduce((prev, curr) => {
      return prev + curr.price * curr.quantity;
    }, 0);

    setFinalPrice(summaryPrice);
    setBasket(storedBasket.basket);
  }, [state.basket, basketItemsAmount, setBasketItemsAmount]);

  const isShoppingSummaryDisabled = finalPrice < 1;

  return (
    <BaseLayout seoData={seoData}>
      <div className="m-auto my-8 flex w-full max-w-screen-xl flex-col px-4 text-gray-700 tablet:px-8 laptop:mb-8 laptop:mt-8">
        <div className="mb-8 flex w-full items-center border-b border-b-2 border-neutral-200 pb-8">
          <h2>Twój koszyk</h2>
          <div className="ml-4 flex bg-neutral-200 p-4 text-2xl">
            <p className="m">
              {basketItemsAmount} <span>prod.</span>
            </p>
          </div>
        </div>
        <div className="border-b border-b-2 border-neutral-200 pb-8">
          {basket.map((product) => (
            <ProductBasket key={uuid()} product={product} />
          ))}
        </div>
        <div className="m-6 flex justify-end">
          <div className="flex">
            <p className="mr-4 text-2xl">Łączna kwota:</p>
            <p className="text-2xl font-semibold">{finalPrice} zł</p>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link href="/card-summary/shopping-summary" as="/koszyk/podsumowanie-zakupow">
            <button
              type="button"
              disabled={isShoppingSummaryDisabled}
              className={classNames(
                'w-full rounded bg-black laptop:w-[420px]',
                isShoppingSummaryDisabled ? 'cursor-not-allowed bg-neutral-400 text-neutral-100' : 'text-white hover:bg-green-600',
              )}
            >
              <p className="py-3 font-semibold text-white">PRZEJDŹ DO PODSUMOWANIA</p>
            </button>
          </Link>
        </div>
      </div>
    </BaseLayout>
  );
}

// todo: hook for taking state from localStorage
