import { ShoppingBagIcon } from '@heroicons/react/outline';
// import { ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import { BasketContext } from 'contexts/BasketContext';

export default function UserSummary() {
  // const { state, dispatch } = useContext(BasketContext);

  const [basketItemsAmount, setBasketItemsAmount] = useState(0);

  //
  // const [storedBasket, setStoredBasket] = useState({});

  useEffect(() => {
    if (!window) return;

    const item = JSON.parse(localStorage.getItem('bask-basket'));

    if (!item?.basket) {
      return;
    }

    setBasketItemsAmount(item?.basket.length);
  }, []);

  //
  // useEffect(() => {
  //   if (window) {
  //   }
  //   console.log('state: ', state);
  //   setStoredBasket(localStorage.getItem('bask-basket'));
  // }, [state, setStoredBasket]);
  //
  // console.log('storedBasket: ', storedBasket);

  return (
    <div className="flex col-start-3 ml-auto justify-between w-[120px] h-12 text-xs">
      {/* <Link href="/userAccount/logIn" as="/moje-konto/zaloguj"> */}
      {/*  <a className="flex flex-col justify-between items-center cursor-pointer text-gray-700 hover:text-primary"> */}
      {/*    <UserIcon width={24} height={24} /> */}
      {/*    <p>Zaloguj</p> */}
      {/*  </a> */}
      {/* </Link> */}
      <Link href="/card-summary" as="/koszyk">
        <a className="header-basket__wrapper flex flex-col justify-between items-center cursor-pointer text-gray-700 hover:text-primary">
          <div className="flex relative">
            <ShoppingBagIcon width={24} height={24} />
            <div className="header-basket__items-counter absolute top-0.5 flex justify-center right-[-110%] w-[22px] h-[22px] bg-black text-white rounded-xl leading-[23px] hover:bg-green-500">
              {/* {basketItemsAmount?.basket.length} */}
              {basketItemsAmount}
            </div>
          </div>
          <p>Koszyk</p>
        </a>
      </Link>
    </div>
  );
}
