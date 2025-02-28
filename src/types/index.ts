export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: User;
  thumbnail: string;
  price: number;
  rating: number;
  totalStudents: number;
  totalLessons: number;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  videoUrl?: string;
  duration: string;
  order: number;
  isCompleted?: boolean;
}

export interface Module {
  id: string;
  courseId: string;
  title: string;
  lessons: Lesson[];
  order: number;
}

export interface Review {
  id: string;
  courseId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Quiz {
  id: string;
  lessonId: string;
  title: string;
  questions: Question[];
}

export interface Question {
  id: string;
  quizId: string;
  text: string;
  options: string[];
  correctOption: number;
}

export interface Certificate {
  id: string;
  userId: string;
  courseId: string;
  issueDate: string;
  certificateUrl: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface Progress {
  userId: string;
  courseId: string;
  completedLessons: string[];
  quizScores: Record<string, number>;
  lastAccessed: string;
  completionPercentage: number;
}