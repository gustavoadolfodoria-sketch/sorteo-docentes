export default function Footer() {
  return (
    <footer className="w-screen flex justify-center items-center mt-3 pb-2">
      <div className="mx-auto text-center text-[10px] text-gray-400 leading-[1.1]">
        <p className="m-0 p-0">Desarrollado por Gustavo Adolfo Doria Toloza</p>
        <p className="m-0 p-0">Ingeniero de Sistemas · Esp en Tecnologías de la Información</p>
        <a
          href="mailto:gustavoadolfodoria@hotmail.com"
          className="block m-0 p-0 hover:text-white transition"
        >
          gustavoadolfodoria@hotmail.com
        </a>
      </div>
    </footer>
  );
}