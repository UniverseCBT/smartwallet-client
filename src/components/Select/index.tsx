import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import { Container, Label, LabelValue, LabelArrow, Options } from './styles';

import arrowDown from '../../assets/icons/arrow-down.svg';

export type OptionsProps = {
  value: string | number;
  label: string;
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
        <LabelValue>
          <span>{description || 'select'}</span>
          <input type="text" spellCheck="false" value={inputLabel} />
        </LabelValue>
        <LabelArrow>
          <img src={arrowDown} alt="select arrow" />
        </LabelArrow>
      </Label>
      <Options>
        {options &&
          options.length > 0 &&
          options.map(optionItem => <li key={v4()}>{optionItem.label}</li>)}
      </Options>
    </Container>
  );
};

export default Select;
