import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface RelatedProjectsProps {
  currentProject: Project;
  allProjects: Project[];
  maxProjects?: number;
}

export function RelatedProjects({
  currentProject,
  allProjects,
  maxProjects = 3,
}: RelatedProjectsProps) {
  // Find related projects based on shared technologies
  const relatedProjects = allProjects
    .filter((project) => {
      // Don't include the current project
      if (project.id === currentProject.id) return false;

      // Find projects with overlapping technologies
      const sharedTechnologies = project.technology.filter((tech) =>
        currentProject.technology.includes(tech)
      );

      // Consider it related if there are shared technologies
      return sharedTechnologies.length > 0;
    })
    // Sort by number of shared technologies (most shared first)
    .sort((a, b) => {
      const aShared = a.technology.filter((tech) =>
        currentProject.technology.includes(tech)
      ).length;

      const bShared = b.technology.filter((tech) =>
        currentProject.technology.includes(tech)
      ).length;

      return bShared - aShared;
    })
    // Limit to specified max
    .slice(0, maxProjects);

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {relatedProjects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-4">
                <CardTitle className="text-lg mb-2">{project.name}</CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
