import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Projects | Edwin Silvestre",
  description: "Explore the projects developed by Edwin Silvestre",
};

export default function ProjectsPage() {
  return (
    <div className="container py-12 px-4 mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of my recent work in software development, web
          applications, and more.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                {project.role && (
                  <p className="text-sm text-muted-foreground">
                    {project.role}
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technology.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                  {project.technology.length > 3 && (
                    <Badge variant="outline">
                      +{project.technology.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.skills &&
                    project.skills.slice(0, 2).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  {project.skills && project.skills.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.skills.length - 2}
                    </Badge>
                  )}
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
