import { getDB } from "$lib/db";

export async function GET(request: Request): Promise<Response> {
    try {
        const db = await getDB();
        const collection = db.collection('location');
        const url = new URL(request.url);
        let order = url.searchParams.get("OrderID") || "";
        let locations = await collection.find({ OrderID: JSON.parse(order) }).toArray();
        const location = locations[0];
        // @ts-ignore
        delete location._id;

        // Add header to specify content type
        const headers = new Headers();
        headers.set("Content-Type", "application/json");
        return new Response(JSON.stringify(location), {status: 200, headers})
    } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 })
    }
}