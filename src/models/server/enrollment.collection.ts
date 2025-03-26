// Tracks which students are enrolled in which courses.
import { Permission } from "node-appwrite";
import { db, enrollmentCollection } from "../name";
import { databases } from "./config";

export default async function createEnrollmentCollection() {
    await databases.createCollection(db, enrollmentCollection, enrollmentCollection, [
        Permission.create("users"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    console.log("✅ Enrollment collection created");

    await Promise.all([
        databases.createStringAttribute(db, enrollmentCollection, "userId", 50, true),
        databases.createStringAttribute(db, enrollmentCollection, "courseId", 50, true),
        databases.createEnumAttribute(db, enrollmentCollection, "status", ["active", "completed", "dropped"], true),
    ]);
    console.log("✅ Enrollment attributes created");
}