import Link from "next/link";
import Image from "next/image";
import { jobs } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export const metadata = {
  title: "Experience | Edwin Silvestre",
  description: "Professional experience and work history of Edwin Silvestre",
};

export default function JobsPage() {
  return (
    <div className="container py-12 px-4 mx-auto flex flex-col items-center">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My career journey and professional experience in the software
          industry.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl w-full">
        {jobs.map((job) => (
          <Link key={job.id} href={`/jobs/${job.id}`} className="block w-full">
            <Card className="transition-all hover:shadow-md w-full">
              <div className="md:flex">
                <div className="p-6 flex items-center justify-center md:border-r md:w-48">
                  <div className="relative w-24 h-24">
                    <Image
                      src={job.logo || "/placeholder.svg"}
                      alt={job.company}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="text-xl">{job.name}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(job.startDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}
                        {" - "}
                        {job.endDate === "Present"
                          ? "Present"
                          : new Date(job.endDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                            })}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-primary mb-2">
                      {job.company}
                    </p>
                    <p className="line-clamp-2 text-muted-foreground">
                      {job.description}
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
