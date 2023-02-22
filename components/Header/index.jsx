import Image from 'next/image';
import baskLogo from 'public/images/bask-logo-plus-text.svg';
import Navigation from 'components/Navigation';
import UserSummary from 'components/UserSummary';

export default function Header() {
  return (
    <header className="flex flex-col relative tablet:items-center w-full m-auto max-w-screen-xl">
      <div className="grid grid-cols-3 items-center mx-8 w-[calc(100%-60px)] mt-10">
        <div className="flex justify-start tablet:justify-center col-start-1 tablet:col-start-2">
          <Image src={baskLogo} alt="" />
        </div>

        <UserSummary />
      </div>

      <Navigation />
    </header>
  );
}
