import { IndexType, Permission } from "node-appwrite";
import { db, questionCollection } from "../name";
import { databases } from "./config";
import { log } from "console"

export default async function createQuestionCollection() {
    // Create collection with proper permissions
    await databases.createCollection(db, questionCollection, questionCollection, [
        Permission.read("team:instructors"),
        Permission.read("team:students"),
        Permission.create("team:students"),
        Permission.update("team:instructors"),
        Permission.delete("team:instructors"),
    ]);
    console.log("✅ Question collection is created");

    // Create attributes
    await Promise.all([
        databases.createStringAttribute(db, questionCollection, "title", 100, true),
        databases.createStringAttribute(db, questionCollection, "content", 10000, true),
        databases.createStringAttribute(db, questionCollection, "authorId", 50, true),
        databases.createStringAttribute(db, questionCollection, "tags", 50, true, undefined, true),
        databases.createStringAttribute(db, questionCollection, "attachmentId", 50, false),
        databases.createIntegerAttribute(db, questionCollection, "createdAt", true),
    ]);
    console.log("✅ Question Attributes Created");

    // Create indexes
    await Promise.all([
        databases.createIndex(db, questionCollection, "title_index", IndexType.Key, ["title"]),
        databases.createIndex(db, questionCollection, "content_index", IndexType.Key, ["content"]),
        databases.createIndex(db, questionCollection, "created_at_index", IndexType.Key, ["createdAt"]),
    ]);
    console.log("✅ Question Indexes Created");
}