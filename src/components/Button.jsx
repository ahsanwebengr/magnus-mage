import React from 'react';

const Button = ({ type, className, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full mb-4 text-center h-10 rounded-lg font-semibold text-md capitalize ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
