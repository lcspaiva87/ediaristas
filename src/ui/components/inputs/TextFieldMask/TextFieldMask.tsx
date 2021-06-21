import React from 'react';
import TextField from 'ui/components/inputs/TextField/TextFiled';
import InputMask from 'react-input-mask';
import { OutlinedTextFieldProps } from '@material-ui/core';

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
  value: string;
}

export const TextFieldMask: React.FC<TextFieldMaskProps> = ({
  mask, value, onChange, ...props }) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextField {...props} />
      }}
    </InputMask>
  );
};
