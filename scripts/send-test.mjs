const URL = process.argv[2];
const res = await fetch(URL + '/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Portfolio Test (Claude)',
    email: 'sonikartavya2003@outlook.com',
    message: 'This is an automated end-to-end test of your live contact form. If you received this in your Outlook inbox, the Resend integration is working correctly. You can ignore/delete this message.',
  }),
});
console.log('HTTP', res.status);
console.log(await res.text());
