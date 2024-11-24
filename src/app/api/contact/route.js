// app/api/contact/route.js
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function POST(req) {
    try {
        const { name, email, phone, message } = await req.json();

        // Referência à coleção 'contacts' no Firestore
        const docRef = await addDoc(collection(db, "contacts"), {
            name,
            email,
            phone,
            message,
            timestamp: new Date(),
        });

        return new Response(JSON.stringify({ success: true, id: docRef.id }), { status: 200 });
    } catch (error) {
        console.error("Error adding document:", error);
        return new Response(JSON.stringify({ error: "Failed to save data" }), { status: 500 });
    }
}
