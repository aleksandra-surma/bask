const postmark = require('postmark');

const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN);

export default client;
