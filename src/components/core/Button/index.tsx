import React from 'react';
import './index.scss';

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className="button" {...props} />;
};

export default Button;
