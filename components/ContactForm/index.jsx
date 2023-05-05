import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import { defaultValues } from 'data/form/defaultValues';
import submitFunc from 'utils/submitFunc';
import { joiResolver } from '@hookform/resolvers/joi';
import ReCAPTCHA from 'react-google-recaptcha';
import { schema } from 'data/form/schema';
import { formData } from 'data/form/formData';
import Link from 'next/link';

export default function ContactForm() {
  const [error, setError] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [sendingProcess, setSendingProcess] = useState(false);
  const captchaRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues.contact,
    resolver: joiResolver(schema.contactForm),
  });

  const { contact } = formData;

  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      {messageSent ? (
        <div className="flex h-full flex-col justify-between overflow-hidden rounded-md bg-white px-4 py-5 shadow sm:p-6">
          <h2 className="mb-4 text-lg font-semibold text-green-600 text-gray-800">Twoja wiadomość została wysłana.</h2>
          <p className="text-sm text-gray-700">Zwykle odpowiadamy maksymalnie w ciągu kilku godzin roboczych.</p>
          <p className="text-sm text-gray-700">Jeśli zależy Ci na czasie zadzwoń do nas.</p>
          <Link href="/">
            <a className="text-md mt-4 cursor-pointer font-medium text-gray-700 underline underline-offset-[5px] hover:text-green-600">
              Wróć do strony głównej
            </a>
          </Link>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(async () => {
            // reset();
            await submitFunc(reset, watch, error, setError, sendingProcess, setSendingProcess, setMessageSent, captchaRef);
          })}
        >
          <div className="overflow-hidden rounded-md shadow">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
                    {contact.label.fullName}
                  </label>
                  <input
                    type="text"
                    {...register('fullName')}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-white text-black shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-white dark:text-black sm:text-sm"
                  />
                  {errors.fullName ? <p className="mt-2 text-sm text-red-600">{errors.fullName.message}</p> : null}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                    {contact.label.mobile}
                  </label>
                  <input
                    type="text"
                    {...register('mobile')}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-white text-black shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-white dark:text-black sm:text-sm"
                  />
                  {errors.mobile ? <p className="mt-2 text-sm text-red-600">{errors.mobile.message}</p> : null}
                </div>

                <div className="col-span-6">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    {contact.label.email}
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-white text-black shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-white dark:text-black sm:text-sm"
                  />
                  {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email.message}</p> : null}
                </div>

                <div className="col-span-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                    {contact.label.message}
                  </label>

                  <textarea
                    rows="6"
                    {...register('message')}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-white text-black shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-white dark:text-black sm:text-sm"
                  />
                  {errors.message ? <p className="mt-2 text-sm text-red-600">{errors.message.message}</p> : null}
                </div>
              </div>
              <p className="mt-6 text-xs text-gray-500">
                Zgodnie z naszą polityką prywatności Twoje dane <span className="font-semibold">nie zostaną</span> przekazane do żadnych podmiotów.
                Będą przetwarzane tylko w ramach naszej oferty.
              </p>
            </div>

            <div className="flex justify-end bg-gray-50 px-6 py-3 text-left">
              <button
                type="submit"
                className={`text-md inline-flex w-full justify-center rounded-md border border-transparent bg-neutral-800 py-3 font-semibold text-white shadow-sm laptop:w-[300px] 
              ${sendingProcess ? 'bg-green-700' : null} focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
              >
                {sendingProcess ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </button>
            </div>
          </div>

          <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} ref={captchaRef} size="invisible" />
        </form>
      )}

      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
