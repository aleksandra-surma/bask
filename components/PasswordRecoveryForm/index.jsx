import { KeyIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function PasswordRecoveryForm() {
  return (
    <form className="mt-4 mb-12 w-full max-w-screen-sm px-4 laptop:px-10" onSubmit={() => {}}>
      <div className="min-h-full items-center justify-center rounded-lg border border-gray-200 pt-8">
        <div className="px-10">
          <div className="mb-4">
            <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">Odzyskanie hasła</h2>
            <p className="mt-2 text-center text-xs text-gray-500">Wprowadź proszę adres e-mail użyty podczas rejestracji.</p>
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
          </div>
          <div className="mb-6 text-sm">
            <Link href="/userAccount/logIn" as="/moje-konto/zaloguj">
              <a>
                <p className="font-medium text-green-700 hover:text-green-600">Zaloguj się</p>
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full bg-gray-50 py-6 px-10">
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <KeyIcon className="h-5 w-5 text-green-500 group-hover:text-green-600" aria-hidden="true" />
            </span>
            Odzyskaj hasło
          </button>
        </div>
      </div>
    </form>
  );
}
