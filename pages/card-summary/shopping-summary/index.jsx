import { useEffect, useState } from 'react';
import BaseLayout from 'components/BaseLayout';
import { v4 as uuid } from 'uuid';
import useBasketState from 'hooks/useBasketState';
import classNames from 'helpers/classNames';
import ProductSummary from 'components/ProductSummary';
import SummaryInfoSection from 'components/SummaryInfoSection';

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const ogData = {};

export default function ShoppingSummary() {
  const { state, basketItemsAmount, setBasketItemsAmount } = useBasketState();
  const [basket, setBasket] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);

  const seoData = { title, description, ogData };

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

  const shippingCost = 0; // TODO: change to the real shipping cost
  // const shippingCost = finalPrice > 500 ? 0 : 20;

  return (
    <BaseLayout seoData={seoData}>
      <div className="my-8 flex w-full max-w-screen-xl flex-col-reverse px-8 laptop:flex laptop:flex-row">
        {/* Address and other necessary data */}
        <SummaryInfoSection basket={basket} finalPrice={finalPrice} shippingCost={shippingCost} />

        {/* Right site of page - Summary */}
        <div className="mb-20 flex w-full flex-col text-gray-800 laptop:w-2/5 laptop:pl-4">
          <div className="flex w-full items-center">
            <h2 className="mb-2 text-3xl font-semibold uppercase">Podsumowanie zamówienia</h2>
          </div>
          <div className="my-4 flex justify-between text-lg">
            <p className="">
              {basketItemsAmount} <span>prod.</span>
            </p>
            <div className="flex">
              <p className="font-semibold">{finalPrice} zł</p>
            </div>
          </div>

          <div className="mb-4 flex justify-between border-b border-b-2 border-neutral-200 pb-4 text-lg">
            <div>
              <p>Dostawa:</p>
              <p className="text-xs text-neutral-500">NA TERENIE POLSKI</p>
            </div>
            <div className="relative flex flex-col items-end">
              <p className={classNames(shippingCost === 0 ? '' : 'font-semibold')}>{shippingCost === 0 ? 'Za darmo' : `${shippingCost}zł`}</p>
              {shippingCost > 0 ? (
                <div className="text-xs">
                  Brakuje <span className="font-semibold">{500 - finalPrice} zł</span> do darmowej dostawy
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between border-b border-b-2 border-neutral-200 pb-4 text-lg">
            <p className="mr-4 font-semibold uppercase">Razem:</p>
            <p className="font-semibold">{finalPrice + shippingCost} zł</p>
          </div>
          <div className="border-b border-b-2 border-neutral-200 pt-8">
            {basket.map((product) => (
              <ProductSummary key={uuid()} product={product} />
            ))}
          </div>
          <div className="my-6 flex justify-end">
            <div className="flex">
              <p className="mr-4 text-2xl">Łączna kwota:</p>
              <p className="text-2xl font-semibold">{finalPrice + shippingCost} zł</p>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

// todo: hook for taking state from localStorage
