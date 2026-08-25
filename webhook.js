export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ ok: true });
  }

  console.log("MAX webhook:", JSON.stringify(req.body));

  return res.status(200).json({ ok: true });
}
