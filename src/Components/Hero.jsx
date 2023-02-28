export default function Hero({
  purpleText,
  title,
  tagLine,
  cta,
  secondaryCTA,
  handleChange,
}) {
  return (
    <section className="py-24 flex items-center h-full justify-center bg-white">
      <div className="mx-auto max-w-[43rem]">
        <div className="text-center">
          {purpleText ? (
            <p className="text-lg font-medium leading-8 text-indigo-600/95">
              {purpleText}
            </p>
          ) : null}
          {title ? (
            <h1 className="text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
              {title}
            </h1>
          ) : null}
          {tagLine ? (
            <p className="mt-3 text-lg leading-relaxed text-slate-400">
              {tagLine}
            </p>
          ) : null}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          {cta ? (
            <a
              href={cta.link}
              className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
            >
              {cta.text}
            </a>
          ) : null}
          {secondaryCTA ? (
            <a
              href={secondaryCTA.link}
              className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"
            >
              {secondaryCTA.text}
            </a>
          ) : null}
          <button
            onClick={handleChange}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sync Now
          </button>
        </div>
      </div>
    </section>
  );
}
