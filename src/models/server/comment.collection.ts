import { Permission, IndexType } from "node-appwrite";
import { commentCollection, db } from "../name"; // Ensure `name.ts` exists and exports `commentCollection`
import { databases } from "./config";

export default async function createCommentCollection() {
    try {
        // ✅ Create collection with explicit collection ID and name
        await databases.createCollection(db, commentCollection, "Comment Collection", [
            Permission.read("any"),
            Permission.read("users"),
            Permission.create("users"),
            Permission.update("users"),
            Permission.delete("users")
        ]);
        console.log("✅ Comment collection is created");

        // ✅ Creating attributes with explicit constraints
        await Promise.all([
            databases.createStringAttribute(db, commentCollection, "content", 10000, true), // Comment text
            databases.createEnumAttribute(db, commentCollection, "type", ["answer", "question"], true, "answer"), // Default to "answer"
            databases.createStringAttribute(db, commentCollection, "authorId", 50, true), // User who posted the comment
            databases.createStringAttribute(db, commentCollection, "typeId", 50, true) // ID of the question or answer being commented on
        ]);
        console.log("✅ Comment attributes created");

        // ✅ Create indexes
        await Promise.all([
            databases.createIndex(db, commentCollection, "content", IndexType.Fulltext, ["content"]),
            databases.createIndex(db, commentCollection, "typeId", IndexType.Key, ["typeId"])
        ]);
        console.log("✅ Comment indexes created successfully");
    } catch (error) {
        console.error("❌ Error creating comment collection:", error);
    }
}