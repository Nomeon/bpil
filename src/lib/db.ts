import { MONGODB_URI } from '$env/static/private';
import { MongoClient, Db } from "mongodb";

const client: MongoClient = new MongoClient(MONGODB_URI);

export async function connect(): Promise<void> {
    await client.connect();
}

export async function disconnect(): Promise<void> {
    await client.close();
}

export async function getDB(): Promise<Db> {
    const db = await client.db();
    return db
}