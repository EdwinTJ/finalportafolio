import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <div className="container py-12 px-4 mx-auto max-w-4xl text-center">
      <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Sorry, the project you're looking for doesn't exist or has been removed.
      </p>
      <Link
        href="/projects"
        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all projects
      </Link>
    </div>
  );
}
