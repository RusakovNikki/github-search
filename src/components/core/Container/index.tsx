import React from 'react';
import './index.scss';

interface IContainerProps {
  width: string;
  children?: React.ReactNode | React.ReactNode[];
}

const Container = ({ width, children }: IContainerProps) => {
  return (
    <div
      className="container"
      style={{
        width: width,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
