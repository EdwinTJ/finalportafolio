export type Project = {
  id: string;
  name: string;
  github?: string;
  description: string;
  technology: string[];
  image: string;
  category?: "school" | "tutorial" | "personal" | "work";
  youtube?: string;
};
export type Job = {
  id: string;
  name: string;
  company: string;
  description: string;
  logo: string;
  startDate: string;
  endDate: string;
};

export const projects: Project[] = [
  {
    id: "js-benchmark",
    name: "JS Benchmark",
    github: "https://github.com/EdwinTJ/js-benchmark",
    youtube: "https://youtu.be/9cNJUL1_alg",
    description:
      "A performance testing tool for JavaScript code that compares execution time across different implementations. Allows developers to identify bottlenecks and optimize code for better performance. Includes visual reports and comparison charts.",
    technology: [
      "JavaScript",
      "Performance Optimization",
      "Chart.js",
      "HTML",
      "CSS",
      "Browser APIs",
    ],
    image: "/JS_Benchmark.png?height=600&width=800",
    category: "personal",
  },
  {
    id: "csv-upload-display",
    name: "CSV Upload & Display Application",
    github: "https://github.com/EdwinTJ/uploadFile",
    youtube: "https://www.youtube.com/watch?v=QkMlqJgqCq4",
    description:
      "A full-stack web application that enables users to upload CSV files containing structured data and displays the information as interactive, filterable cards on a responsive interface. Features include secure file uploads, automatic data transformation, real-time filtering, and a responsive card-based UI.",
    technology: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "RESTful API",
      "CSS3",
      "HTML5",
      "pnpm",
      "Multer",
      "Monorepo",
    ],
    image: "/CSV.png?height=600&width=800",
    category: "personal",
  },
  {
    id: "task-management-app",
    name: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features. Includes notification system and analytics dashboard.",
    technology: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
      "Tailwind CSS",
      "Vercel",
    ],
    image: "/placeholder.svg?height=600&width=800",
    category: "personal",
  },
  {
    id: "fitness-tracking-app",
    name: "Fitness Tracking App",
    description:
      "A web fitness tracking application that monitors workouts, nutrition, and progress. Features include custom workout plans, meal tracking, and progress visualization.",
    technology: [
      "React",
      "Firebase Auth",
      "Redux",
      "Chart.js",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: "/placeholder.svg?height=600&width=800",
    category: "personal",
  },

  {
    id: "school-hex-game",
    name: "School Hex Game",
    description:
      "An interactive hex-based strategy game built as part of a college project. Features include AI opponents with multiple difficulty levels, customizable game boards, and a scoreboard system. Implemented game logic and user interface from scratch.",
    technology: ["Java", "Algorithm Design"],
    image: "/placeholder.svg?height=600&width=800",
    category: "school",
  },
  {
    id: "school-priority-queue",
    name: "School PriorityQueue",
    description:
      "Developed a custom priority queue data structure implementation for efficient task scheduling. Includes comprehensive documentation and testing suite demonstrating various use cases including simulating a hospital emergency room patient queue system.",
    technology: [
      "Java",
      "Data Structures",
      "Algorithm Analysis",
      "Unit Testing",
      "Documentation",
    ],
    image: "/placeholder.svg?height=600&width=800",
    category: "school",
  },
  {
    id: "school-assembler",
    name: "School Assembler",
    description:
      "Created a functional assembler that translates assembly language into machine code. Features include support for custom instruction sets, error detection and reporting, and an interactive debugger for step-through execution.",
    technology: [
      "Python",
      "Assembly Language",
      "Compiler Design",
      "Memory Management",
      "Low-level Programming",
    ],
    image: "/placeholder.svg?height=600&width=800",
    category: "school",
  },

  {
    id: "menu-ui",
    name: "Menu UI",
    description:
      "A customizable restaurant menu interface that allows easy updating of items, prices, and categories. Features responsive design for mobile and desktop viewing, search functionality, and filtering options for dietary preferences.",
    technology: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
      "LocalStorage",
      "JSON",
    ],
    image: "/placeholder.svg?height=600&width=800",
    category: "personal",
  },
];

export const jobs: Job[] = [
  {
    id: "self-employed-web-developer",
    name: "Web Developer",
    company: "Self-employed / Freelance",
    description:
      "Designed and developed custom websites and web applications for various clients. Managed the entire project lifecycle from client consultation and requirements gathering to design, development, testing, and deployment. Implemented responsive designs, SEO optimization, and performance enhancements while maintaining regular communication with clients to ensure satisfaction.",
    logo: "/placeholder.svg?height=200&width=200",
    startDate: "2024-05",
    endDate: "Present",
  },
  {
    id: "flex-operator-schreiber",
    name: "Flex Operator",
    company: "Schreiber Foods",
    description:
      "Managed multiple production processes and equipment in a fast-paced food manufacturing environment. Demonstrated adaptability by learning diverse operational roles and optimizing workflows. Mentored new team members and ensured adherence to safety protocols and quality standards.",
    logo: "/placeholder.svg?height=200&width=200",
    startDate: "2022-01",
    endDate: "Present",
  },
  {
    id: "line-technician-thermofisher",
    name: "Line Technician",
    company: "Thermo Fisher",
    description:
      "Operated and maintained sophisticated laboratory equipment production lines, ensuring quality control and efficient production schedules. Implemented process improvements that increased production efficiency by 15%. Collaborated with engineering teams to troubleshoot and resolve technical issues.",
    logo: "/placeholder.svg?height=200&width=200",
    startDate: "2021-01",
    endDate: "2022-01",
  },
  {
    id: "machine-operator-prismview",
    name: "Machine Operator",
    company: "Prismview",
    description:
      "Operated CNC and assembly equipment for LED display manufacturing. Maintained detailed production logs and ensured quality control throughout the manufacturing process. Collaborated with design teams to implement production improvements and reduce material waste.",
    logo: "/placeholder.svg?height=200&width=200",
    startDate: "2019-01",
    endDate: "2021-01",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getJobById(id: string): Job | undefined {
  return jobs.find((job) => job.id === id);
}
