export type Job = {
  id: string;
  name: string;
  company: string;
  description: string;
  logo: string;
  startDate: string;
  endDate: string;
};
export type Project = {
  id: string;
  name: string;
  github?: string;
  youtube?: string;
  role: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  deliverables: string[];
  technology: string[];
  image: string;
  category?: "school" | "tutorial" | "personal" | "work";
  link?: string;
};

export const projects: Project[] = [
    {
  "id": "pcb-station",
  "name": "Gerber Render",
  "role": "Full Stack Developer",
  "youtube" : "https://www.youtube.com/watch?v=O32hXzWv71E",
  "description": "A PCB Gerber viewer and rendering application built with .NET and Blazor. The project uploads manufacturing files, identifies PCB layers, parses Gerber and drill data, and renders an interactive board preview in the browser.",
  "responsibilities": [
    "Built a multi-stage pipeline to read, parse, and process Gerber and drill files",
    "Implemented automatic layer identification using filename and CAD-specific matching rules",
    "Developed PCB rendering logic that converts parsed board data into SVG previews",
    "Created a web interface for uploading PCB files and viewing the final render",
    "Structured the application into focused modules for parsing, plotting, rendering, and core orchestration",
    "Wrote and maintained tests for parser and layer-identification behavior"
  ],
  "skills": [
    "System Design",
    "File Parsing",
    "Pattern Matching",
    "SVG Rendering",
    "Real-Time UI",
    "Unit Testing",
    "Separation of Concerns"
  ],
  "deliverables": [
    "Web-based Gerber file upload and preview flow",
    "Automatic PCB layer detection engine",
    "Parsing pipeline for Gerber and drill files",
    "SVG-based board rendering output",
    "Reusable core logic separated from the UI"
  ],
  "technology": [
    "C#",
    ".NET",
    "Blazor",
    "xUnit",
    "Gerber Files",
    "SVG"
  ],
  "image": "/projects/PcbStation.gif",
  "category": "personal"
},
{
    id: "ems-quote-app",
    name: "EMS Quoting Web Application",
    role: "Full Stack Developer",
    youtube: "https://www.youtube.com/watch?v=6VmhBlnYwkQ",
    description:
      "A web application for Electronics Manufacturing Services (EMS) quoting, streamlining the process of converting Bill of Materials (BOM) files into digital quotes. Features secure authentication, dashboard, multi-step quote wizard, supplier allocation, RFQ management, file attachments, audit trails, and compliance-ready architecture for ITAR/CMMC.",
    responsibilities: [
      "Designed and implemented a multi-step quote creation wizard (BOM upload, mapping, validation)",
      "Built dashboard for workload and recent quotes overview",
      "Developed secure authentication and user management",
      "Created quote workspace for part-level actions and risk management",
      "Integrated automated/manual supplier allocation and override controls",
      "Implemented RFQ center for supplier communication and bid management",
      "Added file attachment support with versioning and audit logs",
      "Ensured compliance-ready architecture for ITAR, CMMC, etc.",
      "PDF quote generation and download",
      "Supplier and settings management modules",
    ],
    skills: [
      "Blazor (C#)",
      "Tailwind CSS",
      "ASP.NET Core Minimal API",
      "Entity Framework Core",
      "PostgreSQL",
      "Nexar API",
      "OpenAI API",
      "Custom Authentication",
      "Docker",
      "GraphQL",
      "Modern C# Patterns",
      "Compliance & Audit Logging",
    ],
    deliverables: [
      "Secure login/signup and authentication system",
      "Dashboard with workload and recent quotes",
      "Multi-step quote creation wizard",
      "Quote workspace for part-level actions",
      "Supplier allocation and override controls",
      "RFQ center for supplier communication",
      "File attachments with versioning and audit logs",
      "Supplier and settings management",
      "PDF quote generation and download",
      "Compliance-ready architecture",
    ],
    technology: [
      "Blazor (C#)",
      "Tailwind CSS",
      "ASP.NET Core Minimal API",
      "PostgreSQL",
      "Entity Framework Core",
      "Nexar API",
      "OpenAI API",
      "Docker",
      "GraphQL",
    ],
    image: "/projects/ems-quote-app.png?height=600&width=800",
    category: "work",
  },
  {
  "id": "full-stack-docker-aws-01",
  "name": "Cloud-Native .NET & Next.js Application",
  "youtube": "https://www.youtube.com/watch?v=_rXtPqm_Bdw",
  "role": "Full-Stack Developer",
  "description": "Designed and deployed a scalable full-stack application leveraging a containerized architecture. Managed the end-to-end lifecycle from local development in Docker to cloud production on AWS EC2.",
  "responsibilities": [
    "Architected a RESTful API using .NET 8 with an emphasis on clean architecture and performance.",
    "Developed a responsive, SEO-friendly frontend using Next.js and Tailwind CSS.",
    "Containerized the application and database layers using Docker Compose for consistent environment orchestration.",
    "Configured and managed an AWS EC2 Ubuntu instance, including security groups and Docker runtime installation.",
    "Implemented data persistence and relational schema design using PostgreSQL."
  ],
  "skills": [
    "Cloud Infrastructure",
    "Containerization",
    "API Design",
    "Database Management",
    "DevOps"
  ],
  "deliverables": [
    "Functional Web Application hosted on AWS",
    "Containerized Microservices Architecture",
    "Documented REST API Endpoints",
    "Project Demo Video"
  ],
  "technology": [
    ".NET 8",
    "Next.js",
    "Docker",
    "PostgreSQL",
    "AWS EC2",
    "Ubuntu",
    "Entity Framework Core"
  ],
  "image": "/projects/NETandNextJS.png",
  "category": "personal",
},
  {
    id: "autonomous-path-simulator",
    name: "Autonomous Path Simulator",
    github: "https://github.com/EdwinTJ/Path-Simulation/",
    role: "Full Stack Developer",
    description:
      "A high-performance robotics pathfinding simulation built with .NET and Blazor Server. The project connects a real-time web interface with a decoupled pathfinding engine using A* search, octile distance metrics, and cooperative cancellation for safety-critical emergency stops.",
    responsibilities: [
      "Designed a layered architecture using Separation of Concerns across Grid, Pathfinder, EStop, and Visualizer modules",
      "Implemented intelligent A* pathfinding with weighted terrain support for Traversable, Blocked, and Restricted nodes",
      "Built an emergency stop system using CancellationTokenSource and OperationCanceledException for immediate halt behavior",
      "Developed interactive grid controls with automatic path recalculation during live simulation",
      "Created a real-time telemetry dashboard displaying coordinates, movement cost, heuristic score, and system status",
      "Verified pathfinding logic and edge cases using xUnit before UI integration",
    ],
    skills: [
      "System Design",
      "Pathfinding Algorithms",
      "Safety-Critical Patterns",
      "Real-Time UI",
      "Unit Testing",
      "Separation of Concerns",
    ],
    deliverables: [
      "Interactive Blazor simulation for autonomous vehicle path traversal",
      "Decoupled pathfinding engine reusable outside the web UI",
      "Emergency stop implementation with thread-safe simulation handling",
      "Telemetry dashboard for live simulation metrics",
      "Automated unit test suite covering algorithm correctness and edge cases",
    ],
    technology: [
      "C#",
      ".NET",
      "Blazor Server",
      "xUnit",
      "A* Search",
      "Octile Distance",
    ],
    image: "/projects/Pathfinder.gif",
    category: "personal",
  },
  {
    id: "github-activity-cli",
    name: "GitHub Activity CLI",
    github: "https://github.com/EdwinTJ/githubActivity",
    youtube: "https://www.youtube.com/watch?v=WaBoXp6c-vU",
    role: "Full Stack Developer",
    description:
      "A command-line tool built with Node.js that fetches and displays GitHub users' recent activity directly in the terminal. Users can quickly check any GitHub profile's latest contributions without opening a browser, with results formatted for easy reading.",
    responsibilities: [
      "Designed and implemented a CLI application using pure Node.js",
      "Built HTTP requests using native https module without external dependencies",
      "Implemented asynchronous data handling with event-driven architecture",
      "Created a user-friendly event formatter for different GitHub activity types",
      "Implemented robust error handling for network and API requests",
    ],
    skills: [
      "Node.js",
      "JavaScript",
      "CLI Development",
      "API Integration",
      "Asynchronous Programming",
      "Event-Driven Architecture",
      "Error Handling",
      "HTTP Requests",
      "Data Transformation",
    ],
    deliverables: [
      "Fully functional CLI that retrieves GitHub activity data",
      "Human-readable output formatter for various GitHub event types",
      "Robust error handling for API failures and invalid inputs",
      "Clean, well-documented codebase with modular design",
      "Comprehensive README with usage instructions",
    ],
    technology: [
      "Node.js",
      "JavaScript",
      "readline Module",
      "https Module",
      "GitHub API",
    ],
    image: "/projects/running.webp?height=600&width=800",
    category: "personal",
  },
  {
    id: "beehive-hub",
    name: "Beehive Hub",
    role: "Frontend Developer & Full Stack Architect",
    github: "https://github.com/EdwinTJ/directory",
    description:
      "A comprehensive local business directory platform that connects businesses with community members. Showcases what makes local businesses unique, increases their visibility, and helps community members discover businesses that meet their specific needs.",
    responsibilities: [
      "Designed and implemented the entire application architecture",
      "Created an intuitive, responsive UI/UX design",
      "Built the frontend using React with custom CSS",
      "Implemented user authentication through Google",
      "Designed and developed the database schema using Supabase",
      "Created search and filtering functionalities to help users discover businesses",
    ],
    skills: [
      "React.js",
      "CSS/Responsive Design",
      "Supabase",
      "Google Authentication",
      "Database Architecture",
      "UI/UX Design",
      "Full Stack Development",
      "RESTful API Integration",
      "JavaScript/TypeScript",
      "Web Application Architecture",
    ],
    deliverables: [
      "Fully functional local business directory web application",
      "Responsive design that works across desktop and mobile devices",
      "User authentication system integrated with Google",
      "Business profile creation and management features",
      "Advanced search and filtering functionality",
      "Database schema and architecture documentation",
      "Clean, maintainable codebase with proper documentation",
    ],
    technology: [
      "React",
      "CSS",
      "Supabase",
      "Google Auth",
      "JavaScript/TypeScript",
      "Responsive Design",
    ],
    image: "/projects/beehive-hub.webp?height=600&width=800",
    category: "personal",
  },
  {
    id: "js-benchmark",
    name: "JS Benchmark",
    github: "https://github.com/EdwinTJ/js-benchmark",
    youtube: "https://youtu.be/9cNJUL1_alg",
    role: "Frontend Developer",
    description:
      "A performance testing tool for JavaScript code that compares execution time across different implementations. Allows developers to identify bottlenecks and optimize code for better performance. Includes visual reports and comparison charts.",
    responsibilities: [
      "Designed and implemented the benchmark testing interface",
      "Created visualization components for performance comparison",
      "Implemented code execution timing mechanisms",
      "Built responsive UI for displaying benchmark results",
      "Developed algorithm for accurate performance measurement",
    ],
    skills: [
      "JavaScript",
      "Performance Optimization",
      "Frontend Development",
      "Data Visualization",
      "Algorithm Design",
      "Browser API Integration",
    ],
    deliverables: [
      "Interactive JavaScript benchmarking tool",
      "Visual reporting system for performance metrics",
      "Responsive UI that works across devices",
      "Documentation for using the benchmark tool",
      "Exportable performance reports",
    ],
    technology: [
      "JavaScript",
      "Performance Optimization",
      "Chart.js",
      "HTML",
      "CSS",
      "Browser APIs",
    ],
    image: "/projects/JS_Benchmark.png?height=600&width=800",
    category: "personal",
  },
  {
    id: "csv-upload-display",
    name: "CSV Upload & Display Application",
    github: "https://github.com/EdwinTJ/uploadFile",
    youtube: "https://www.youtube.com/watch?v=QkMlqJgqCq4",
    role: "Full Stack Developer",
    description:
      "A full-stack web application that enables users to upload CSV files containing structured data and displays the information as interactive, filterable cards on a responsive interface. Features include secure file uploads, automatic data transformation, real-time filtering, and a responsive card-based UI.",
    responsibilities: [
      "Architected full-stack application structure as a monorepo",
      "Developed RESTful API endpoints for file uploads and data retrieval",
      "Implemented secure file validation and processing on the backend",
      "Created responsive card-based UI for data visualization",
      "Built real-time search and filtering functionality",
    ],
    skills: [
      "Full Stack Development",
      "TypeScript",
      "RESTful API Design",
      "File Upload Processing",
      "Data Transformation",
      "Responsive UI Design",
      "Monorepo Architecture",
    ],
    deliverables: [
      "Secure file upload system with validation",
      "Backend API for CSV processing and data management",
      "Interactive frontend for data visualization",
      "Real-time search and filtering capabilities",
      "Responsive design for all device sizes",
      "Well-documented codebase with type safety",
    ],
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
    image: "/projects/CSV.png?height=600&width=800",
    category: "personal",
  },
  {
    id: "task-management-app",
    name: "Task Management App",
    role: "Full Stack Developer",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features. Includes notification system and analytics dashboard.",
    responsibilities: [
      "Designed and implemented real-time task synchronization system",
      "Created interactive drag-and-drop interface for task management",
      "Developed user authentication and team permission systems",
      "Built notification system for task updates and deadlines",
      "Implemented analytics dashboard for productivity tracking",
    ],
    skills: [
      "Next.js Development",
      "TypeScript",
      "Database Modeling",
      "Real-time Communication",
      "UI/UX Design",
      "Authentication & Authorization",
      "Analytics Implementation",
    ],
    deliverables: [
      "Full-featured task management application",
      "Real-time collaboration system",
      "Drag-and-drop task organization interface",
      "User and team management system",
      "Notification infrastructure",
      "Performance and productivity analytics dashboard",
    ],
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
    role: "Full Stack Developer",
    description:
      "A web fitness tracking application that monitors workouts, nutrition, and progress. Features include custom workout plans, meal tracking, and progress visualization.",
    responsibilities: [
      "Architected application structure with Redux for state management",
      "Developed user authentication and profile management system",
      "Created interactive dashboard for workout and nutrition tracking",
      "Implemented data visualization for progress monitoring",
      "Built custom workout and meal plan creation tools",
    ],
    skills: [
      "React Development",
      "State Management",
      "Firebase Integration",
      "Data Visualization",
      "User Authentication",
      "Backend API Development",
      "Database Design",
    ],
    deliverables: [
      "Complete fitness tracking application",
      "User authentication and profile system",
      "Workout planning and tracking interface",
      "Nutrition and meal planning tools",
      "Progress visualization dashboard",
      "Mobile-responsive design",
    ],
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
    role: "Game Developer",
    description:
      "An interactive hex-based strategy game built as part of a college project. Features include AI opponents with multiple difficulty levels, customizable game boards, and a scoreboard system. Implemented game logic and user interface from scratch.",
    responsibilities: [
      "Designed and implemented game mechanics and rules",
      "Developed AI opponents with varying difficulty levels",
      "Created customizable game board generation system",
      "Built user interface for game interaction",
      "Implemented scoring and achievement system",
    ],
    skills: [
      "Game Development",
      "Algorithm Design",
      "AI Programming",
      "Java Development",
      "UI Design",
      "Object-Oriented Programming",
    ],
    deliverables: [
      "Fully functional hex-based strategy game",
      "AI opponent system with multiple difficulty settings",
      "Customizable game board generator",
      "User-friendly interface",
      "Scoring and achievement tracking system",
      "Comprehensive documentation",
    ],
    technology: ["Java", "Algorithm Design"],
    image: "/placeholder.svg?height=600&width=800",
    category: "school",
  },
  {
    id: "school-priority-queue",
    name: "School PriorityQueue",
    role: "Software Developer",
    description:
      "Developed a custom priority queue data structure implementation for efficient task scheduling. Includes comprehensive documentation and testing suite demonstrating various use cases including simulating a hospital emergency room patient queue system.",
    responsibilities: [
      "Designed and implemented custom priority queue data structure",
      "Created efficient algorithms for queue operations",
      "Developed comprehensive testing suite for validation",
      "Built hospital emergency room simulation as proof of concept",
      "Created detailed documentation and usage examples",
    ],
    skills: [
      "Data Structure Design",
      "Algorithm Development",
      "Java Programming",
      "Software Testing",
      "Documentation Writing",
      "Performance Optimization",
    ],
    deliverables: [
      "Optimized priority queue implementation",
      "Comprehensive testing suite",
      "Hospital emergency room simulation system",
      "Performance analysis documentation",
      "Usage guide with examples",
      "API documentation",
    ],
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
    role: "Systems Programmer",
    description:
      "Created a functional assembler that translates assembly language into machine code. Features include support for custom instruction sets, error detection and reporting, and an interactive debugger for step-through execution.",
    responsibilities: [
      "Designed and implemented assembly language parser",
      "Created machine code generator for custom instruction set",
      "Developed error detection and reporting system",
      "Built interactive debugger with step-through execution",
      "Implemented memory management and allocation system",
    ],
    skills: [
      "Low-level Programming",
      "Compiler Design",
      "Python Development",
      "Assembly Language",
      "Memory Management",
      "Debugging Tools Development",
    ],
    deliverables: [
      "Functional assembler for custom instruction set",
      "Interactive debugging environment",
      "Comprehensive error detection system",
      "Documentation for assembly language syntax",
      "Example programs and test cases",
      "User guide for the assembler and debugger",
    ],
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
    role: "Frontend Developer",
    description:
      "A customizable restaurant menu interface that allows easy updating of items, prices, and categories. Features responsive design for mobile and desktop viewing, search functionality, and filtering options for dietary preferences.",
    responsibilities: [
      "Designed intuitive interface for restaurant menu display",
      "Implemented responsive design for all device sizes",
      "Created dietary preference filtering system",
      "Developed search functionality for menu items",
      "Built admin interface for menu management",
    ],
    skills: [
      "React Development",
      "Responsive Design",
      "UI/UX Design",
      "JavaScript Programming",
      "Local Storage Implementation",
      "Filter and Search Functionality",
    ],
    deliverables: [
      "Interactive restaurant menu interface",
      "Responsive design for all device sizes",
      "Dietary preference filtering system",
      "Search functionality for menu items",
      "Admin interface for menu management",
      "Documentation for updating menu content",
    ],
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
    id: "software-developer-ems",
    name: "Software Developer",
    company: "EMS Solutions",
    description:
      "Improved engineering and manufacturing workflows by designing and implementing internal software tools and automation processes. Developed an automated data migration tool using C# and Playwright to reclassify and migrate parts within CETEC ERP, enabling category changes that were previously unsupported. Built a web application that combines CSV component location data with PDF-rendered PCB images to automatically calibrate layouts and generate accurate, searchable PCB PDFs. Implemented an affine transformation model using Least Squares Best Fit to map CAD (mm) coordinates to PDF (point) coordinates using overdetermined calibration data. Designed a multi-coordinate calibration system bridging browser pixel space, normalized UI coordinates, PDF point space, and CAD millimeter coordinates for consistent rendering and interaction.",
    logo: "/placeholder.svg?height=200&width=200",
    startDate: "2025-11",
    endDate: "Present",
  },
  {
    id: "web-developer-manticore",
    name: "Web Developer",
    company: "Manticore Marketing",
    description:
      "Standardized new website builds by creating a detailed SOP covering plugin selection, feature enable/disable workflows, and coding standards. Reduced project setup time and improved team onboarding efficiency. Optimized site performance with caching, image compression, and minified assets boosted PageSpeed Insights scores, leading to better SEO rankings and faster user experiences.",
    logo: "/placeholder.svg?height=200&width=200",
    startDate: "2025-07",
    endDate: "2025-10",
  },
  {
    id: "flex-operator-schreiber",
    name: "Flex Operator",
    company: "Schreiber Foods",
    description:
      "Managed multiple production processes and equipment in a fast-paced food manufacturing environment. Demonstrated adaptability by learning diverse operational roles and optimizing workflows. Mentored new team members and ensured adherence to safety protocols and quality standards.",
    logo: "/placeholder.svg?height=200&width=200",
    startDate: "2022-01",
    endDate: "2025-07",
  },
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
