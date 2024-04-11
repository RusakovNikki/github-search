import React from 'react';
import './index.scss';

interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextField = ({ label }: ITextFieldProps) => {
  return (
    <div className="form-item">
      {label && (
        <label htmlFor="#position" className="form-item__title rubik-regular">
          {label}
        </label>
      )}
      <input id="#position" type="text" className="form-item__field" />
    </div>
  );
};

export default TextField;
