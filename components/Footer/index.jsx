import iotenWhiteLogo from 'public/images/ioten-logo-white-small.png';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className="m-auto my-8 flex w-full max-w-screen-xl flex-col px-4 text-gray-700 tablet:px-8 laptop:mb-8 laptop:mt-16">
      <div className="flex flex-col justify-between laptop:flex-row">
        <div className="laptop:w-1/5">
          <h3 className="mb-4 font-semibold">Bask</h3>
          <p>BASK - zdrowa skóra na co dzień! Sklep internetowy ze strojami uv dla dzieci.</p>
          <ul className="mt-8">
            <li className="mb-2 hover:text-gray-400 hover:underline hover:decoration-gray-400 hover:underline-offset-4">
              <Link href="/store-bask" as="/sklep">
                <a href="">Sklep</a>
              </Link>
            </li>
            <li className="mb-2 hover:text-gray-400 hover:underline hover:decoration-gray-400 hover:underline-offset-4">
              <Link href="/uv-education" as="/edukacja-uv">
                <a href="">Edukacja UV</a>
              </Link>
            </li>
            <li className="mb-2 hover:text-gray-400 hover:underline hover:decoration-gray-400 hover:underline-offset-4">
              <Link href="/about-company" as="/o-firmie">
                <a href="">O firmie</a>
              </Link>
            </li>
            <li className="mb-2 hover:text-gray-400 hover:underline hover:decoration-gray-400 hover:underline-offset-4">
              <Link href="/contact" as="/kontakt">
                <a href="">Kontakt</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="mb-4 font-semibold">Płatność</h3>
          {/* <h3 className="font-semibold mb-4">Płatność i dostawa</h3> */}
          <ul>
            <li className="mb-2">BLIK</li>
            {/* <li className="mb-2">PayU</li> */}
            <li className="mb-2">Przelewy24</li>
            <li className="mb-2">Płatność kartą</li>
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="mb-4 font-semibold">Polityka sklepu</h3>
          <ul>
            {/* <li className="mb-2">Wysyłka</li> */}
            {/* <li className="mb-2">Polityka zwrotów</li> */}

            <li className="mb-2 cursor-pointer hover:text-gray-400 hover:underline hover:decoration-gray-400 hover:underline-offset-4">
              <Link href="/policy" as="/polityka-prywatnosci">
                <p className="">Polityka prywatności</p>
              </Link>
            </li>
            <li className="mb-2 cursor-pointer hover:text-gray-400 hover:underline hover:decoration-gray-400 hover:underline-offset-4">
              <Link href="/regulations" as="/regulamin-sklepu-internetowego">
                <p className="">Regulamin sklepu internetowego</p>
              </Link>
            </li>

            {/* <li className="mb-2">Zgłoś błąd</li> */}
          </ul>
        </div>
        <div className="mb-12">
          <h3 className="mb-4 font-semibold">Kontakt</h3>
          <p className="mb-2">Obsługa Klienta</p>
          <p className="mb-2">Pn. - Pt. 9:00 - 16:00</p>
          <a href="tel:+48535412571">
            <p className="mb-2">Nr tel.: 535 412 571</p>
          </a>
          <a className="contact-media__mail" href="mailto:kontakt@bask.com.pl">
            <p className="mb-2">kontakt@bask.com.pl</p>
          </a>
          <p className="mb-2">Współpraca</p>
          <a className="contact-media__mail" href="mailto:wspolpraca@bask.com.pl">
            <p className="mb-2">wspolpraca@bask.com.pl</p>
          </a>
        </div>
      </div>
      <div className="mt-8 flex justify-between laptop:mt-20">
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
        <div className="transition hover:scale-105">
          <Link href="https://www.ioten.io">
            <a target="_blank" title="autor strony" rel="noopener noreferrer" className="flex">
              <p className="text-xs font-extralight leading-5 text-neutral-700">Created by</p>
              <div className="flex">
                <div className="relative h-[16px] w-[70px]">
                  <Image src={iotenWhiteLogo} priority layout="fill" objectFit="contain" alt="ioten, autor strony internetowej bask" />
                </div>
                <p className="text-xs font-bold leading-5 text-neutral-500">ioten.io</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
