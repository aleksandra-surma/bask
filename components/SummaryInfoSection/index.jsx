import classNames from 'helpers/classNames';
import { loadStripe } from '@stripe/stripe-js';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { joiResolver } from '@hookform/resolvers/joi';
import { defaultValues, schema } from 'data/form/schema';
import Link from 'next/link';
import FormInput from '../FormInput';

export default function SummaryInfoSection({ basket, finalPrice, shippingCost }) {
  const [isSameAddress, setIsSameAddress] = useState(true);
  const [processing, setProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues.dealFinalization,
    resolver: joiResolver(schema.dealFinalization(!isSameAddress)),
  });

  const isCheckoutDisabled = finalPrice < 1;

  const handleFinalizeCheckout = async () => {
    setProcessing(true);
    const userData = watch();

    const basketData = { basketArray: basket, finalPrice, shippingCost };

    const payload = { userData, basketData, finalPrice, shippingCost };

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY_DEV);

    const response = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // console.log('response', response);

    if (response.ok) {
      const { checkout } = await response.json();

      await stripe.redirectToCheckout({ sessionId: checkout?.id });
    } else {
      console.log('error');
      // todo: handle error
    }

    setProcessing(false);
  };

  console.log('errors', errors);

  return (
    <div className="mr-8 w-3/5">
      {basket?.length > 0 ? (
        <form onSubmit={handleSubmit(() => handleFinalizeCheckout())}>
          <div className="mb-10">
            <h2 className="mb-2 text-3xl font-semibold uppercase">Dane kontaktowe</h2>

            <p className="mb-4">Użyjemy tych danych, aby poinformować Cię o dostawie.</p>

            <FormInput label="Email" type="text" register={register} name="email" halfView error={errors.email ? errors.email.message : null} />
          </div>

          <div className="flex flex-wrap justify-between">
            <h2 className="mb-4 w-full text-3xl font-semibold uppercase">Dane do wysyłki</h2>

            <FormInput
              label="Imię"
              type="text"
              register={register}
              name="firstName"
              halfView
              error={errors.firstName ? errors.firstName.message : null}
            />

            <FormInput
              label="Nazwisko"
              type="text"
              register={register}
              name="lastName"
              halfView
              error={errors.lastName ? errors.lastName.message : null}
            />

            <FormInput
              label="Adres"
              type="text"
              register={register}
              name="address"
              example="Np.: ul. Zimowa 12"
              error={errors.address ? errors.address.message : null}
            />

            <FormInput
              label="Dodatkowe informacje"
              type="text"
              register={register}
              name="additionalAddress"
              example="Np.: Firma, Lokal, Piętro"
              notRequired
              error={errors.additionalAddress ? errors.additionalAddress.message : null}
            />

            <FormInput
              label="Kod pocztowy"
              type="text"
              register={register}
              name="postalCode"
              halfView
              error={errors.postalCode ? errors.postalCode.message : null}
            />

            <FormInput label="Miasto" type="text" register={register} name="city" halfView error={errors.city ? errors.city.message : null} />

            <FormInput
              label="Numer telefonu"
              type="text"
              register={register}
              name="phoneNumber"
              halfView
              error={errors.phoneNumber ? errors.phoneNumber.message : null}
            />
          </div>

          <FormInput label="Nip" type="text" notRequired register={register} name="nip" halfView error={errors.nip ? errors.nip.message : null} />

          <div className="my-8">
            <h2 className="text-3xl font-semibold uppercase">Dostarczenie zamówienia</h2>

            <div className="my-8 flex items-center justify-between bg-green-200 p-8">
              <input
                className="mr-4 border-2 border-black p-3 text-black focus:ring-black"
                type="checkbox"
                {...register('shippingMethodCourier')}
                disabled
                checked
              />
              <div className="flex w-[85%] justify-between">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold uppercase">Dostawa kurierem</h3>
                  <p className="mt-2 text-sm">Dostawa kurierem w ciągu 1-2 dni roboczych</p>
                  <p className="text-sm">Za darmo od 500zł</p>
                </div>
                <div className="flex items-center">
                  <Icon icon="iconoir:delivery-truck" width={36} className="text-neutral-900" />
                </div>
              </div>
            </div>

            <div className="my-8 flex cursor-not-allowed items-center justify-between bg-neutral-100 p-8">
              <input
                className="mr-4 cursor-not-allowed border-2 border-neutral-300 p-3 text-black focus:ring-black"
                type="checkbox"
                {...register('shippingMethodInpost')}
                disabled
                checked={false}
              />
              <div className="flex w-[85%] justify-between">
                <div className="flex flex-col">
                  <h3 className="text-md font-semibold uppercase text-neutral-400">Dostawa do paczkomatu - już niedługo</h3>
                  <p className="mt-2 text-xs text-neutral-400">Dostawa do paczkomatu jeszcze nie jest dostępna</p>
                  {/*<p className="text-sm text-neutral-400">Za darmo od 500zł</p>*/}
                </div>
                <div className="flex items-center">
                  <Icon icon="lucide:package-open" width={30} className="text-neutral-400" />
                </div>
              </div>
            </div>

            <div className={classNames('my-4 flex w-full items-center')}>
              <input
                className="mr-4 border-2 border-black p-3 text-black focus:ring-black"
                type="checkbox"
                {...register('addressTheSame')}
                onChange={() => {
                  setIsSameAddress(!isSameAddress);
                }}
                checked={isSameAddress}
              />
              <label className="">Adres dostawy i adres do wystawienia faktury są takie same *</label>
              {/* {error && <p className="">{error}</p>} */}
            </div>

            <div className={classNames(isSameAddress ? 'hidden' : '', 'flex flex-wrap justify-between')}>
              <h2 className="mb-4 w-full text-3xl font-semibold uppercase">Szczegóły do faktury</h2>

              <FormInput
                label="Dane osobowe lub nazwa firmy"
                type="text"
                register={register}
                name="invoiceName"
                error={errors.invoiceName ? errors.invoiceName.message : null}
              />

              <FormInput
                label="Adres"
                type="text"
                register={register}
                name="invoiceAddress"
                example="Np.: ul. Zimowa 12"
                error={errors.invoiceAddress ? errors.invoiceAddress.message : null}
              />

              <FormInput
                label="Dodatkowe informacje"
                type="text"
                register={register}
                name="invoiceAdditionalAddress"
                example="Np.: Firma, Lokal, Piętro"
                notRequired
                error={errors.invoiceAdditionalAddress ? errors.invoiceAdditionalAddress.message : null}
              />

              <FormInput
                label="Kod pocztowy"
                type="text"
                register={register}
                name="invoicePostalCode"
                halfView
                error={errors.invoicePostalCode ? errors.invoicePostalCode.message : null}
              />

              <FormInput
                label="Miasto"
                type="text"
                register={register}
                name="invoiceCity"
                halfView
                error={errors.invoiceCity ? errors.invoiceCity.message : null}
              />
            </div>
          </div>

          <div className={classNames('my-4 flex w-full items-center')}>
            <input className="mr-4 border-2 border-black p-3 text-black focus:ring-black" type="checkbox" {...register('privacyPolicy')} />
            <label className="">
              <Link href="/policy" as="/polityka-prywatnosci">
                <p className="cursor-pointer underline decoration-2 underline-offset-2 hover:text-neutral-500">Polityka prywatności *</p>
              </Link>

              <p className="text-sm text-neutral-600">
                Zgodnie z naszą polityką prywatności Twoje dane nie zostaną przekazane do żadnych podmiotów. Będą przetwarzane tylko w ramach naszej
                oferty.
              </p>
            </label>
          </div>

          {errors.privacyPolicy ? <p className="mt-2 text-sm text-red-600">{errors.privacyPolicy.message}</p> : null}

          <div className="mt-8 flex">
            <button
              type="submit"
              disabled={isCheckoutDisabled}
              className={classNames(
                'w-full rounded bg-black laptop:w-[420px]',
                isCheckoutDisabled ? 'cursor-not-allowed bg-neutral-400' : 'hover:bg-green-600',
                processing ? 'cursor-not-allowed bg-neutral-400 hover:bg-neutral-400' : '',
              )}
            >
              <p className="py-6 font-semibold text-white">{processing ? 'PROSZĘ ZACZEKAĆ...' : 'PRZEJDŹ DO PŁATNOŚCI'}</p>
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-semibold">Twój koszyk jest pusty</p>
          <Link href="/store-bask" as="/sklep">
            <a className="mt-4 rounded text-center font-semibold underline">Wróć do sklepu</a>
          </Link>
        </div>
      )}
    </div>
  );
}

// "Webhook Error: No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? \nLearn more about webhook signing and explore webhook integration examples for various frameworks at https://github.com/stripe/stripe-node#webhook-signing"
