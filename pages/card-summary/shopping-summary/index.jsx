import { useEffect, useState } from 'react';
import BaseLayout from 'components/BaseLayout';
import { v4 as uuid } from 'uuid';
import useBasketState from 'hooks/useBasketState';
import classNames from 'helpers/classNames';
import ProductSummary from 'components/ProductSummary';
import SummaryInfoSection from 'components/SummaryInfoSection';

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const canonical = '';
const ogData = {};

export default function ShoppingSummary() {
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

  const shippingCost = finalPrice > 500 ? 0 : 20;

  return (
    <BaseLayout seoData={seoData}>
      <div className="flex w-full px-8 my-8 max-w-screen-xl">
        {/* Address and other necessary data */}
        <SummaryInfoSection basket={basket} finalPrice={finalPrice} shippingCost={shippingCost} />

        {/* Right site of page - Summary */}
        <div className="flex flex-col w-2/5 pl-4 text-gray-800">
          <div className="flex w-full items-center">
            <h2 className="text-xl uppercase font-semibold">Podsumowanie zamówienia</h2>
          </div>
          <div className="flex justify-between my-4 text-lg">
            <p className="">
              {basketItemsAmount} <span>prod.</span>
            </p>
            <div className="flex">
              <p className="font-semibold">{finalPrice} zł</p>
            </div>
          </div>

          <div className="flex justify-between mb-4 text-lg border-b border-b-2 pb-4 border-neutral-200">
            <div>
              <p>Dostawa:</p>
              <p className="text-xs text-neutral-500">NA TERENIE POLSKI</p>
            </div>
            <div className="flex flex-col items-end relative">
              <p className={classNames(shippingCost === 0 ? '' : 'font-semibold')}>{shippingCost === 0 ? 'Za darmo' : `${shippingCost}zł`}</p>
              {shippingCost > 0 ? (
                <div className="text-xs">
                  Brakuje <span className="font-semibold">{500 - finalPrice} zł</span> do darmowej dostawy
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between text-lg border-b border-b-2 pb-4 border-neutral-200">
            <p className="mr-4 uppercase font-semibold">Razem:</p>
            <p className="font-semibold">{finalPrice + shippingCost} zł</p>
          </div>
          <div className="border-b border-b-2 pt-8 border-neutral-200">
            {basket.map((product) => (
              <ProductSummary key={uuid()} product={product} />
            ))}
          </div>
          <div className="flex justify-end my-6">
            <div className="flex">
              <p className="text-2xl mr-4">Łączna kwota:</p>
              <p className="text-2xl font-semibold">{finalPrice + shippingCost} zł</p>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

// todo: hook for taking state from localStorage
