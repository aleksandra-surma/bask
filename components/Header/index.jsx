import Image from 'next/image';
import baskLogo from 'public/svg/bask-logo.svg';
import Navigation from 'components/Navigation';
import UserSummary from 'components/UserSummary';

export default function Header() {
  return (
    <header className="relative m-auto flex w-full max-w-screen-xl flex-col tablet:items-center">
      <div className="mx-8 grid w-[calc(100%-60px)] grid-cols-3 items-center">
        <div className="col-start-1 flex justify-start tablet:col-start-2 tablet:justify-center">
          <Image src={baskLogo} alt="" width={120} />
        </div>

        <UserSummary />
      </div>

      <Navigation />
    </header>
  );
}
