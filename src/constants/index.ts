import { GraduationCap, School } from "lucide-react";

export const USER_ROLES = {
    STUDENT: "student",
    TEACHER: "teacher",
    ADMIN: "admin",
};

export const ROLE_OPTIONS = [
    {
        value: USER_ROLES.STUDENT,
        label: "Student",
        icon: GraduationCap,
    },
    {
        value: USER_ROLES.TEACHER,
        label: "Teacher",
        icon: School,
    },
];

export const DEPARTMENTS = [
    "Computer Science",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "History",
    "Geography",
    "Economics",
    "Business Administration",
    "Engineering",
    "Psychology",
    "Sociology",
    "Political Science",
    "Philosophy",
    "Education",
    "Fine Arts",
    "Music",
    "Physical Education",
    "Law",
] as const;

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
    value: dept,
    label: dept,
}));

export const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes
export const ALLOWED_TYPES = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp",
];

const getEnvVar = (key: string): string => {
    const value = import.meta.env[key];
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
};

export const CLOUDINARY_UPLOAD_URL = getEnvVar("VITE_CLOUDINARY_UPLOAD_URL");
export const CLOUDINARY_CLOUD_NAME = getEnvVar("VITE_CLOUDINARY_CLOUD_NAME");
export const BACKEND_BASE_URL = getEnvVar("VITE_BACKEND_BASE_URL");

export const BASE_URL =  import.meta.env.VITE_API_URL;
// export const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY
// export const REFRESH_TOKEN_KEY = import.meta.env.VITE_REFRESH_TOKEN_KEY

// export const REFRESH_TOKEN_URL = `${BASE_URL}/refresh-token`;

export const CLOUDINARY_UPLOAD_PRESET = getEnvVar("VITE_CLOUDINARY_UPLOAD_PRESET");

export const teachers = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Dr. Alan Turing" },
  { id: "4", name: "Dr. Marie Curie" },
  { id: "5", name: "Prof. Isaac Newton" },
  { id: "6", name: "Dr. Ada Lovelace" },
  { id: "7", name: "Prof. Albert Einstein" },
  { id: "8", name: "Dr. Katherine Johnson" },
  { id: "9", name: "Prof. Nikola Tesla" },
  { id: "10", name: "Dr. Rosalind Franklin" },
  { id: "11", name: "Mr. James Anderson" },
  { id: "12", name: "Ms. Emily Watson" },
  { id: "13", name: "Mr. Michael Brown" },
  { id: "14", name: "Dr. Stephen Hawking" },
  { id: "15", name: "Prof. Richard Feynman" },
];

export const subjects = [
  { id: 1, name: "Mathematics", code: "MATH" },
  { id: 2, name: "Computer Science", code: "CS" },
  { id: 3, name: "Physics", code: "PHY" },
  { id: 4, name: "Chemistry", code: "CHEM" },
  { id: 5, name: "Biology", code: "BIO" },
  { id: 6, name: "English Literature", code: "ENG" },
  { id: 7, name: "History", code: "HIST" },
  { id: 8, name: "Geography", code: "GEO" },
  { id: 9, name: "Economics", code: "ECON" },
  { id: 10, name: "Business Studies", code: "BUS" },
  { id: 11, name: "Accounting", code: "ACC" },
  { id: 12, name: "Statistics", code: "STAT" },
  { id: 13, name: "Environmental Science", code: "ENV" },
  { id: 14, name: "Artificial Intelligence", code: "AI" },
  { id: 15, name: "Data Science", code: "DS" },
  { id: 16, name: "Machine Learning", code: "ML" },
  { id: 17, name: "Cyber Security", code: "CYB" },
  { id: 18, name: "Software Engineering", code: "SE" },
  { id: 19, name: "Web Development", code: "WEB" },
  { id: 20, name: "Mobile App Development", code: "MAD" },
  { id: 21, name: "Digital Marketing", code: "DM" },
  { id: 22, name: "Psychology", code: "PSY" },
  { id: 23, name: "Sociology", code: "SOC" },
  { id: 24, name: "Philosophy", code: "PHIL" },
  { id: 25, name: "Political Science", code: "POL" },
];
