import React from 'react';
import JordanCard from './JordanCard';

function MainContent() {
  return (
    <main className="flex flex-col items-center">
      <h2 className="mb-5 text-xl font-medium">Destaques</h2>
      <p className="mb-10 text-center">Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>
      <div className="w-11/12 flex flex-wrap justify-center">
        <JordanCard />
      </div>
    </main>
  );
}

export default MainContent;
