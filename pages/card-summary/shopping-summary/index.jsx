import { useEffect, useState } from 'react';
import Link from 'next/link';
import BaseLayout from 'components/BaseLayout';
import { v4 as uuid } from 'uuid';
// import Image from 'next/image';
// import classNames from 'helpers/classNames';
import useBasketState from 'hooks/useBasketState';
import classNames from 'helpers/classNames';
import { loadStripe } from '@stripe/stripe-js';
import ProductSummary from 'components/ProductSummary';

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

  const isCheckoutDisabled = finalPrice < 1;

  const handleFinalizeCheckout = async () => {
    // onClick={async (formProcessing, setFormProcessing, watch) => {
    const payload = basket;

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

    const response = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('response', response);

    if (response.ok) {
      const { checkout } = await response.json();

      await stripe.redirectToCheckout({ sessionId: checkout.id });
    }
  };

  const shippingCost = finalPrice > 200 ? 0 : 15;

  return (
    <BaseLayout seoData={seoData}>
      <div className="flex my-8">
        <div className="w-3/5">
          <form>
            {/* Address and other necessary data */}
            <div>
              <h2 className="text-3xl font-semibold uppercase">Dane kontaktowe</h2>
              <p>Użyjemy tych danych, aby poinformować Cię o dostawie.</p>
              <div>tel</div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold uppercase">Dane do wysyłki</h2>
              <form>form</form>
            </div>
            <div>
              <h2 className="text-3xl font-semibold uppercase">Dostarczenie zamówienia</h2>
              <div>Info</div>
              <div>Kurier</div>
            </div>
            <div className="flex mt-8">
              <Link href="/card-summary/checkout" as="/koszyk/podsumowanie">
                <button
                  type="button"
                  onClick={handleFinalizeCheckout}
                  disabled={isCheckoutDisabled}
                  className={classNames(
                    'bg-black rounded w-full laptop:w-[420px]',
                    isCheckoutDisabled ? 'bg-neutral-400 text-neutral-100 cursor-not-allowed' : 'hover:bg-green-600 text-white',
                  )}
                >
                  <p className="font-semibold py-3">PRZEJDŹ DO PŁATNOŚCI</p>
                </button>
              </Link>
            </div>
          </form>
        </div>

        {/* Right site of page - Summary */}
        <div className="flex flex-col w-2/5 pl-4 m-auto max-w-screen-xl text-gray-800">
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
                  Brakuje <span className="font-semibold">{200 - finalPrice} zł</span> do darmowej dostawy
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
