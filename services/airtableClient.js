import Airtable from 'airtable';

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_TOKEN,
});

export default Airtable.base(process.env.AIRTABLE_BASE);
