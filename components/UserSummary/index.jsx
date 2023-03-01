import { ShoppingBagIcon } from '@heroicons/react/outline';
// import { ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function UserSummary() {
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
              0
            </div>
          </div>
          <p>Koszyk</p>
        </a>
      </Link>
    </div>
  );
}
