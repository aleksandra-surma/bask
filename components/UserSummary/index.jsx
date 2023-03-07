import { ShoppingBagIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useEffect } from 'react';
import useBasketState from 'hooks/useBasketState';

export default function UserSummary() {
  const { basketItemsAmount, setBasketItemsAmount } = useBasketState();

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
    // setBasketItemsAmount(item?.basket.length);
  }, [basketItemsAmount, setBasketItemsAmount]);

  return (
    <div className="flex col-start-3 ml-auto justify-between w-[120px] h-12 text-xs">
      <Link href="/card-summary" as="/koszyk">
        <a className="header-basket__wrapper flex flex-col justify-between items-center cursor-pointer text-gray-700 hover:text-primary">
          <div className="flex relative">
            <ShoppingBagIcon width={24} height={24} />
            <div className="header-basket__items-counter absolute top-0.5 flex justify-center right-[-110%] w-[22px] h-[22px] bg-black text-white rounded-xl leading-[23px] hover:bg-green-500">
              {basketItemsAmount}
            </div>
          </div>
          <div className="header-basket__items-counter absolute top-0.5 flex justify-center right-[-110%] w-[22px] h-[22px] bg-black text-white rounded-xl leading-[23px] hover:bg-green-500"></div>
          <p>Koszyk</p>
        </a>
      </Link>
    </div>
  );
}
