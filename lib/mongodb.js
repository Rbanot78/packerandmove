// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://rohitbanot_db_user:2uqthUh9mIPy1hWW@cluster0.ulalfrb.mongodb.net/Anil-packers?appName=Cluster0';
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error('Please add your MONGODB_URI to .env.local');
}

// In development, use a global variable to preserve the client across module reloads
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, it's okay to create a new client and connect normally
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise; // returns a Promise<MongoClient>
