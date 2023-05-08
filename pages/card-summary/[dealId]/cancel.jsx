import BaseLayout from 'components/BaseLayout';
import Link from 'next/link';

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const canonical = '';
const ogData = {};

export default function Cancel() {
  const seoData = { title, description, canonical, ogData };

  return (
    <BaseLayout seoData={seoData}>
      <div className="mb-16 rounded-lg bg-white">
        <div className="flex w-full justify-center">
          <div className="mx-4 my-20 flex flex-col bg-neutral-100 p-10">
            <h1 className="mb-2 text-xl font-semibold text-yellow-500">Transakcja została anulowana.</h1>
            {/* <p>Jak tylko środki zostaną zaksięgowane, przesyłkę przekażemy do wysyłki.</p> */}
            <div className="mt-4 flex flex-col items-start justify-center text-neutral-400">
              <Link href="/card-summary" as="/koszyk">
                <a className="mt-4 rounded text-center font-semibold  underline decoration-green-400 decoration-2 underline-offset-4">
                  Wróć do koszyka
                </a>
              </Link>

              <Link href="/" as="/">
                <a className="mt-4 rounded text-center font-semibold underline  decoration-green-400 decoration-2 underline-offset-4">
                  Wróć do strony głównej
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
