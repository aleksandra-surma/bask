import { useEffect, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import Link from 'next/link';

const Cookies = () => {
  const [displayCookies, setDisplayCookies] = useState(false);

  useEffect(() => {
    if (getCookie('baskCookiesConsent')) {
      setDisplayCookies(false);
    } else {
      setDisplayCookies(true);
    }
  }, [displayCookies, setDisplayCookies]);

  const handleAcceptCookies = () => {
    setCookie('baskCookiesConsent', 'accepted', { maxAge: 3600 * 24 * 365 });
    setDisplayCookies(false);
  };

  const handleRejectCookies = () => {
    setCookie('baskCookiesConsent', 'not-accepted', { maxAge: 3600 * 24 * 365 });
    setDisplayCookies(false);
  };

  if (!displayCookies) {
    return null;
  }

  return (
    <div className="fixed bottom-0 flex w-full items-center justify-center bg-white shadow-lg">
      <div className="flex max-w-screen-lg items-center justify-between p-4">
        <p className="text-gray-800">
          Używamy ciasteczek, żeby zapewnić Ci jak najlepsze doświadczenie na naszej stronie. Szczegóły znajdziesz{' '}
          <Link href="/policy" as="/polityka-prywatnosci">
            <span className="cursor-pointer underline">tutaj</span>
          </Link>
        </p>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={handleAcceptCookies}
            className="rounded bg-green-500 py-2 px-4 text-white transition duration-300 hover:bg-green-600"
          >
            Akceptuj
          </button>
          <button type="button" onClick={handleRejectCookies} className="rounded py-2 px-4 text-black transition duration-300 hover:text-gray-800">
            Odrzuć
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
