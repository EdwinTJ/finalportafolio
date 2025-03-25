import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Calendar, GithubIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}) {
  const project = getProjectById(params.name);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | John Doe`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { name: string } }) {
  const project = getProjectById(params.name);

  if (!project) {
    notFound();
  }

  return (
    <div className="container py-12 px-4">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/projects">← Back to Projects</Link>
      </Button>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="text-4xl font-bold mb-6">{project.name}</h1>

          <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p className="text-lg text-muted-foreground">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Technology Used</h2>
              <div className="flex flex-wrap gap-2">
                {/* Add GithubIcon */}
                <Link href={project.github}>
                  <GithubIcon className="h-5 w-5" />
                </Link>
                {project.technology.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-sm py-1 px-3"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="lg:border-l lg:pl-8">
          <div className="sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Project Details</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  Timeline
                </h3>
                <div className="flex items-center text-lg">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>
                    {new Date(project.startDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                    {" - "}
                    {new Date(project.endDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  Duration
                </h3>
                <p className="text-lg">
                  {(() => {
                    const start = new Date(project.startDate);
                    const end = new Date(project.endDate);
                    const diffMonths =
                      (end.getFullYear() - start.getFullYear()) * 12 +
                      (end.getMonth() - start.getMonth());
                    return `${diffMonths} months`;
                  })()}
                </p>
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  Key Achievements
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Implemented responsive design for all device sizes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Optimized performance with 95+ Lighthouse score</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Reduced loading time by 40% through code splitting
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
