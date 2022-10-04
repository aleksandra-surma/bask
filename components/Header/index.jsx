import Image from 'next/image';
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';
import baskLogo from 'public/images/bask-logo-plus-text.svg';
import Navigation from 'components/Navigation';

export default function Header() {
  return (
    <header className="flex flex-col relative tablet:items-center w-full m-auto max-w-screen-xl">
      <div className="grid grid-cols-3 items-center mx-8 w-[calc(100%-60px)] mt-10">
        <div className="flex justify-start laptop:justify-center col-start-1 laptop:col-start-2">
          <Image src={baskLogo} alt="" />
        </div>

        <div className="flex col-start-3 ml-auto justify-between w-[120px] h-12 text-xs">
          {/* <div className="flex items-center"> */}
          {/*  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> */}
          {/*    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> */}
          {/*  </svg> */}
          {/* </div> */}
          <div className="flex flex-col justify-between items-center cursor-pointer text-gray-700 hover:text-primary">
            <UserIcon width={24} height={24} />
            <p>Zaloguj</p>
          </div>
          <div className="header-basket__wrapper flex flex-col justify-between items-center cursor-pointer text-gray-700 hover:text-primary">
            <div className="flex relative">
              <ShoppingBagIcon width={24} height={24} />
              <div className="header-basket__items-counter absolute top-0.5 flex justify-center right-[-110%] w-[22px] h-[22px] bg-black text-white rounded-xl leading-[23px] hover:bg-green-500">
                0
              </div>
            </div>
            <p>Koszyk</p>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
}
