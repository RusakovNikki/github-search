import React, { useEffect, useState } from 'react';
import './index.scss';

export interface ISnackbar {
  text: string;
  open: boolean;
  onClose: () => void;
}

const Snackbar = ({ text, open, onClose }: ISnackbar) => {
  useEffect(() => {
    if (open)
      setTimeout(() => {
        onClose();
      }, 2700);
  }, [open]);
  return (
    <div id="snackbar" className={open ? 'show' : ''}>
      {text}
    </div>
  );
};

export default Snackbar;
