// Adding your additional projects to the existing structure

export type Project = {
  id: string;
  name: string;
  github?: string;
  description: string;
  technology: string[];
  image: string;
  startDate: string;
  endDate: string;
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
    startDate: "2023-06",
    endDate: "2023-08",
  },
  {
    id: "ecommerce-platform",
    name: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, shopping cart, payment processing, and order tracking. Implemented responsive design and optimized for performance.",
    technology: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "Redux",
      "AWS S3",
    ],
    image: "/placeholder.svg?height=600&width=800",
    startDate: "2022-03",
    endDate: "2022-08",
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
    startDate: "2021-09",
    endDate: "2022-01",
  },
  {
    id: "ai-content-generator",
    name: "AI Content Generator",
    description:
      "An AI-powered content generation tool that creates blog posts, social media content, and marketing copy based on user prompts. Includes content optimization suggestions and SEO analysis.",
    technology: [
      "Python",
      "Flask",
      "React",
      "OpenAI API",
      "Natural Language Processing",
      "Docker",
      "Google Cloud",
    ],
    image: "/placeholder.svg?height=600&width=800",
    startDate: "2023-01",
    endDate: "2023-05",
  },
  {
    id: "fitness-tracking-app",
    name: "Fitness Tracking App",
    description:
      "A mobile-first fitness tracking application that monitors workouts, nutrition, and progress. Features include custom workout plans, meal tracking, and progress visualization.",
    technology: [
      "React Native",
      "Firebase",
      "Redux",
      "Chart.js",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: "/placeholder.svg?height=600&width=800",
    startDate: "2022-06",
    endDate: "2022-11",
  },
  {
    id: "blockchain-voting-system",
    name: "Blockchain Voting System",
    description:
      "A secure and transparent voting system built on blockchain technology. Ensures vote integrity, prevents double-voting, and provides real-time results with complete audit trail.",
    technology: [
      "Solidity",
      "Ethereum",
      "Web3.js",
      "React",
      "Node.js",
      "Hardhat",
      "IPFS",
    ],
    image: "/placeholder.svg?height=600&width=800",
    startDate: "2023-03",
    endDate: "2023-07",
  },
  {
    id: "school-hex-game",
    name: "School Hex Game",
    description:
      "An interactive hex-based strategy game built as part of a college project. Features include AI opponents with multiple difficulty levels, customizable game boards, and a scoreboard system. Implemented game logic and user interface from scratch.",
    technology: ["Java", "Algorithm Design"],
    image: "/placeholder.svg?height=600&width=800",
    startDate: "2021-10",
    endDate: "2021-12",
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
    startDate: "2022-02",
    endDate: "2022-04",
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
    startDate: "2022-09",
    endDate: "2022-11",
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
    startDate: "2023-09",
    endDate: "2023-10",
  },
];

export const jobs: Job[] = [
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
