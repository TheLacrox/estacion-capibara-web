"use client";

import { useState } from "react";
import Link from "next/link";
import { DISCORD_URL, SS14_DOWNLOAD_URL } from "@/lib/constants";
import { Footer } from "@/components/layout/Footer";
import {
  QUIZ_QUESTIONS,
  calculateResult,
  type DepartmentId,
  type QuizResult,
} from "@/data/quiz";

function QuizContent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<DepartmentId, number>>({
    command: 0,
    security: 0,
    engineering: 0,
    medical: 0,
    science: 0,
    cargo: 0,
    service: 0,
    civilian: 0,
  });
  const [result, setResult] = useState<QuizResult | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const question = QUIZ_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion) / QUIZ_QUESTIONS.length) * 100;

  function handleSelect(optionIndex: number) {
    if (selectedOption !== null) return;
    setSelectedOption(optionIndex);

    const option = question.options[optionIndex];
    const newScores = { ...scores };
    for (const [dept, value] of Object.entries(option.scores)) {
      newScores[dept as DepartmentId] += value;
    }
    setScores(newScores);

    setTimeout(() => {
      if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        setResult(calculateResult(newScores));
      }
    }, 400);
  }

  function handleRestart() {
    setCurrentQuestion(0);
    setScores({
      command: 0,
      security: 0,
      engineering: 0,
      medical: 0,
      science: 0,
      cargo: 0,
      service: 0,
      civilian: 0,
    });
    setResult(null);
    setSelectedOption(null);
  }

  if (result) {
    return (
      <div className="max-w-2xl mx-auto">
        <div
          className="border-2 rounded-sm p-8 text-center"
          style={{
            borderColor: result.color,
            backgroundColor: `${result.color}10`,
          }}
        >
          <div
            className="inline-block px-4 py-1 rounded-sm text-xs font-mono font-bold mb-4 uppercase tracking-wider"
            style={{ backgroundColor: result.color, color: "#0b0f19" }}
          >
            Tu resultado
          </div>
          <h2
            className="text-3xl sm:text-4xl font-heading font-bold mb-2"
            style={{ color: result.color }}
          >
            {result.title}
          </h2>
          <p className="text-text-primary font-heading font-bold text-lg mb-4">
            Rol recomendado: {result.role}
          </p>
          <p className="text-text-muted font-mono text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            {result.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={SS14_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-sm font-heading font-bold uppercase tracking-wider bg-hazard-yellow text-[#0b0f19] rounded-sm hover:bg-hazard-orange transition-colors"
            >
              Jugar Gratis
            </a>
            <Link
              href={result.wikiLink}
              className="inline-flex items-center px-6 py-3 text-sm font-heading font-bold uppercase tracking-wider border-2 border-text-muted text-text-primary rounded-sm hover:border-hazard-yellow hover:text-hazard-yellow transition-colors"
            >
              Ver Roles
            </Link>
            <button
              onClick={handleRestart}
              className="inline-flex items-center px-6 py-3 text-sm font-heading font-bold uppercase tracking-wider text-text-muted hover:text-text-primary transition-colors"
            >
              Repetir Quiz
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-text-muted font-mono text-xs mb-3">
            Comparte tu resultado con tus amigos
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-xs font-mono border border-grid-line rounded-sm text-text-muted hover:text-neon-cyan hover:border-neon-cyan/50 transition-colors"
            >
              Compartir en Discord
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-text-muted font-mono text-xs">
            Pregunta {currentQuestion + 1} de {QUIZ_QUESTIONS.length}
          </span>
          <span className="text-text-muted font-mono text-xs">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full h-1.5 bg-hull-panel rounded-sm overflow-hidden">
          <div
            className="h-full bg-hazard-yellow transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mb-8">
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            disabled={selectedOption !== null}
            className={`w-full text-left border rounded-sm p-5 transition-all ${
              selectedOption === i
                ? "border-hazard-yellow bg-hazard-yellow/10"
                : selectedOption !== null
                  ? "border-grid-line/50 bg-hull-panel/50 opacity-50"
                  : "border-grid-line bg-hull-panel hover:border-hazard-yellow/50 hover:bg-hull-panel/80"
            }`}
          >
            <span className="font-mono text-sm text-text-primary">
              {option.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-space-void">
      <nav className="sticky top-0 z-50 border-b border-grid-line bg-space-void/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading font-bold text-text-primary tracking-wider text-sm"
          >
            <img
              src="/branding/logo.svg"
              alt="Estación Capibara"
              className="w-7 h-7"
              width={28}
              height={28}
            />
            <span className="hidden sm:inline">
              ESTACIÓN <span className="text-hazard-yellow">CAPIBARA</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/wiki"
              className="text-sm font-mono text-text-muted hover:text-hazard-yellow transition-colors"
            >
              Wiki
            </Link>
            <Link
              href="/blog"
              className="text-sm font-mono text-text-muted hover:text-hazard-yellow transition-colors"
            >
              Blog
            </Link>
            <a
              href={SS14_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-wider bg-hazard-yellow text-[#0b0f19] rounded-sm hover:bg-hazard-orange transition-colors"
            >
              Jugar Gratis
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <header className="text-center mb-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-xs font-mono text-text-muted">
              <li>
                <Link
                  href="/"
                  className="hover:text-hazard-yellow transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-grid-line">/</span>
                <span className="text-text-primary">Quiz</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            ¿Qué Rol de SS14 Eres?
          </h1>
          <p className="text-text-muted font-mono text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Responde 7 preguntas y descubre qué departamento y rol de Space
            Station 14 se adapta mejor a tu personalidad.
          </p>
        </header>

        <QuizContent />
      </main>

      <Footer />
    </div>
  );
}
