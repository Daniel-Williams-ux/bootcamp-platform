// Manages live classrooms.
import { Permission } from "node-appwrite";
import { db, classroomCollection } from "../name";
import { databases } from "./config";

export default async function createClassroomCollection() {
    await databases.createCollection(db, classroomCollection, classroomCollection, [
        Permission.create("users"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    console.log("✅ Classroom collection created");

    await Promise.all([
        databases.createStringAttribute(db, classroomCollection, "courseId", 50, true),
        databases.createStringAttribute(db, classroomCollection, "hostId", 50, true),
        databases.createStringAttribute(db, classroomCollection, "startTime", 50, true),
        databases.createStringAttribute(db, classroomCollection, "endTime", 50, true),
    ]);
    console.log("✅ Classroom attributes created");
}