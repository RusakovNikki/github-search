import React from 'react';
import './index.scss';

interface IHeaderProps {
  title: string;
}

const Header = ({ title }: IHeaderProps) => {
  return (
    <header className="header">
      <h1 className="title header__title rubik-light">{title}</h1>
    </header>
  );
};

export default Header;
