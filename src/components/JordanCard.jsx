import React from 'react';
import images from '../data/imageArray';

function JordanCard() {
  return (
    images.map((img) => (
      <div className="cursor-pointer flex justify-center items-center w-72 h-52 bg-[#EBE9EA] my-3 mx-2">
        <img className="bg-contain w-40 h-20" src={img} alt="jordan-shoe" />
      </div>
    ))
  );
}

export default JordanCard;
