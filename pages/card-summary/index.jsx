import { useEffect, useState } from 'react';
import Link from 'next/link';
import BaseLayout from 'components/BaseLayout';
import { v4 as uuid } from 'uuid';
// import Image from 'next/image';
// import classNames from 'helpers/classNames';
import useBasketState from 'hooks/useBasketState';
import ProductBasket from 'components/ProductBasket';

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const canonical = '';
const ogData = {};

export default function CardSummary() {
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

  return (
    <BaseLayout seoData={seoData}>
      <div className="flex flex-col my-8 laptop:mb-8 laptop:mt-8 w-full m-auto max-w-screen-xl text-gray-700 px-4 tablet:px-8">
        <div className="flex w-full items-center border-b border-b-2 pb-8 mb-8 border-neutral-200">
          <h2>Twój koszyk</h2>
          <div className="flex text-2xl bg-neutral-200 p-4 ml-4">
            <p className="m">
              {basketItemsAmount} <span>prod.</span>
            </p>
          </div>
        </div>
        <div className="border-b border-b-2 pb-8 border-neutral-200">
          {basket.map((product) => (
            <ProductBasket key={uuid()} product={product} />
          ))}
        </div>
        <div className="flex justify-end m-6">
          <div className="flex">
            <p className="text-2xl mr-4">Łączna kwota:</p>
            <p className="text-2xl font-semibold">{finalPrice} zł</p>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <Link href="/card-summary/checkout" as="/koszyk/podsumowanie">
            <button type="button" className="bg-black rounded hover:bg-green-600 w-full laptop:w-[420px]">
              <p className="text-white font-semibold py-3">PRZEJDŹ DO PŁATNOŚCI</p>
            </button>
          </Link>
        </div>
      </div>
    </BaseLayout>
  );
}

// todo: add action: SET_BASKET - take basket from localStorage
// todo: hook for taking state from localStorage
