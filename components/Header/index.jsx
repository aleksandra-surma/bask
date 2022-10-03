import Image from 'next/image';
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';
import baskLogo from 'public/images/bask-logo-plus-text.svg';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-col relative tablet:items-center w-full m-auto max-w-screen-xl">
      <div className="flex justify-between mx-8 w-[calc(100%-60px)] mt-10">
        <Image src={baskLogo} alt="" />

        <div className="flex justify-between laptop:absolute laptop:right-2 laptop:top-0 w-[120px] h-12 text-xs">
          {/* <div className="flex items-center"> */}
          {/*  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> */}
          {/*    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> */}
          {/*  </svg> */}
          {/* </div> */}
          <div className="flex flex-col justify-between items-center cursor-pointer text-gray-700 hover:text-green-500">
            <UserIcon width={24} height={24} />
            <p>Zaloguj</p>
          </div>
          <div className="header-basket__wrapper flex flex-col justify-between items-center cursor-pointer text-gray-700 hover:text-green-500">
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
      <nav className="flex flex-col justify-center mt-8 laptop:my-8 px-6 w-full bg-gray-50 laptop:mx-0 text text-gray-500">
        <Link href="/">
          <a className="cursor-pointer hover:text-black p-4 pt-8 mr-6">HOME</a>
        </Link>
        <Link href="/storeBask" as="sklep">
          <a className="cursor-pointer hover:text-black p-4 mr-6">🐚 SKLEP</a>
        </Link>
        <Link href="/uvEducation" as="edukacja-uv">
          <a className="cursor-pointer hover:text-black p-4 mr-6">EDUKACJA UV</a>
        </Link>
        <Link href="/aboutCompany" as="o-firmie">
          <a className="cursor-pointer hover:text-black p-4 mr-6">O FIRMIE🇵🇱</a>
        </Link>
        <Link href="/contact" as="kontakt">
          <a className="cursor-pointer hover:text-black p-4 pb-8">KONTAKT</a>
        </Link>
      </nav>
    </header>
  );
}
