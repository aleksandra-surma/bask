import iotenWhiteLogo from 'public/images/ioten-logo-white-small.png';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className="flex flex-col my-8 laptop:my-20 w-full m-auto max-w-screen-xl text-gray-700 px-4 tablet:px-8">
      <div className="flex flex-col justify-between laptop:flex-row">
        <div className="mb-12 laptop:w-1/5">
          <h3 className="font-semibold mb-4">Bask</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium architecto deserunt, doloremque facere maiores perferendis placeat
            quos.
          </p>
          <ul className="mt-8">
            <li className="mb-2 hover:text-gray-400 hover:underline hover:underline-offset-4 hover:decoration-gray-400">
              <Link href="/storeBask" as="/sklep">
                <a href="">Sklep</a>
              </Link>
            </li>
            <li className="mb-2 hover:text-gray-400 hover:underline hover:underline-offset-4 hover:decoration-gray-400">
              <Link href="/uvEducation" as="/edukacja-uv">
                <a href="">Edukacja UV</a>
              </Link>
            </li>
            <li className="mb-2 hover:text-gray-400 hover:underline hover:underline-offset-4 hover:decoration-gray-400">
              <Link href="/aboutCompany" as="/o-firmie">
                <a href="">O firmie</a>
              </Link>
            </li>
            <li className="mb-2 hover:text-gray-400 hover:underline hover:underline-offset-4 hover:decoration-gray-400">
              <Link href="/contact" as="/kontakt">
                <a href="">Kontakt</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-12">
          <h3 className="font-semibold mb-4">Płatność i dostawa</h3>
          <ul>
            <li className="mb-2">BLIK</li>
            <li className="mb-2">PayU</li>
            <li className="mb-2">Przelewy24</li>
            <li className="mb-2">Płatność kartą lub przelewem</li>
          </ul>
        </div>
        <div className="mb-12">
          <h3 className="font-semibold mb-4">Polityka sklepu</h3>
          <ul>
            <li className="mb-2">Wysyłka</li>
            <li className="mb-2">Polityka zwrotów</li>
            <li className="mb-2">Polityka prywatności</li>
            <li className="mb-2">Regulamin sklepu internetowego</li>
            {/* <li className="mb-2">Zgłoś błąd</li> */}
          </ul>
        </div>
        <div className="mb-12">
          <h3 className="font-semibold mb-4">Kontakt</h3>
          <p className="mb-2">Obsługa Klienta</p>
          <p className="mb-2">Pn. - Pt. 9:00 - 16:00</p>
          <p className="mb-2">Tel. 535 412 571</p>
          <p className="mb-2">kontakt@bask.com.pl</p>
          <p className="mb-2">Współpraca</p>
          <p className="mb-2">wspolpraca@bask.com.pl</p>
        </div>
      </div>
      <div className="flex justify-between mt-8 laptop:mt-20">
        <div className="flex">
          <Link href="https://www.instagram.com/bask.uv/">
            <a target="_blank" title="autor strony" rel="noopener noreferrer" className="flex hover:scale-105">
              <Icon icon="bxl:instagram" style={{ width: '28px', height: '28px', color: 'hsl(0, 0%, 15%)' }} />
            </a>
          </Link>
          {/* <Link href="/"> */}
          {/*  <a target="_blank" title="autor strony" rel="noopener noreferrer" className="flex hover:scale-105"> */}
          {/* <Icon icon="ic:baseline-tiktok" style={{ width: '28px', height: '28px', color: 'hsl(0, 0%, 15%)' }} /> */}
          {/*  </a> */}
          {/* </Link> */}
        </div>
        <div className="">
          <Link href="https://www.ioten.io">
            <a target="_blank" title="autor strony" rel="noopener noreferrer" className="flex">
              <p className="text-xs font-extralight text-neutral-700 leading-5">Created by</p>
              <div className="flex">
                <div className="relative w-[70px] h-[16px]">
                  <Image src={iotenWhiteLogo} priority layout="fill" objectFit="contain" alt="ioten, autor strony internetowej bask" />
                </div>
                <p className="text-xs font-bold text-neutral-500 leading-5">ioten.io</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
