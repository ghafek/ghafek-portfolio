export const metadata = {
  title: "Impressum | Ghafek Alsaho",
  description: "Impressum placeholder for the portfolio website.",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-16 sm:px-10 lg:px-16">
      <div className="space-y-6 rounded-2xl border border-slate-200/80 bg-white/75 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
        <h1 className="text-3xl font-semibold tracking-tight">Impressum</h1>
        <p className="text-slate-700 dark:text-slate-300">
          Impressum content to be completed before publication.
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Please add the legally required publisher information before going live.
        </p>
      </div>
    </main>
  );
}
