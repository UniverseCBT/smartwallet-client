import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import { Container, Label, Options } from './styles';

type OptionsProps = {
  value: string | number;
  label: string;
  defaultValue?: boolean;
};

type SelectProps = {
  options?: OptionsProps[];
  label: string;
  description?: string;
};

const Select = ({ options, label, description }: SelectProps) => {
  const [inputLabel, setInputLabel] = useState('');

  useEffect(() => {
    setInputLabel(label);
  }, [label, setInputLabel]);

  return (
    <Container>
      <Label>
        <span>{description || 'select'}</span>
        <input type="text" readOnly value={inputLabel} />
      </Label>
      <Options>
        {options &&
          options.length > 0 &&
          options.map(optionItem => <li key={v4()}>{optionItem}</li>)}
      </Options>
    </Container>
  );
};

export default Select;
