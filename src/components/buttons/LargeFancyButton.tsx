import React from "react";

interface LargeFancyButtonProps {
  label: string;
}

const LargeFancyButton: React.FC<LargeFancyButtonProps> = ({ label }) => {
  return (
    <button
      className="mt-6 block w-full select-none rounded-full bg-purplevibrant-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-contrast-100 hover:text-white shadow-md shadow-purplevibrant-500/20 transition-all hover:shadow-lg hover:shadow-purplevibrant-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none duration-300 ease-in-out transform hover:scale-105"
      type="button"
      data-ripple-light="true"
    >
      {label}
    </button>
  );
};

export default LargeFancyButton;
