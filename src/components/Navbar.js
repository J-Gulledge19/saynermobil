import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <header className="bg-zinc-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <h1 className="title-font font-medium text-stone-300 hover:text-blue-500 hover:scale-110 mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Sayner Mobil
          </a>
        </h1>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-zinc-700	flex flex-wrap items-center text-base justify-center">
          <a href="#gasprices" class="relative inline-flex items-center justify-center px-2 py-0 mr-1 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span class="relative">Gas Prices</span>
          </a>
          <a href="#liquors" class="relative inline-flex items-center justify-center px-2 py-0 mr-1 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-yellow-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span class="relative">Liquors</span>
          </a>
        </nav>
        <a href="#contact" class="relative inline-flex items-center justify-center px-2 py-0 mr-1 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
          <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-rose-500  rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span class="relative inline-flex items-center">Contact Us <ArrowRightIcon className="w-4 h-4 ml-1" /></span>
        </a>
      </div>
    </header>
  );
}