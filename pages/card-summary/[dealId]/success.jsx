import airtableClient from 'services/airtable/airtableClient';

export const getServerSideProps = async ({ query }) => {
  // export const getServerSideProps = async ({ req, query }) => {
  const { dealId } = query;

  console.log('dealId PaymentStatus: ', dealId);

  const [dealData] = await airtableClient('temporaryCustomers')
    .select({
      filterByFormula: `dealId="${dealId}"`,
    })
    .firstPage();
  console.log('dealData: ', dealData);
  // const { checkout, airtableId } = await finalize(req, dealId);
  //

  // const airtableId = airtableClient;

  // const { response } = await axios
  //   .put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout/${dealData.fields.dealId}/successPayment`)
  //   .catch((responseError) => {
  //     console.log('responseError: ', responseError);
  //     return responseError;
  //   });

  // const response =
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout/${dealData.fields.dealId}/successPayment`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // console.log('response: ', response);

  // await airtableClient('temporaryCustomers').update([
  //   {
  //     id: dealData.id,
  //     fields: {
  //       stripeCheck: 'success',
  //     },
  //   },
  // ]);

  return {
    props: {
      // checkout,
      // airtableId,
      dealId: dealData.fields.dealId,
    },
  };
};

export default function Success({ dealId }) {
  console.log('dealId: ', dealId);
  return (
    <div className="bg-white rounded-lg mb-16">
      <div className="flex w-full">
        <div className="flex w-full">{dealId}</div>
      </div>
    </div>
  );
}
