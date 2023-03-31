import classNames from 'helpers/classNames';
import { loadStripe } from '@stripe/stripe-js';
import { useForm } from 'react-hook-form';
import FormInput from 'components/FormInput';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { joiResolver } from '@hookform/resolvers/joi';
import { defaultValues, schema } from 'data/form/schema';

export default function SummaryInfoSection({ basket, finalPrice, shippingCost }) {
  const [isSameAddress, setIsSameAddress] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues.dealFinalization,
    resolver: joiResolver(schema.dealFinalization(!isSameAddress)),
  });

  console.log('errors: ', errors);

  const isCheckoutDisabled = finalPrice < 1;

  const handleFinalizeCheckout = async () => {
    // onClick={async (formProcessing, setFormProcessing, watch) => {
    console.log('basket: ', basket);

    const userData = watch();

    const payload = { userData, basket, shippingCost };

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

    const response = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('response', response);

    if (response.ok) {
      const { checkout } = await response.json();

      await stripe.redirectToCheckout({ sessionId: checkout?.id });
    } else {
      console.log('error');
      // todo: handle error
    }
  };

  console.log('watch: ', watch());

  return (
    <div className="w-3/5 mr-8">
      <form onSubmit={handleSubmit(() => handleFinalizeCheckout())}>
        <div className="mb-10">
          <h2 className="text-3xl mb-2 font-semibold uppercase">Dane kontaktowe</h2>

          <p className="mb-4">Użyjemy tych danych, aby poinformować Cię o dostawie.</p>

          <FormInput label="Email" type="text" register={register} name="email" halfView error={errors.email ? errors.email.message : null} />
        </div>

        <div className="flex flex-wrap justify-between">
          <h2 className="mb-4 text-3xl font-semibold uppercase w-full">Dane do wysyłki</h2>

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

          <div className="bg-green-200 my-8 p-8 flex justify-between">
            <div className="flex flex-col">
              <h3 className="text-lg uppercase font-semibold">Dostawa kurierem</h3>
              <p className="text-sm mt-2">Dostawa kurierem w ciągu 1-2 dni roboczych</p>
              <p className="text-sm">Za darmo od 200zł</p>
            </div>
            <div className="flex items-center">
              <Icon icon="iconoir:delivery-truck" width={30} />
            </div>
          </div>

          <div className={classNames('flex items-center my-4 w-full')}>
            <input
              className="mr-4 text-black border-black border-2 focus:ring-black p-3"
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
            <h2 className="mb-4 text-3xl font-semibold uppercase w-full">Szczegóły do faktury</h2>

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
        <div className="flex mt-8">
          {/* <Link href="/card-summary/checkout" as="/koszyk/podsumowanie"> */}
          <button
            type="submit"
            disabled={isCheckoutDisabled}
            className={classNames(
              'bg-black rounded w-full laptop:w-[420px]',
              isCheckoutDisabled ? 'bg-neutral-400 text-neutral-100 cursor-not-allowed' : 'hover:bg-green-600 text-white',
            )}
          >
            <p className="font-semibold py-6">PRZEJDŹ DO PŁATNOŚCI</p>
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
}
