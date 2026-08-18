"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { FadeInView } from "@/components/animations/FadeInView";
import { cn } from "@/lib/cn";
import type { ShowcaseDepartment } from "./types";

interface DepartmentsShowcaseProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  accentVar: string;
  departments: ShowcaseDepartment[];
  wikiJobsHref?: string;
}

export function DepartmentsShowcase({
  eyebrow,
  title,
  description,
  accentVar,
  departments,
  wikiJobsHref,
}: DepartmentsShowcaseProps) {
  const [activeDept, setActiveDept] = useState<ShowcaseDepartment>(
    departments[0]
  );

  if (departments.length === 0) return null;
  const Icon = activeDept.icon;

  return (
    <section className="relative py-20 sm:py-28 bg-space-void overflow-hidden">
      <div
        className="absolute inset-0 transition-colors duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, color-mix(in srgb, ${activeDept.color} 8%, transparent) 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center mb-12">
          <p
            className="font-mono text-sm tracking-widest uppercase mb-4"
            style={{ color: accentVar }}
          >
            {eyebrow}
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary mb-6">
            {title}
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            {description}{" "}
            {wikiJobsHref && (
              <Link href={wikiJobsHref} className="text-neon-cyan hover:underline">
                Ver guía de trabajos →
              </Link>
            )}
          </p>
        </FadeInView>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {departments.map((dept) => {
            const DeptIcon = dept.icon;
            const isActive = activeDept.id === dept.id;

            return (
              <button
                key={dept.id}
                onClick={() => setActiveDept(dept)}
                aria-label={dept.name}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 rounded-sm border text-sm font-mono font-bold transition-all duration-300",
                  isActive
                    ? "border-opacity-100 text-white"
                    : "border-grid-line text-text-muted hover:text-text-primary hover:border-text-muted"
                )}
                style={
                  isActive
                    ? {
                        borderColor: dept.color,
                        backgroundColor: `color-mix(in srgb, ${dept.color} 15%, transparent)`,
                        color: dept.color,
                        boxShadow: `0 0 20px color-mix(in srgb, ${dept.color} 20%, transparent)`,
                      }
                    : undefined
                }
              >
                <DeptIcon className="w-4 h-4" />
                <span className="hidden sm:inline">{dept.name}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDept.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <div
                className="inline-flex items-center gap-3 mb-3"
                style={{ color: activeDept.color }}
              >
                <Icon className="w-8 h-8" />
                <h3 className="font-heading font-bold text-2xl">
                  {activeDept.name}
                </h3>
              </div>
              <p className="text-text-muted max-w-2xl mx-auto">
                {activeDept.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {activeDept.jobs.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  <Card className="group h-full" hover>
                    <h4 className="font-heading font-bold text-text-primary">
                      {job.name}
                    </h4>
                    {job.salary !== undefined && (
                      <div className="mt-2 space-y-1 text-sm font-mono">
                        <div className="flex justify-between">
                          <span className="text-text-muted">Salario:</span>
                          <span className="text-hazard-yellow font-bold">
                            {job.salary} Sp/ciclo
                          </span>
                        </div>
                        {job.startingBalance !== undefined && (
                          <div className="flex justify-between">
                            <span className="text-text-muted">Saldo inicial:</span>
                            <span className="text-success-green">
                              {job.startingBalance} Sp
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                    <div
                      className="mt-3 h-1 rounded-full opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: activeDept.color }}
                    />
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
