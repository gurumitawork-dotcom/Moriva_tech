const items = [
  "Web Engineering",
  "Product Design",
  "AI & Automation",
  "Mobile Apps",
  "Cloud & DevOps",
  "Brand Systems",
];

export default function Marquee() {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-b border-line bg-ink2 py-6">
      <div className="flex w-max animate-marquee gap-12">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span className="font-sora text-2xl font-700 text-textDim md:text-3xl">
              {item}
            </span>
            <span className="text-2xl text-accent md:text-3xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
