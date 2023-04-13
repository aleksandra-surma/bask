import airtableClient from 'services/airtable/airtableClient';
import { useEffect } from 'react';
import BaseLayout from 'components/BaseLayout';
import Link from 'next/link';

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
      <div className="bg-white rounded-lg mb-16">
        <div className="flex justify-center w-full">
          <div className="flex flex-col p-10 my-20 mx-4 bg-neutral-100">
            <h1 className="text-xl font-semibold mb-6">Transakcja przebiegła prawidłowo.</h1>
            <p>Jak tylko środki zostaną zaksięgowane, przesyłkę przekażemy do wysyłki.</p>
            <p></p>
            <div className="flex flex-col items-start justify-center mt-4 text-neutral-400">
              <Link href="/store-bask" as="/sklep">
                <a className="text-center rounded underline underline-offset-4  decoration-2 decoration-green-400  font-semibold mt-4">
                  Wróć do sklepu
                </a>
              </Link>
              <Link href="/" as="/">
                <a className="text-center rounded underline underline-offset-4 decoration-2  decoration-green-400  font-semibold mt-4">
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

  const [dealData] = await airtableClient('temporaryCustomers')
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
