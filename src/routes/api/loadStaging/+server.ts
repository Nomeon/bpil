import { getDB } from "$lib/db";

export async function GET(request: Request): Promise<Response> {
    try {
        const db = await getDB();
        const collection = db.collection('data');
        let data = await collection.find({}).toArray();
        console.log(data)

        return new Response(JSON.stringify(data), {status: 200})
    } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 })
    }
}