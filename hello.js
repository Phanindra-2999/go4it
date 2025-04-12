export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    if (text === 'go4it') {
      const webhookUrl = 'https://discord.com/api/webhooks/1358311048540590101/PS8yicOuN6GrF4UduaxCeqm9lHiYxWPj7ZBD54IsqbR9zax9vfUBYpk9DOPyD93ALP6_';

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: 'hi' })
      });

      return res.status(200).json({ status: 'sent "hi" to Discord' });
    }

    return res.status(200).json({ status: 'no action' });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
