"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export function ShowcasePreview() {
  const featuredProjects = [
    {
      name: "TechNova SaaS Dashboard",
      category: "Dashboard",
      rating: 5,
      description: "Full-featured analytics dashboard with auto-scaling",
    },
    {
      name: "ShopEase E-commerce Store",
      category: "E-commerce",
      rating: 5,
      description: "High-traffic WooCommerce with sub-second load times",
    },
    {
      name: "EduSpark LMS Platform",
      category: "SaaS",
      rating: 5,
      description: "Learning management system serving 10,000+ students",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See What Our Clients Built
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore real projects, live websites, and success stories from 110,000+ businesses
              that trust HostingSpell to power their online presence.
            </p>
            <Button size="lg" className="gap-2 dark:text-white" asChild>
              <Link href="/showcase">
                View Full Showcase <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Featured Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.name} variants={fadeUp}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6 flex flex-col h-full gap-4">
                    {/* Icon + Badge */}
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">✨</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 pt-2 border-t border-border">
                      {Array.from({ length: project.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-auto">
                        {project.rating}.0
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Band */}
          <motion.div
            className="mt-12 relative bg-gradient-to-r from-primary to-primary/80 text-white py-12 px-8 rounded-2xl shadow-lg overflow-hidden text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="relative space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                Ready to Join 110,000+ Successful Websites?
              </h3>
              <p className="text-white max-w-xl mx-auto">
                Explore our full showcase of client projects, testimonials, and success metrics.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 gap-2"
                  asChild
                >
                  <Link href="/showcase">
                    Explore Showcase <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
