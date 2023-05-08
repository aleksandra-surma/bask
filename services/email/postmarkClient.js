// Require:
const postmark = require('postmark');

// Send an email:
const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN);
// const postmarkClient = new postmark.Client(process.env.POSTMARK_API_TOKEN);
// const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN);

export default client;
