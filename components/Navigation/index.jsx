import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="mt-8 flex w-full flex-col justify-center bg-gray-50 px-6 text-gray-500 tablet:mx-0 tablet:mb-6 tablet:mt-2 tablet:flex-row tablet:bg-white">
      <Link href="/">
        <a className="mr-6 cursor-pointer p-4 pt-8 underline-offset-4 transition hover:text-black hover:underline tablet:ml-8 tablet:mr-8 tablet:p-0">
          HOME
        </a>
      </Link>
      <Link href="/store-bask" as="/sklep">
        <a className="mr-6 cursor-pointer p-4 underline-offset-4 transition hover:text-black hover:underline tablet:ml-8 tablet:mr-8 tablet:p-0">
          SKLEP
        </a>
      </Link>
      <Link href="/uv-education" as="/edukacja-uv">
        <a className="mr-6 cursor-pointer p-4 underline-offset-4 transition hover:text-black hover:underline tablet:ml-8 tablet:mr-8 tablet:p-0">
          EDUKACJA UV
        </a>
      </Link>
      <Link href="/about-company" as="/o-firmie">
        <a className="mr-6 cursor-pointer p-4 underline-offset-4 transition hover:text-black hover:underline tablet:ml-8 tablet:mr-8 tablet:p-0">
          O FIRMIE
        </a>
      </Link>
      <Link href="/contact" as="/kontakt">
        <a className="cursor-pointer p-4 pb-8 underline-offset-4 transition hover:text-black hover:underline tablet:ml-8 tablet:mr-8 tablet:p-0">
          KONTAKT
        </a>
      </Link>
    </nav>
  );
}
