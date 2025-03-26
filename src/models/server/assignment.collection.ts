// Handles course assignments.
import { Permission } from "node-appwrite";
import { db, assignmentCollection } from "../name";
import { databases } from "./config";

export default async function createAssignmentCollection() {
    await databases.createCollection(db, assignmentCollection, assignmentCollection, [
        Permission.create("users"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    console.log("✅ Assignment collection created");

    await Promise.all([
        databases.createStringAttribute(db, assignmentCollection, "courseId", 50, true),
        databases.createStringAttribute(db, assignmentCollection, "title", 255, true),
        databases.createStringAttribute(db, assignmentCollection, "description", 2000, true),
        databases.createStringAttribute(db, assignmentCollection, "dueDate", 50, true),
    ]);
    console.log("✅ Assignment attributes created");
}