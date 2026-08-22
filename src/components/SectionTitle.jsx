function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-16 text-center">
      <p className="text-violet-400 uppercase tracking-[4px] text-sm">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold mt-3">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;