import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'comments.json');

  if (req.method === 'GET') {
    const data = JSON.parse(readFileSync(filePath, 'utf8'));
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    const { name, message } = req.body;
    if (!name || !message) return res.status(400).json({ error: 'Nama & pesan wajib' });

    const data = JSON.parse(readFileSync(filePath, 'utf8'));
    data.push({ name, message, date: new Date().toISOString() });
    writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
