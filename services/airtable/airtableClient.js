import Airtable from 'airtable';

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_TOKEN,
});

const airtableClient = (base) => Airtable.base(base);

export default airtableClient;
