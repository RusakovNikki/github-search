import React, { useState } from 'react';
import Button from '../Button';
import copy from 'clipboard-copy';

export interface ICopyButton {
  text: string;
}

const CopyButton = ({ text, ...props }: ICopyButton) => {
  const [isCopied, setCopied] = useState<boolean>(false);

  const onClickCopy = () => {
    copy(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <Button {...props} onClick={onClickCopy}>
      {isCopied ? 'Скопировано' : 'Копировать'}
    </Button>
  );
};

export default CopyButton;
