import BaseLayout from 'components/BaseLayout';
import Link from 'next/link';

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const canonical = '';
const ogData = {};

export default function FourOneFour() {
  const seoData = { title, description, canonical, ogData };

  return (
    <BaseLayout seoData={seoData}>
      <div className="bg-white rounded-lg mb-16">
        <div className="flex justify-center w-full">
          <div className="flex flex-col p-10 my-20 mx-4 bg-neutral-100">
            <h1 className="text-4xl font-semibold text-green-500 mb-2">Strona 404</h1>
            {/* <p>Jak tylko środki zostaną zaksięgowane, przesyłkę przekażemy do wysyłki.</p> */}
            <div className="flex flex-col items-start justify-center mt-4 text-neutral-400">
              <Link href="/store-bask" as="/sklep">
                <a className="text-center rounded underline underline-offset-4  decoration-2 decoration-green-400  font-semibold mt-4">
                  Wróć do sklepu
                </a>
              </Link>

              <Link href="/" as="/">
                <a className="text-center rounded underline underline-offset-4 decoration-2  decoration-green-400 font-semibold mt-4">
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
