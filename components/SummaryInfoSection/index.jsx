import Link from 'next/link';
import classNames from 'helpers/classNames';
import { loadStripe } from '@stripe/stripe-js';
import { useForm } from 'react-hook-form';
import FormInput from 'components/FormInput';

export default function SummaryInfoSection({ basket, finalPrice }) {
  const {
    register,
    // handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    // defaultValues: defaultValues.createAccount,
    // resolver: joiResolver(schema.createAccountFrontend), to zod
  });

  const isCheckoutDisabled = finalPrice < 1;

  const handleFinalizeCheckout = async () => {
    // onClick={async (formProcessing, setFormProcessing, watch) => {
    const payload = basket;

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

      await stripe.redirectToCheckout({ sessionId: checkout.id });
    }
  };

  return (
    <div className="w-3/5">
      <form>
        <h2 className="text-3xl font-semibold uppercase">Dane kontaktowe</h2>

        <p className="mt-2 mb-4">Użyjemy tych danych, aby poinformować Cię o dostawie.</p>

        <FormInput
          label="email"
          classNameModifier
          type="text"
          register={register}
          name="email"
          halfView
          isRequired
          error={errors.lastName ? errors.lastName.message : null}
        />

        <div>
          <h2 className="text-3xl font-semibold uppercase">Dane do wysyłki</h2>
          <form>form</form>
        </div>
        <div>
          <h2 className="text-3xl font-semibold uppercase">Dostarczenie zamówienia</h2>
          <div>Info</div>
          <div>Kurier</div>
        </div>
        <div className="flex mt-8">
          <Link href="/card-summary/checkout" as="/koszyk/podsumowanie">
            <button
              type="button"
              onClick={handleFinalizeCheckout}
              disabled={isCheckoutDisabled}
              className={classNames(
                'bg-black rounded w-full laptop:w-[420px]',
                isCheckoutDisabled ? 'bg-neutral-400 text-neutral-100 cursor-not-allowed' : 'hover:bg-green-600 text-white',
              )}
            >
              <p className="font-semibold py-3">PRZEJDŹ DO PŁATNOŚCI</p>
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
