import BaseLayout from 'components/BaseLayout';
import { SparklesIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const canonical = '';
const ogData = {};

export default function CreateAccount() {
  const seoData = { title, description, canonical, ogData };
  return (
    <BaseLayout seoData={seoData}>
      <form className="w-full max-w-screen-sm px-4 laptop:px-10 mt-4 mb-12" onSubmit={() => {}}>
        <div className="min-h-full items-center justify-center pt-8 border border-gray-200 rounded-lg">
          <div className="px-10 space-y-8">
            <div>
              <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">Utwórz konto</h2>
              <p className="text-xs text-gray-500 text-center mt-2">Błyskawicznie i niezobowiązująco</p>
            </div>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className=" rounded-md shadow-sm">
              <div className="mb-4">
                <label htmlFor="given-name" className="block text-sm font-semibold text-gray-700">
                  Imię
                </label>
                <input
                  id="given-name"
                  name="given-name"
                  type="given-name"
                  autoComplete="given-name"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                />
              </div>
              <div className="mb-12">
                <label htmlFor="family-name" className="block text-sm font-semibold text-gray-700">
                  Nazwisko
                </label>
                <input
                  id="family-name"
                  name="family-name"
                  type="family-name"
                  autoComplete="family-name"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email-address" className="block text-sm font-semibold text-gray-700">
                  Adres email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Hasło
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-sm mb-8 mr-10">
                <Link href="/user-account/password-recovery" as="/moje-konto/odzyskanie-hasla">
                  <a>
                    <p className="font-medium text-green-700 hover:text-green-600">Mam konto chcę się zalogować...</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 py-6 px-10 w-full">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SparklesIcon className="h-5 w-5 text-green-500 group-hover:text-green-600" aria-hidden="true" />
              </span>
              Utwórz konto
            </button>
            <p></p>
          </div>
        </div>
      </form>
    </BaseLayout>
  );
}
