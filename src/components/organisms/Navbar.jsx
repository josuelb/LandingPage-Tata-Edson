export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      bg-noite/90
      backdrop-blur-md
      border-b
      border-ouro/20
    "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        px-4
        py-3
        flex
        items-center
        justify-between
      "
      >
        <div
          className="
          flex
          items-center
          gap-3
        "
        >
          <img
            src="logo_Casa_Jurema_Cruzeiro_Luz.png"
            alt="Logo Casa de Jurema Cruzeiro de Luz"
            className="
            w-10
            h-10
            rounded-full
            object-cover
            opacity-90
          "
          />

          <span
            className="
            font-cinzelPlain
            text-ouro
            text-sm
            tracking-widest
            uppercase
            hidden
            sm:block
          "
          >
            Tata Edson Tertuliano
          </span>
        </div>

        <div
          className="
          flex
          items-center
          gap-6
          text-sm
          font-cinzelPlain
          tracking-wider
          text-pergaminho/80
        "
        >
          <a href="#sobre" className="hidden md:block">
            Sobre
          </a>

          <a href="#atendimentos" className="hidden md:block">
            Atendimentos
          </a>

          <a href="#trabalhos" className="hidden md:block">
            Trabalhos
          </a>

          <a href="#contato" className="hidden md:block">
            Contato
          </a>

          <a
            href="https://wa.me/5587981382538"
            target="_blank"
            rel="noopener noreferrer"
            className="
            bg-vinho
            hover:bg-vinhoClaro
            text-vela
            px-4
            py-1.5
            rounded
            font-cinzelPlain
            text-xs
            tracking-widest
            transition-colors
            border
            border-ouro/30
          "
          >
            Consultar
          </a>
        </div>
      </div>
    </nav>
  );
}