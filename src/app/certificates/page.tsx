"use client";

import { useState } from "react";
import { certificates } from "@/lib/certificate";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ZoomIn, ZoomOut } from "lucide-react";

export default function CertificatesPage() {
  const [selectedCertificate, setSelectedCertificate] = useState(
    certificates[0]
  );
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    if (zoomLevel < 2) setZoomLevel(zoomLevel + 0.2);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 0.6) setZoomLevel(zoomLevel - 0.2);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-center">
        My Certifications
      </h1>
      <p className="text-base md:text-lg text-center mb-8 md:mb-12 max-w-3xl mx-auto">
        These certifications represent my commitment to continuous learning and
        professional growth in the field of software development.
      </p>

      {/* Mobile view: List first, then selected certificate */}
      <div className="md:hidden">
        <h2 className="text-2xl font-bold mb-4">All Certifications</h2>
        <div className="grid gap-4 mb-8">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className={`cursor-pointer transition-all hover:border-primary ${
                selectedCertificate?.id === cert.id ? "border-primary" : ""
              }`}
              onClick={() => setSelectedCertificate(cert)}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-20 bg-muted rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={cert.thumbnailPath}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground truncate">
                      {cert.issuer}
                    </p>
                    <p className="text-xs">{cert.issueDate}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 2).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {cert.skills.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{cert.skills.length - 2} more
                    </Badge>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Certificate Viewer (Mobile) */}
        {selectedCertificate && (
          <div className="bg-muted rounded-xl p-4 mb-8">
            <div
              className="aspect-[8.5/11] w-full relative bg-white rounded-lg shadow-lg overflow-hidden mb-4"
              style={{
                overflow: "auto",
                maxHeight: "60vh",
              }}
            >
              <div
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: "top left",
                  transition: "transform 0.3s ease",
                }}
              >
                <Image
                  src={selectedCertificate.imagePath}
                  alt={selectedCertificate.title}
                  width={800}
                  height={1040}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">
                {selectedCertificate.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-3">
                Issued by {selectedCertificate.issuer} on{" "}
                {selectedCertificate.issueDate}
              </p>
              <div className="flex flex-wrap gap-1 justify-center mb-4">
                {selectedCertificate.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 justify-center">
                <Button
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 0.6}
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                >
                  <ZoomOut className="h-3.5 w-3.5" />
                </Button>
                <span className="flex items-center px-2 text-sm">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <Button
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 2}
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                </Button>

                <Button asChild variant="outline" size="sm">
                  <a href={selectedCertificate.imagePath} download>
                    <Download className="mr-1 h-3.5 w-3.5" /> Download
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop view: Grid layout with fixed viewer */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 items-start">
        {/* Certificate Viewer (Desktop) */}
        <div className="bg-muted rounded-xl p-6 sticky top-24">
          <div
            className="aspect-[8.5/11] w-full relative bg-white rounded-lg shadow-lg overflow-hidden mb-4"
            style={{
              overflow: "auto",
              maxHeight: "70vh",
            }}
          >
            {selectedCertificate && (
              <div
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: "top left",
                  transition: "transform 0.3s ease",
                }}
              >
                <Image
                  src={selectedCertificate.imagePath}
                  alt={selectedCertificate.title}
                  width={800}
                  height={1040}
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </div>

          {selectedCertificate && (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">
                {selectedCertificate.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                Issued by {selectedCertificate.issuer} on{" "}
                {selectedCertificate.issueDate}
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {selectedCertificate.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 0.6}
                  variant="outline"
                  size="icon"
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <span className="flex items-center px-2">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <Button
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 2}
                  variant="outline"
                  size="icon"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>

                <Button asChild variant="outline">
                  <a href={selectedCertificate.imagePath} download>
                    <Download className="mr-2 h-4 w-4" /> Download
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Certificate List (Desktop) */}
        <div className="grid gap-4">
          <h2 className="text-2xl font-bold mb-2">All Certifications</h2>
          <div className="grid gap-4 max-h-[80vh] overflow-y-auto pr-1">
            {certificates.map((cert) => (
              <Card
                key={cert.id}
                className={`cursor-pointer transition-all hover:border-primary ${
                  selectedCertificate?.id === cert.id ? "border-primary" : ""
                }`}
                onClick={() => setSelectedCertificate(cert)}
              >
                <CardHeader className="pb-2">
                  <CardTitle>{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-24 bg-muted rounded overflow-hidden">
                      <Image
                        src={cert.thumbnailPath}
                        alt={cert.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                      <p className="text-sm">{cert.issueDate}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{cert.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
