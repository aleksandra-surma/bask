import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex flex-col tablet:flex-row justify-center mt-8 tablet:mt-10 tablet:mb-16 px-6 w-full bg-gray-50 tablet:mx-0 text-gray-500 tablet:bg-white">
      <Link href="/">
        <a className="cursor-pointer hover:text-black p-4 pt-8 mr-6 tablet:mr-10 tablet:p-0">HOME</a>
      </Link>
      <Link href="/storeBask" as="sklep">
        <a className="cursor-pointer hover:text-black p-4 mr-6 tablet:mr-10 tablet:p-0">🐚 SKLEP</a>
      </Link>
      <Link href="/uvEducation" as="edukacja-uv">
        <a className="cursor-pointer hover:text-black p-4 mr-6 tablet:mr-10 tablet:p-0">EDUKACJA UV</a>
      </Link>
      <Link href="/aboutCompany" as="o-firmie">
        <a className="cursor-pointer hover:text-black p-4 mr-6 tablet:mr-10 tablet:p-0">O FIRMIE🇵🇱</a>
      </Link>
      <Link href="/contact" as="kontakt">
        <a className="cursor-pointer hover:text-black p-4 pb-8 tablet:mr-10 tablet:p-0">KONTAKT</a>
      </Link>
    </nav>
  );
}
