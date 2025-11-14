import "./index.css";
import { VideoPlayer } from "./VideoPlayer";
import { Hero } from "./Hero";

const summary = [
  {
    id: "video-player",
    label: "Video Player",
    component: <VideoPlayer id="video-player" />,
  },
  {
    id: "hero",
    label: "Hero",
    component: <Hero id="hero" />,
  },
];

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16">
        <div className="animate-fade-in mb-8 text-center">
          <h1 className="mb-4 text-6xl font-bold tracking-tight text-slate-900">
            UI Bibliotek
          </h1>
        </div>
        <div className="mb-16 flex w-full max-w-4xl flex-col items-center gap-6">
          <div className="text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-slate-900">
              Summary
            </h2>
            <p className="text-sm text-slate-600">Jump to any component</p>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {summary.map((item, idx) => (
              <li key={item.id} className="group">
                <button
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:scale-105 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md active:scale-95"
                  onClick={() => {
                    const el = document.getElementById(item.id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-600 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                    {idx + 1}
                  </span>
                  <span>{item.label}</span>
                  <svg
                    className="h-4 w-4 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full flex-col gap-16">
          {summary.map((item, idx) => (
            <div key={item.id}>
              {item.component}
              {idx < summary.length - 1 && (
                <hr className="my-16 rounded-full border-t-4 border-blue-300 shadow-sm" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
