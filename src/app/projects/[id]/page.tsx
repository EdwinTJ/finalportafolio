import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowLeft, Youtube, AppWindow } from "lucide-react";
import { RelatedProjects } from "@/components/related-projects";

type Params = {
  params: Promise<{ id: string }>;
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
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors"
            >
              <AppWindow className="h-5 w-5" />
              View Live
            </Link>
          )}

          {project.youtube && (
            <Link
              href={project.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors"
            >
              <Youtube className="h-5 w-5" />
              View on Youtube
            </Link>
          )}
        </div>

        <div className="flex items-center text-muted-foreground mb-6">
          {project.role && (
            <Badge variant="outline" className="mr-2">
              {project.role}
            </Badge>
          )}
          {project.category && (
            <Badge className="mr-2">
              {project.category.charAt(0).toUpperCase() +
                project.category.slice(1)}
            </Badge>
          )}
        </div>

        <p className="text-lg leading-relaxed mb-8">{project.description}</p>

        {/* Responsibilities Section */}
        {project.responsibilities && project.responsibilities.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">My Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2">
              {project.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills Section */}
        {project.skills && project.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Skills Demonstrated</h2>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Section */}
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

        {/* Deliverables Section */}
        {project.deliverables && project.deliverables.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Key Deliverables</h2>
            <ul className="list-disc pl-5 space-y-2">
              {project.deliverables.map((deliverable, index) => (
                <li key={index}>{deliverable}</li>
              ))}
            </ul>
          </div>
        )}

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
