import { ShoppingBagIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useEffect } from 'react';
import useBasketState from 'hooks/useBasketState';

export default function UserSummary() {
  const { basketItemsAmount, setBasketItemsAmount } = useBasketState(null);

  useEffect(() => {
    if (!window) return;

    const item = JSON.parse(localStorage.getItem('bask-basket'));

    if (!item) {
      return;
    }

    const basketProductsQuantity = item?.basket?.reduce((prevItem, currItem) => {
      return prevItem + currItem.quantity;
    }, 0);

    setBasketItemsAmount(basketProductsQuantity);
  }, [basketItemsAmount, setBasketItemsAmount]);

  return (
    <div className="col-start-3 ml-auto flex h-12 w-[120px] justify-between text-xs">
      <Link href="/card-summary" as="/koszyk">
        <a className="header-basket__wrapper flex cursor-pointer flex-col items-center justify-between text-gray-800 hover:text-green-500">
          <div className="relative flex">
            <ShoppingBagIcon width={24} height={24} />
            <div className="header-basket__items-counter absolute top-0.5 right-[-110%] flex h-[22px] w-[22px] justify-center rounded-xl bg-black leading-[23px] text-white hover:bg-green-500">
              {basketItemsAmount}
            </div>
          </div>
          {/* <div className="header-basket__items-counter absolute top-0.5 flex justify-center right-[-110%] w-[22px] h-[22px] bg-black text-white rounded-xl leading-[23px] hover:bg-green-500"></div> */}
          <p className="text-inherit">Koszyk</p>
        </a>
      </Link>
    </div>
  );
}
