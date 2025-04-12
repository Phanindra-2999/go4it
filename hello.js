const express = require('express');

const app = express();
app.use(express.json());

app.post('/api/hello', async (req, res) => {
  const { text } = req.body;

  if (text === 'go4it') {
    const webhookUrl = 'https://discord.com/api/webhooks/1358311048540590101/PS8yicOuN6GrF4UduaxCeqm9lHiYxWPj7ZBD54IsqbR9zax9vfUBYpk9DOPyD93ALP6_';

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: 'hi' })
    });

    return res.json({ status: 'sent "hi" to Discord' });
  }

  res.json({ status: 'no action' });
});

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
