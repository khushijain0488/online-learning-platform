import { Course, User, Module, Review, Notification } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'student',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};

export const instructors: User[] = [
  {
    id: '2',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@example.com',
    role: 'instructor',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '3',
    name: 'Prof. Michael Chen',
    email: 'michael.chen@example.com',
    role: 'instructor',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: '4',
    name: 'Dr. Emily Rodriguez',
    email: 'emily.rodriguez@example.com',
    role: 'instructor',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of web development including HTML, CSS, and JavaScript. This course is perfect for beginners who want to start their journey in web development.',
    instructor: instructors[0],
    thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 49.99,
    rating: 4.7,
    totalStudents: 1245,
    totalLessons: 24,
    duration: '12 hours',
    level: 'beginner',
    category: 'Web Development',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web'],
    createdAt: '2023-01-15T00:00:00Z',
    updatedAt: '2023-06-20T00:00:00Z'
  },
  {
    id: '2',
    title: 'Advanced React & Redux',
    description: 'Master React and Redux with advanced concepts and real-world projects. This course is designed for developers who already have basic knowledge of React.',
    instructor: instructors[1],
    thumbnail: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 79.99,
    rating: 4.9,
    totalStudents: 843,
    totalLessons: 36,
    duration: '18 hours',
    level: 'advanced',
    category: 'Web Development',
    tags: ['React', 'Redux', 'JavaScript', 'Frontend'],
    createdAt: '2023-02-10T00:00:00Z',
    updatedAt: '2023-07-05T00:00:00Z'
  },
  {
    id: '3',
    title: 'Data Science Fundamentals',
    description: 'Learn the core concepts of data science including data analysis, visualization, and machine learning basics with Python.',
    instructor: instructors[2],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 69.99,
    rating: 4.6,
    totalStudents: 1056,
    totalLessons: 30,
    duration: '15 hours',
    level: 'intermediate',
    category: 'Data Science',
    tags: ['Python', 'Data Analysis', 'Machine Learning', 'Statistics'],
    createdAt: '2023-03-05T00:00:00Z',
    updatedAt: '2023-08-12T00:00:00Z'
  },
  {
    id: '4',
    title: 'UI/UX Design Principles',
    description: 'Master the principles of UI/UX design and create beautiful, user-friendly interfaces that engage and delight users.',
    instructor: instructors[0],
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 59.99,
    rating: 4.8,
    totalStudents: 725,
    totalLessons: 28,
    duration: '14 hours',
    level: 'intermediate',
    category: 'Design',
    tags: ['UI', 'UX', 'Design', 'Figma', 'Adobe XD'],
    createdAt: '2023-04-20T00:00:00Z',
    updatedAt: '2023-09-01T00:00:00Z'
  },
  {
    id: '5',
    title: 'Mobile App Development with Flutter',
    description: 'Build cross-platform mobile applications with Flutter and Dart. Learn to create beautiful, natively compiled apps for iOS and Android from a single codebase.',
    instructor: instructors[1],
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 69.99,
    rating: 4.7,
    totalStudents: 612,
    totalLessons: 32,
    duration: '16 hours',
    level: 'intermediate',
    category: 'Mobile Development',
    tags: ['Flutter', 'Dart', 'Mobile', 'iOS', 'Android'],
    createdAt: '2023-05-15T00:00:00Z',
    updatedAt: '2023-10-10T00:00:00Z'
  },
  {
    id: '6',
    title: 'Cybersecurity Essentials',
    description: 'Learn the fundamentals of cybersecurity and protect your systems from common threats and vulnerabilities.',
    instructor: instructors[2],
    thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 89.99,
    rating: 4.8,
    totalStudents: 528,
    totalLessons: 40,
    duration: '20 hours',
    level: 'beginner',
    category: 'Cybersecurity',
    tags: ['Security', 'Network', 'Ethical Hacking', 'Privacy'],
    createdAt: '2023-06-10T00:00:00Z',
    updatedAt: '2023-11-15T00:00:00Z'
  }
];

export const modules: Module[] = [
  {
    id: '1',
    courseId: '1',
    title: 'HTML Basics',
    order: 1,
    lessons: [
      {
        id: '1',
        courseId: '1',
        title: 'Introduction to HTML',
        description: 'Learn the basics of HTML and its role in web development.',
        videoUrl: 'https://example.com/videos/intro-html',
        duration: '15 min',
        order: 1,
        isCompleted: true
      },
      {
        id: '2',
        courseId: '1',
        title: 'HTML Elements and Tags',
        description: 'Understand different HTML elements and how to use them.',
        videoUrl: 'https://example.com/videos/html-elements',
        duration: '20 min',
        order: 2,
        isCompleted: true
      },
      {
        id: '3',
        courseId: '1',
        title: 'HTML Forms',
        description: 'Learn how to create interactive forms in HTML.',
        videoUrl: 'https://example.com/videos/html-forms',
        duration: '25 min',
        order: 3,
        isCompleted: false
      }
    ]
  },
  {
    id: '2',
    courseId: '1',
    title: 'CSS Styling',
    order: 2,
    lessons: [
      {
        id: '4',
        courseId: '1',
        title: 'Introduction to CSS',
        description: 'Learn the basics of CSS and how to style HTML elements.',
        videoUrl: 'https://example.com/videos/intro-css',
        duration: '18 min',
        order: 1,
        isCompleted: false
      },
      {
        id: '5',
        courseId: '1',
        title: 'CSS Selectors',
        description: 'Master different CSS selectors to target specific elements.',
        videoUrl: 'https://example.com/videos/css-selectors',
        duration: '22 min',
        order: 2,
        isCompleted: false
      },
      {
        id: '6',
        courseId: '1',
        title: 'CSS Layout and Positioning',
        description: 'Learn how to create layouts and position elements with CSS.',
        videoUrl: 'https://example.com/videos/css-layout',
        duration: '30 min',
        order: 3,
        isCompleted: false
      }
    ]
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    courseId: '1',
    userId: '5',
    userName: 'Alex Thompson',
    userAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    comment: 'This course is amazing! The instructor explains everything clearly and the projects are very practical.',
    createdAt: '2023-07-15T00:00:00Z'
  },
  {
    id: '2',
    courseId: '1',
    userId: '6',
    userName: 'Maria Garcia',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 4,
    comment: 'Great content and well-structured lessons. I would have liked more exercises though.',
    createdAt: '2023-08-02T00:00:00Z'
  },
  {
    id: '3',
    courseId: '2',
    userId: '7',
    userName: 'David Kim',
    userAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    comment: 'The advanced concepts are explained in a way that makes them easy to understand. Highly recommended!',
    createdAt: '2023-07-20T00:00:00Z'
  }
];

export const notifications: Notification[] = [
  {
    id: '1',
    userId: '1',
    title: 'New Course Available',
    message: 'A new course "Advanced TypeScript" is now available. Check it out!',
    isRead: false,
    createdAt: '2023-11-01T10:30:00Z'
  },
  {
    id: '2',
    userId: '1',
    title: 'Assignment Reminder',
    message: 'Your assignment for "Introduction to Web Development" is due tomorrow.',
    isRead: true,
    createdAt: '2023-10-28T09:15:00Z'
  },
  {
    id: '3',
    userId: '1',
    title: 'Live Session',
    message: 'Don\'t forget the live Q&A session for "Data Science Fundamentals" today at 7 PM.',
    isRead: false,
    createdAt: '2023-10-30T14:45:00Z'
  }
];

export const categories = [
  'Web Development',
  'Mobile Development',
  'Data Science',
  'Machine Learning',
  'Design',
  'Business',
  'Marketing',
  'Photography',
  'Music',
  'Health & Fitness',
  'Language Learning',
  'Cybersecurity'
];