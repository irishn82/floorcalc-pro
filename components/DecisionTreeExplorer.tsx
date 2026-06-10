"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FlooringIcon } from "@/components/FlooringIcon";

export type DecisionTreeLink = {
  href: string;
  label: string;
  description?: string;
};

export type DecisionTreeResolvedResult = {
  id: string;
  title: string;
  likelyCause: string;
  summary: string;
  urgency: string;
  whatToCheckFirst: string[];
  whenToCallAPro: string[];
  relatedGuides: DecisionTreeLink[];
  relatedCalculators: DecisionTreeLink[];
};

export type DecisionTreeResolvedQuestion = {
  id: string;
  question: string;
  helperText: string;
  options: {
    label: string;
    nextQuestionId?: string;
    resultId?: string;
  }[];
};

export type DecisionTreeResolved = {
  id: string;
  title: string;
  description: string;
  startingQuestionId: string;
  questions: DecisionTreeResolvedQuestion[];
  results: DecisionTreeResolvedResult[];
};

type DecisionTreeExplorerProps = {
  trees: DecisionTreeResolved[];
};

type PathStep = {
  question: string;
  answer: string;
};

function urgencyClasses(urgency: string) {
  if (urgency.includes("moisture")) {
    return "border-sky-200 bg-sky-50 text-sky-950";
  }

  if (urgency.includes("structural") || urgency.includes("Professional")) {
    return "border-amber-200 bg-amber-50 text-amber-950";
  }

  if (urgency.includes("Monitor")) {
    return "border-emerald-200 bg-emerald-50 text-emerald-950";
  }

  return "border-accent-100 bg-accent-50 text-accent-950";
}

function LinkPanel({ title, links }: { title: string; links: DecisionTreeLink[] }) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border border-line bg-white p-3">
      <h3 className="text-sm font-black text-ink">{title}</h3>
      <div className="mt-3 grid gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md border border-line bg-field px-3 py-2 text-sm transition hover:border-accent-100 hover:bg-white hover:text-accent-700"
          >
            <span className="font-bold text-slate-800">{link.label}</span>
            {link.description ? <span className="mt-1 block text-xs leading-5 text-slate-600">{link.description}</span> : null}
          </Link>
        ))}
      </div>
    </div>
  );
}

function ChecklistPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-line bg-white p-3">
      <h3 className="text-sm font-black text-ink">{title}</h3>
      <ul className="mt-3 grid gap-2">
        {items.map((item) => (
          <li key={item} className="rounded-md border border-line bg-field px-3 py-2 text-sm leading-6 text-slate-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DecisionTreeExplorer({ trees }: DecisionTreeExplorerProps) {
  const [selectedTreeId, setSelectedTreeId] = useState(trees[0]?.id ?? "");
  const selectedTree = useMemo(
    () => trees.find((tree) => tree.id === selectedTreeId) ?? trees[0],
    [trees, selectedTreeId]
  );
  const [currentQuestionId, setCurrentQuestionId] = useState(selectedTree?.startingQuestionId ?? "");
  const [resultId, setResultId] = useState<string | null>(null);
  const [path, setPath] = useState<PathStep[]>([]);

  if (!selectedTree) {
    return null;
  }

  const currentQuestion =
    selectedTree.questions.find((question) => question.id === currentQuestionId) ?? selectedTree.questions[0];
  const selectedResult = resultId ? selectedTree.results.find((result) => result.id === resultId) : null;

  const resetTree = (tree = selectedTree) => {
    setCurrentQuestionId(tree.startingQuestionId);
    setResultId(null);
    setPath([]);
  };

  const selectTree = (treeId: string) => {
    const nextTree = trees.find((tree) => tree.id === treeId) ?? trees[0];
    setSelectedTreeId(nextTree.id);
    resetTree(nextTree);
  };

  const answerQuestion = (answer: (typeof currentQuestion.options)[number]) => {
    setPath((currentPath) => [...currentPath, { question: currentQuestion.question, answer: answer.label }]);

    if (answer.resultId) {
      setResultId(answer.resultId);
      return;
    }

    if (answer.nextQuestionId) {
      setCurrentQuestionId(answer.nextQuestionId);
    }
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
      <aside className="rounded-lg border border-line bg-white p-4 shadow-sm">
        <h2 className="inline-flex items-center gap-2 text-lg font-black text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
            <FlooringIcon name="shield" className="h-4 w-4" />
          </span>
          Choose a decision tree
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Pick the closest symptom. You can restart or switch symptoms at any time.
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {trees.map((tree) => {
            const isSelected = tree.id === selectedTree.id;

            return (
              <button
                key={tree.id}
                type="button"
                onClick={() => selectTree(tree.id)}
                className={[
                  "rounded-md border px-3 py-2.5 text-left text-sm font-bold transition",
                  isSelected
                    ? "border-accent-300 bg-accent-50 text-accent-800 shadow-sm"
                    : "border-line bg-field text-slate-700 hover:border-accent-100 hover:bg-white hover:text-accent-700"
                ].join(" ")}
                aria-pressed={isSelected}
              >
                {tree.title}
              </button>
            );
          })}
        </div>
      </aside>

      <section className="rounded-lg border border-line bg-field p-4 shadow-sm">
        <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-accent-700">Guided help</p>
            <h2 className="mt-1 text-2xl font-black tracking-normal text-ink">{selectedTree.title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{selectedTree.description}</p>
          </div>
          <button
            type="button"
            onClick={() => resetTree()}
            className="inline-flex shrink-0 rounded-md border border-accent-100 bg-white px-3 py-2 text-sm font-bold text-accent-700 transition hover:border-accent-200 hover:text-accent-600"
          >
            Restart tree
          </button>
        </div>

        {path.length > 0 ? (
          <div className="mt-4 rounded-lg border border-line bg-white p-3">
            <h3 className="text-sm font-black text-ink">Your path</h3>
            <ol className="mt-3 grid gap-2">
              {path.map((step, index) => (
                <li key={`${step.question}-${step.answer}-${index}`} className="rounded-md border border-line bg-field p-2 text-xs leading-5 text-slate-600">
                  <span className="font-bold text-slate-800">{step.answer}</span>
                  <span className="block">{step.question}</span>
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        {!selectedResult && currentQuestion ? (
          <div className="mt-4 rounded-lg border border-line bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-accent-700">Question</p>
            <h3 className="mt-1 text-xl font-black text-ink">{currentQuestion.question}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{currentQuestion.helperText}</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => answerQuestion(option)}
                  className="rounded-md border border-line bg-field px-3 py-3 text-left text-sm font-bold text-slate-700 transition hover:border-accent-100 hover:bg-white hover:text-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-600"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {selectedResult ? (
          <div className="mt-4">
            <div className="rounded-lg border border-line bg-white p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-accent-700">Likely direction</p>
                  <h3 className="mt-1 text-2xl font-black text-ink">{selectedResult.title}</h3>
                  <p className="mt-2 text-sm font-bold leading-6 text-slate-800">{selectedResult.likelyCause}</p>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{selectedResult.summary}</p>
                </div>
                <span className={`inline-flex shrink-0 rounded-md border px-3 py-2 text-xs font-black uppercase tracking-wide ${urgencyClasses(selectedResult.urgency)}`}>
                  {selectedResult.urgency}
                </span>
              </div>
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-2">
              <ChecklistPanel title="What to check first" items={selectedResult.whatToCheckFirst} />
              <ChecklistPanel title="When to call a professional" items={selectedResult.whenToCallAPro} />
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-2">
              <LinkPanel title="Recommended guides" links={selectedResult.relatedGuides} />
              <LinkPanel title="Related calculators" links={selectedResult.relatedCalculators} />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => resetTree()}
                className="rounded-md bg-accent-700 px-3 py-2 text-sm font-bold text-white transition hover:bg-accent-800"
              >
                Start this tree over
              </button>
              <Link
                href="/diagnose"
                className="rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-accent-100 hover:text-accent-700"
              >
                Open Problem Finder
              </Link>
              <Link
                href="/guides/browse-problems"
                className="rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-accent-100 hover:text-accent-700"
              >
                Browse all problems
              </Link>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
