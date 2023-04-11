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
        <div className="overflow-hidden h-full flex flex-col justify-between shadow rounded-md bg-white px-4 py-5 sm:p-6">
          <h2 className="text-lg text-green-600 font-semibold text-gray-800 mb-4">Twoja wiadomość została wysłana.</h2>
          <p className="text-sm text-gray-700">Zwykle odpowiadamy maksymalnie w ciągu kilku godzin roboczych.</p>
          <p className="text-sm text-gray-700">Jeśli zależy Ci na czasie zadzwoń do nas.</p>
          <Link href="/">
            <a className="mt-4 text-md font-medium underline underline-offset-[5px] text-gray-700 hover:text-green-600 cursor-pointer">
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
          <div className="overflow-hidden shadow rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
                    {contact.label.fullName}
                  </label>
                  <input
                    type="text"
                    {...register('fullName')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm bg-white dark:bg-white text-black dark:text-black"
                  />
                  {errors.fullName ? <p className="text-red-600 text-sm mt-2">{errors.fullName.message}</p> : null}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                    {contact.label.mobile}
                  </label>
                  <input
                    type="text"
                    {...register('mobile')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm bg-white dark:bg-white text-black dark:text-black"
                  />
                  {errors.mobile ? <p className="text-red-600 text-sm mt-2">{errors.mobile.message}</p> : null}
                </div>

                <div className="col-span-6">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    {contact.label.email}
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm bg-white dark:bg-white text-black dark:text-black"
                  />
                  {errors.email ? <p className="text-red-600 text-sm mt-2">{errors.email.message}</p> : null}
                </div>

                <div className="col-span-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                    {contact.label.message}
                  </label>

                  <textarea
                    rows="6"
                    {...register('message')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm bg-white dark:bg-white text-black dark:text-black"
                  />
                  {errors.message ? <p className="text-red-600 text-sm mt-2">{errors.message.message}</p> : null}
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-6">
                Zgodnie z naszą polityką prywatności Twoje dane <span className="font-semibold">nie zostaną</span> przekazane do żadnych podmiotów.
                Będą przetwarzane tylko w ramach naszej oferty.
              </p>
            </div>

            <div className="flex justify-end bg-gray-50 px-6 py-3 text-left">
              <button
                type="submit"
                className={`inline-flex justify-center rounded-md border border-transparent bg-neutral-800 py-3 w-full laptop:w-[300px] text-md font-semibold text-white shadow-sm 
              ${sendingProcess ? 'bg-green-700' : null} focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
              >
                {sendingProcess ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </button>
            </div>
          </div>

          <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} ref={captchaRef} size="invisible" />
        </form>
      )}

      {error ? <p className="text-red-600 text-sm mt-2">{error}</p> : null}
    </div>
  );
}
