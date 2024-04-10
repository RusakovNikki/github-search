import React from 'react';

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className="button" {...props} />;
};

export default Button;
