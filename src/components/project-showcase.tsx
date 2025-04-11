import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/lib/data";

interface ProjectShowcaseProps {
  project: Project;
}

export function ProjectShowcase({ project }: ProjectShowcaseProps) {
  // Generate showcase content based on the project type/technologies
  const hasWebTech = project.technology.some((tech) =>
    ["React", "JavaScript", "HTML", "CSS", "Tailwind", "Next.js"].includes(tech)
  );

  const hasMobileTech = project.technology.some((tech) =>
    ["React Native", "Mobile"].includes(tech)
  );

  const hasBackendTech = project.technology.some((tech) =>
    ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"].includes(tech)
  );

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Project Showcase</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Primary showcase item - always show */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-video relative">
              <Image
                src={project.image}
                alt={`${project.name} main view`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">Main View</h3>
              <p className="text-sm text-muted-foreground">
                {project.name} primary interface
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Web specific showcase */}
        {hasWebTech && (
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video relative bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border border-gray-200 dark:border-gray-800 rounded-md bg-background p-2">
                    <div className="w-full h-6 flex items-center border-b border-gray-200 dark:border-gray-800 px-2 gap-1.5 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex flex-col gap-2 px-2">
                      <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
                      <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded"></div>
                      <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Responsive Design</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized for all screen sizes
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Mobile specific showcase */}
        {hasMobileTech && (
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video relative bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/3 h-4/5 border border-gray-200 dark:border-gray-800 rounded-xl bg-background overflow-hidden">
                    <div className="w-full h-4 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                      <div className="w-1/3 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                    <div className="p-2 space-y-2">
                      <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Mobile Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Native-like performance on mobile devices
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Backend specific showcase */}
        {hasBackendTech && (
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video relative bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="space-y-2 w-3/4">
                    <div className="h-4 w-full bg-background rounded"></div>
                    <div className="h-4 w-5/6 bg-background rounded"></div>
                    <div className="h-4 w-4/5 bg-background rounded"></div>
                    <div className="h-4 w-full bg-background rounded"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Backend Architecture</h3>
                <p className="text-sm text-muted-foreground">
                  Robust server-side implementation
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
