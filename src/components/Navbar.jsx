function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-xl bg-[#09090B]/70 border-b border-white/5 z-50">
      <nav className="max-w-7xl mx-auto h-20 flex justify-between items-center px-8">

        <a
          href="#hero"
          className="text-2xl font-bold tracking-widest text-white"
        >
          JADE
        </a>

        <ul className="hidden md:flex gap-10 text-zinc-400">

          <li>
            <a href="#about" className="hover:text-violet-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-violet-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-violet-400 transition">
              Contact
            </a>
          </li>

        </ul>

      </nav>
    </header>
  );
}

export default Navbar;