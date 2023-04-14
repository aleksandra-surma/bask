import Airtable from 'airtable';

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_TOKEN,
});

export default (base) => Airtable.base(base);
// export default (base) => Airtable.base(process.env.AIRTABLE_BASE);
