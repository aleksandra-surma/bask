import { LockClosedIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function LogInForm() {
  return (
    <form className="mb-12 mt-4 w-full max-w-screen-sm px-4 laptop:px-10" onSubmit={() => {}}>
      <div className="min-h-full items-center justify-center rounded-lg border border-gray-200 pt-8">
        <div className="px-10">
          <div>
            <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">Zaloguj się</h2>
            <p className="mt-2 text-center text-xs text-gray-500">...i rób zakupy w łatwiejszy sposób</p>
            {/* <p className="text-xs text-gray-500 text-center mt-2">Błyskawicznie i niezobowiązująco.</p> */}
          </div>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
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
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                Hasło
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="my-8 text-sm">
              <Link href="/userAccount/password-recovery" as="/moje-konto/odzyskanie-hasla">
                <a>
                  <p className="font-medium text-green-700 hover:text-green-600">Zapomniałaś(eś) hasło?</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-50 px-10 pb-2 pt-6">
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-green-500 group-hover:text-green-600" aria-hidden="true" />
            </span>
            Zaloguj się
          </button>
          <Link href="/userAccount/create-account" as="/moje-konto/nowe-konto">
            <a className="group relative mt-2 flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-gray-800 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              Utwórz konto
            </a>
          </Link>
        </div>
      </div>
    </form>
  );
}
