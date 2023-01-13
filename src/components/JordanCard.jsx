import React from 'react';
import images from '../data/imageArray';

function JordanCard() {
  return (
    images.map((img) => (
      <div className="cursor-pointer flex justify-center items-center w-80 h-60 bg-[#EBE9EA] my-10 mx-5">
        <img className="w-60 h-40" src={img} alt="jordan-shoe" />
      </div>
    ))
  );
}

export default JordanCard;
