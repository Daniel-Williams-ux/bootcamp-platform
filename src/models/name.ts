export const db = "bootcamp-platform";

export const userCollection = "users";  // Stores students & instructors
export const courseCollection = "courses";  // Stores bootcamp courses
export const lessonCollection = "lessons";  // Stores lessons inside courses
export const enrollmentCollection = "enrollments";  // Tracks student-course enrollment
export const quizCollection = "quizzes";  // Stores course quizzes
export const assignmentCollection = "assignments";  // Stores assignments
export const certificateCollection = "certificates";  // Stores issued certificates

export const classroomCollection = "classrooms";  // Manages live classes & student access
export const chatCollection = "chats";  // Stores messages between students & instructors
export const questionCollection = "questions";  // For Q&A within a class/course
export const answerCollection = "answers";  // Answers to course questions
export const commentCollection = "comments";  // Comments on lessons or quizzes

export const courseAttachmentBucket = "course-attachments";  // Stores private PDFs, videos
export const questionAttachmentBucket = "question-attachments";  // Stores files for Q&A