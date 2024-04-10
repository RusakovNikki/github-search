import React from 'react';

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
        height: '100%',
        margin: '0 auto',
      }}
    >
      {children}
    </div>
  );
};

export default Container;
