import React from 'react';
import bgImage from './images/wallpaper.jpeg';

function Header() {
  return (
    <header className="flex flex-col mb-20">
      <p className="text-sm font-medium w-full leading-10 text-center h-10 text-slate-200 bg-[#181818]">Ganhe R$ 10,00 de desconto no frete</p>
      <p className="text-xl font-medium w-full leading-10 text-center h-10 text-[#181818] bg-[#F9F9F9]">JordanShoes</p>
      <div className="relative full h-72 bg-black">
        <img className="absolute h-full w-full object-cover opacity-40" src={bgImage} alt="" />
        <h1 className="absolute text-4xl font-medium top-20 left-16 text-slate-200">A melhor loja de Jordan</h1>
        <p className="absolute text-sm md:text-base font-medium top-40 left-16 w-80 text-slate-200">O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
      </div>
    </header>
  );
}

export default Header;
