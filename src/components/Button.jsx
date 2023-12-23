import React from 'react';

const Button = (props) => {
  const { type, text, className, onClick } = props;
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`w-full mb-4 text-center h-10 rounded-lg font-semibold text-md capitalize ${className}`}>
        {text}</button>
    </>
  );
};

export default Button;