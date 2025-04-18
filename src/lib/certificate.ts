// lib/certificate.ts

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  imagePath: string;
  thumbnailPath: string;
  skills: string[];
}

export const certificates: Certificate[] = [
  {
    id: "php-oop-with-databases",
    title: "PHP: Object-Oriented Programming with Databases",
    issuer: "LinkedIn Learning",
    issueDate: "February 14, 2022",
    imagePath: "/certificates/php-oop-with-databases.webp",
    thumbnailPath: "/certificates/php-oop-with-databases.webp",
    skills: [
      "PHP",
      "Object-Oriented Programming",
      "Databases",
      "Backend Development",
    ],
  },
  {
    id: "php-mysql-1",
    title: "PHP with MySQL Essential Training: 1 The Basics",
    issuer: "LinkedIn Learning",
    issueDate: "April 24, 2019",
    imagePath: "/certificates/php-mysql-1.webp",
    thumbnailPath: "/certificates/php-mysql-1.webp",
    skills: ["PHP", "MySQL", "Database Integration", "Web Development"],
  },
  {
    id: "php-oop",
    title: "PHP: Object-Oriented Programming",
    issuer: "LinkedIn Learning",
    issueDate: "February 14, 2022",
    imagePath: "/certificates/php-oop.webp",
    thumbnailPath: "/certificates/php-oop.webp",
    skills: ["PHP", "Object-Oriented Programming", "Classes", "Inheritance"],
  },
  {
    id: "php-mysql-2",
    title: "PHP with MySQL Essential Training: 2 Build a CMS",
    issuer: "LinkedIn Learning",
    issueDate: "February 10, 2022",
    imagePath: "/certificates/php-mysql-2.webp",
    thumbnailPath: "/certificates/php-mysql-2.webp",
    skills: ["PHP", "MySQL", "CMS Development", "Web Applications"],
  },
  {
    id: "advanced-php",
    title: "Advanced PHP",
    issuer: "LinkedIn Learning",
    issueDate: "February 22, 2022",
    imagePath: "/certificates/advanced-php.webp",
    thumbnailPath: "/certificates/advanced-php.webp",
    skills: ["PHP", "Advanced Programming", "Web Development"],
  },
  {
    id: "composer-php",
    title: "Learning Composer, the PHP Dependency Manager",
    issuer: "LinkedIn Learning",
    issueDate: "February 22, 2022",
    imagePath: "/certificates/composer-php.webp",
    thumbnailPath: "/certificates/composer-php.webp",
    skills: ["PHP", "Composer", "Dependency Management", "Package Management"],
  },
  {
    id: "consuming-restful-apis-php",
    title: "Consuming RESTful APIs in PHP with Guzzle",
    issuer: "LinkedIn Learning",
    issueDate: "February 22, 2022",
    imagePath: "/certificates/consuming-restful-apis-php.webp",
    thumbnailPath: "/certificates/consuming-restful-apis-php.webp",
    skills: [
      "PHP",
      "RESTful APIs",
      "Guzzle",
      "API Integration",
      "HTTP Clients",
    ],
  },
];
