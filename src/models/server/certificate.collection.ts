// Stores certificates issued to students.
import { Permission } from "node-appwrite";
import { db, certificateCollection } from "../name";
import { databases } from "./config";

export default async function createCertificateCollection() {
    await databases.createCollection(db, certificateCollection, certificateCollection, [
        Permission.create("users"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    console.log("✅ Certificate collection created");

    await Promise.all([
        databases.createStringAttribute(db, certificateCollection, "userId", 50, true),
        databases.createStringAttribute(db, certificateCollection, "courseId", 50, true),
        databases.createStringAttribute(db, certificateCollection, "issueDate", 50, true),
    ]);
    console.log("✅ Certificate attributes created");
}