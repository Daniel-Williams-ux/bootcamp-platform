// Stores quizzes for courses.
import { Permission } from "node-appwrite";
import { db, quizCollection } from "../name";
import { databases } from "./config";

export default async function createQuizCollection() {
    await databases.createCollection(db, quizCollection, quizCollection, [
        Permission.create("users"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    console.log("✅ Quiz collection created");

    await Promise.all([
        databases.createStringAttribute(db, quizCollection, "courseId", 50, true),
        databases.createStringAttribute(db, quizCollection, "question", 1000, true),
        databases.createStringAttribute(db, quizCollection, "answer", 500, true),
    ]);
    console.log("✅ Quiz attributes created");
}