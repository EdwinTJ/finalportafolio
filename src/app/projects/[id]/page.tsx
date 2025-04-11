import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowLeft } from "lucide-react";
import { Project } from "@/lib/data";
import { ProjectShowcase } from "@/components/project-showcase";
import { RelatedProjects } from "@/components/related-projects";

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Params) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Edwin Silvestre`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: Params) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container py-12 px-4 mx-auto max-w-4xl">
      <Link
        href="/projects"
        className="flex items-center mb-6 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all projects
      </Link>

      <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <h1 className="text-4xl font-bold">{project.name}</h1>
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </Link>
          )}
        </div>

        <div className="flex items-center text-muted-foreground mb-6">
          {project.category && (
            <Badge className="mr-2">
              {project.category.charAt(0).toUpperCase() +
                project.category.slice(1)}
            </Badge>
          )}
        </div>

        <p className="text-lg leading-relaxed mb-8">{project.description}</p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technology.map((tech) => (
              <Badge key={tech} className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Add more project details here if needed */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            {generateFeaturesList(project).map(
              (feature: string, index: number) => (
                <li key={index}>{feature}</li>
              )
            )}
          </ul>
        </div>
        <div className="mb-8">
          <ProjectShowcase project={project} />
        </div>

        <div className="border-t pt-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            See all projects
          </Link>
        </div>

        <RelatedProjects currentProject={project} allProjects={projects} />
      </div>
    </div>
  );
}

// Helper function to generate features based on the project description
function generateFeaturesList(project: Project): string[] {
  // Extract features from the description
  const description = project.description;
  const sentences = description.split(/\.\s+/);

  // Filter out short sentences and those that don't seem like features
  return sentences
    .filter(
      (sentence) =>
        sentence.length > 15 &&
        !sentence.toLowerCase().includes("developed") &&
        !sentence.toLowerCase().includes("created") &&
        !sentence.toLowerCase().startsWith("a ") &&
        !sentence.toLowerCase().startsWith("an ")
    )
    .map((sentence) => sentence.trim() + (sentence.endsWith(".") ? "" : "."));
}
