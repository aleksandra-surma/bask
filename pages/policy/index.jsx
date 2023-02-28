import BaseLayout from 'components/BaseLayout';
import Link from 'next/link';

const title = '';
const description = '';
const canonical = '';
const ogData = {};

export default function Policy() {
  const seoData = { title, description, canonical, ogData };

  return (
    <BaseLayout seoData={seoData}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 pb-16">
        <div className="mt-16 w-full">
          <div className="flex flex-col laptop:flex-row">
            <div className="flex flex-col laptop:w-2/5 mr-16">
              <div className="px-4 sm:px-0 tablet:px-6 w-full mb-12 bg-amber-100">
                {/* todo: change styles/classes */}
                <h3 className="text-4xl font-bold leading-6 text-gray-900">Polityka prywatności</h3>
                <p className="mt-1 text-sm tablet:text-base tablet:leading-6 text-gray-700 py-8">
                  Pragniemy podzielić się naszą wiedzą i doświadczeniem, które wykorzystujemy w dążeniu do zdrowia i piękna. Podstawową wartością
                  naszej marki jest chęć dawania przyjemności ze stosowania naszych produktów.
                </p>
                <div className="hidden laptop:block">
                  <Link href="/uvEducation" as="/edukacja-uv">
                    <p className="inline-block text-sm underline cursor-pointer">DOWIEDZ SIĘ WIĘCEJ...</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
