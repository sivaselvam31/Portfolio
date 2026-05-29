import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({ variant = 'primary', className, children, ...props }) => {
  const baseClasses = "px-4 py-2 rounded-md text-sm font-medium transition duration-300 inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-gray-800 text-white hover:bg-gray-700",
  };

  return (
    <button className={twMerge(clsx(baseClasses, variants[variant], className))} {...props}>
      {children}
    </button>
  );
};

export default Button;
