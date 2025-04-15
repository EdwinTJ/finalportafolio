"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Code, Database, Server } from "lucide-react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero section with parallax effect */}
      <div
        ref={heroRef}
        className="relative h-[80vh] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/back_coding.jpg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 0.7,
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container relative z-20 text-center px-4">
          <div className="mx-auto mb-8 overflow-hidden rounded-full border-4 border-primary w-40 h-40">
            <Image
              src="/edwin.jpg?height=400&width=400"
              alt="Edwin Silvestre"
              width={160}
              height={160}
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Edwin Silvestre
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Software Engineer & Full-Stack Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/jobs">My Experience</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* About section */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                I'm a passionate software engineer with expertise in building
                scalable web applications and distributed systems.
              </p>
              <p className="text-lg mb-6">
                My technical skills include JavaScript/TypeScript, React,
                Node.js, Python, and cloud technologies like AWS and Google
                Cloud. I'm always eager to learn new technologies and improve my
                skills.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me hiking, reading tech blogs,
                or gaming.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6 text-center">
                <Code className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-medium mb-2">Frontend</h3>
                <p>React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-muted rounded-lg p-6 text-center">
                <Server className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-medium mb-2">Backend</h3>
                <p>Node.js, Express, Python, Django</p>
              </div>
              <div className="bg-muted rounded-lg p-6 text-center">
                <Database className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-medium mb-2">Database</h3>
                <p>PostgreSQL, MongoDB, Redis</p>
              </div>
              <div className="bg-muted rounded-lg p-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 mx-auto mb-4 text-primary"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                  <polyline points="7.5 19.79 7.5 14.6 3 12" />
                  <polyline points="21 12 16.5 14.6 16.5 19.79" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                <h3 className="text-xl font-medium mb-2">DevOps</h3>
                <p>Docker, Kubernetes, CI/CD, AWS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
