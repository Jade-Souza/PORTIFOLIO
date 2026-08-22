import { Link } from "react-router-dom";

function ProjectHero({ project }) {
  return (
    <section className="pb-20 border-b border-white/10">

      <Link
        to="/"
        className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition"
      >
        ← Back to Portfolio
      </Link>

      <div className="mt-12">

        <p className="uppercase tracking-[6px] text-violet-400 font-semibold">
          {project.subtitle}
        </p>

        <h1 className="text-6xl lg:text-7xl font-extrabold mt-5">
          {project.title}
        </h1>

        <p className="text-zinc-400 text-xl leading-9 max-w-3xl mt-8">
          {project.overview}
        </p>

      </div>

      <div className="flex flex-wrap gap-3 mt-12">

        {project.technologies.map((tech) => (

          <span
            key={tech}
            className="px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300"
          >
            {tech}
          </span>

        ))}

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16">

        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">

          <p className="text-violet-400 uppercase text-sm tracking-wider">
            Role
          </p>

          <h3 className="mt-3 text-xl font-semibold">
            {project.role}
          </h3>

        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">

          <p className="text-violet-400 uppercase text-sm tracking-wider">
            Team
          </p>

          <h3 className="mt-3 text-xl font-semibold">
            {project.team}
          </h3>

        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">

          <p className="text-violet-400 uppercase text-sm tracking-wider">
            Repository
          </p>

          <h3 className="mt-3 text-xl font-semibold">
            {project.status}
          </h3>

        </div>

      </div>

    </section>
  );
}

export default ProjectHero;