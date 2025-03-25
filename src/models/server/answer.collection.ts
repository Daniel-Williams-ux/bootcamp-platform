import { IndexType, Permission } from "node-appwrite";
import { db, answerCollection } from "../name";
import { databases } from "./config";

export default async function createAnswerCollection() {
    // Create collection with proper permissions
    await databases.createCollection(db, answerCollection, answerCollection, [
        Permission.read("team:instructors"),
        Permission.read("team:students"),
        Permission.create("team:students"),
        Permission.update("team:instructors"),
        Permission.delete("team:instructors"),
    ]);
    console.log("✅ Question collection is created");

    // Create attributes
    await Promise.all([
    databases.createStringAttribute(db, answerCollection, "content", 10000, true),  // Answer text
    databases.createStringAttribute(db, answerCollection, "authorId", 50, true),   // User who posted the answer
    databases.createStringAttribute(db, answerCollection, "questionId", 50, true), // Links to a question
    databases.createStringAttribute(db, answerCollection, "attachmentId", 50, false), // Optional attachments
])
    console.log("✅ Answer Attributes Created");

    // Create indexes
    await Promise.all([
    databases.createIndex(
        db,
        answerCollection,
        "content",
        IndexType.Fulltext,
        ["content"],
        ["asc"]
    ),
    databases.createIndex(
        db,
        answerCollection,
        "questionId",
        IndexType.Key,
        ["questionId"],
        ["asc"]
    )
])

    console.log("✅ Anser Indexes Created");
}