import airtableClient from 'services/airtable/airtableClient';
import { useEffect } from 'react';
import BaseLayout from 'components/BaseLayout';
import Link from 'next/link';
import { db } from '../../../data/dbData';

const title = 'Bask - stroje kąpielowe UV dla dzieci';
const description = '';
const canonical = '';
const ogData = {};

// todo: delete dealId from airtable

export default function Success({ dealId }) {
  const seoData = { title, description, canonical, ogData };

  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem('bask-basket');
    }, 100);
  }, []);

  console.log('dealId: ', dealId);
  return (
    <BaseLayout seoData={seoData}>
      <div className="mb-16 rounded-lg bg-white">
        <div className="flex w-full justify-center">
          <div className="my-20 mx-4 flex flex-col bg-neutral-100 p-10">
            <h1 className="mb-6 text-xl font-semibold">Transakcja przebiegła prawidłowo.</h1>
            <p>Jak tylko środki zostaną zaksięgowane, przesyłkę przekażemy do wysyłki.</p>
            <p></p>
            <div className="mt-4 flex flex-col items-start justify-center text-neutral-400">
              <Link href="/store-bask" as="/sklep">
                <a className="mt-4 rounded text-center font-semibold  underline decoration-green-400  decoration-2 underline-offset-4">
                  Wróć do sklepu
                </a>
              </Link>
              <Link href="/" as="/">
                <a className="mt-4 rounded text-center font-semibold underline  decoration-green-400  decoration-2 underline-offset-4">
                  Wróć do strony głównej
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export async function getServerSideProps({ query }) {
  const { dealId } = query;

  const dbId = process.env.AIRTABLE_PAYMENTS_BASE;
  const subDb = db.payments.temporaryCustomers;

  const [dealData] = await airtableClient(dbId)(subDb)
    .select({
      filterByFormula: `dealId="${dealId}"`,
    })
    .firstPage();

  // const response =
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout/${dealData.fields.dealId}/successPayment`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return {
    props: {
      dealId: dealData.fields.dealId,
    },
  };
}
