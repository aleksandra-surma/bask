import BaseLayout from 'components/BaseLayout';
import ContactForm from 'components/ContactForm';
import Link from 'next/link';

const title = '';
const description = '';
const canonical = '';
const ogData = {};

export default function Contact() {
  const seoData = { title, description, canonical, ogData };

  return (
    <BaseLayout seoData={seoData}>
      <div className="mx-auto max-w-screen-xl px-4 pb-16 sm:px-6">
        <div className="mt-16 w-full">
          <div className="flex flex-col laptop:flex-row">
            <div className="mr-16 flex flex-col laptop:w-2/5">
              <div className="mb-12 w-full px-4 sm:px-0 tablet:px-6">
                <h3 className="text-4xl font-bold leading-6 text-gray-900">KONTAKT</h3>
                <p className="mt-1 py-8 text-justify text-sm text-gray-700 tablet:text-base tablet:leading-6">
                  Pragniemy podzielić się naszą wiedzą i doświadczeniem, które wykorzystujemy w dążeniu do zdrowia i piękna. Podstawową wartością
                  naszej marki jest chęć dawania przyjemności ze stosowania naszych produktów.
                </p>
                <div className="hidden laptop:block">
                  <Link href="/uv-education" as="edukacja-uv">
                    <p className="inline-block cursor-pointer text-sm underline">DOWIEDZ SIĘ WIĘCEJ...</p>
                  </Link>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
