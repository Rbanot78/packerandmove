// pages/api/notes/index.js
import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('Anil-packers');
  const notes = db.collection('homepage');

  if (req.method === 'GET') {
    const items = await notes.find({}).sort({ _id: -1 }).toArray();
    return res.status(200).json(items);
  }

  if (req.method === 'POST') {
    const { text } = req.body;
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'text (string) is required' });
    }
    const result = await notes.insertOne({
      text,
      createdAt: new Date(),
    });
    const inserted = await notes.findOne({ _id: result.insertedId });
    return res.status(201).json(inserted);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
