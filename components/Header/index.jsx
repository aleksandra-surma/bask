import Image from 'next/image';
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';
import baskLogo from 'public/images/bask-logo-plus-text.svg';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-col relative justify-start items-center my-10 w-full h-[100vh] m-auto max-w-screen-xl">
      <div className="flex">
        <div className="">
          <Image src={baskLogo} />
        </div>
        <div className="flex justify-between absolute right-2 top-0 flex w-[120px] h-12 text-xs">
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
      <nav className="flex justify-center mt-8 text text-gray-500">
        <Link href="/">
          <a className="cursor-pointer hover:text-black p-2 mr-6">HOME</a>
        </Link>
        <Link href="/storeBask" as="sklep">
          <a className="cursor-pointer hover:text-black p-2 mr-6">🐚 SKLEP</a>
        </Link>
        <Link href="/uvEducation" as="edukacja-uv">
          <a className="cursor-pointer hover:text-black p-2 mr-6">EDUKACJA UV</a>
        </Link>
        <Link href="/aboutCompany" as="o-firmie">
          <a className="cursor-pointer hover:text-black p-2 mr-6">O FIRMIE🇵🇱</a>
        </Link>
        <Link href="/contact" as="kontakt">
          <a className="cursor-pointer hover:text-black p-2">KONTAKT</a>
        </Link>
      </nav>
    </header>
  );
}
