export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end() // Method not allowed
    return
  }
}
