"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown,
  Shield,
  Wrench,
  Heart,
  FlaskConical,
  Package,
  UtensilsCrossed,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { GlowText } from "@/components/ui/GlowText";
import { FadeInView } from "@/components/animations/FadeInView";
import { SECTION_IDS } from "@/lib/constants";
import { departments, type Department } from "@/data/departments";
import { cn } from "@/lib/cn";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Crown,
  Shield,
  Wrench,
  Heart,
  FlaskConical,
  Package,
  UtensilsCrossed,
  Users,
};

export function DepartmentsSection() {
  const [activeDept, setActiveDept] = useState<Department>(departments[0]);

  const Icon = iconMap[activeDept.icon];
  const maxSalary = Math.max(
    ...departments.flatMap((d) => d.jobs.map((j) => j.salary))
  );

  return (
    <section
      id={SECTION_IDS.departments}
      className="relative py-24 sm:py-32 bg-space-void overflow-hidden"
    >
      {/* Background tint */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, color-mix(in srgb, ${activeDept.color} 8%, transparent) 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInView className="text-center mb-12">
          <p className="font-mono text-hazard-yellow text-sm tracking-widest uppercase mb-4">
            // TRIPULACION
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary mb-6">
            Departamentos y <GlowText color="yellow">Roles</GlowText>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            8 departamentos, mas de 30 roles unicos. Cada trabajo tiene
            responsabilidades, salario y herramientas diferentes.
          </p>
        </FadeInView>

        {/* Department selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {departments.map((dept) => {
            const DeptIcon = iconMap[dept.icon];
            const isActive = activeDept.id === dept.id;

            return (
              <button
                key={dept.id}
                onClick={() => setActiveDept(dept)}
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
                {DeptIcon && <DeptIcon className="w-4 h-4" />}
                <span className="hidden sm:inline">{dept.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="deptIndicator"
                    className="absolute -bottom-px left-0 right-0 h-0.5"
                    style={{ backgroundColor: dept.color }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Department content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDept.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Description */}
            <div className="text-center mb-8">
              <div
                className="inline-flex items-center gap-3 mb-3"
                style={{ color: activeDept.color }}
              >
                {Icon && <Icon className="w-8 h-8" />}
                <h3 className="font-heading font-bold text-2xl">
                  {activeDept.name}
                </h3>
              </div>
              <p className="text-text-muted max-w-xl mx-auto">
                {activeDept.description}
              </p>
            </div>

            {/* Job cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
              {activeDept.jobs.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Card className="group" hover>
                    <h4 className="font-heading font-bold text-text-primary mb-2">
                      {job.name}
                    </h4>
                    <div className="space-y-1 text-sm font-mono">
                      <div className="flex justify-between">
                        <span className="text-text-muted">Salario:</span>
                        <span className="text-hazard-yellow font-bold">
                          {job.salary} Sp/ciclo
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted">Saldo inicial:</span>
                        <span className="text-success-green">
                          {job.startingBalance} Sp
                        </span>
                      </div>
                    </div>

                    {/* Salary bar */}
                    <div className="mt-3 h-1.5 bg-grid-line rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: activeDept.color }}
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${(job.salary / maxSalary) * 100}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + i * 0.05,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                      />
                    </div>
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
