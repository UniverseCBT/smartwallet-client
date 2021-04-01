/* eslint-disable no-shadow */
import React, { useState, useEffect, useRef } from 'react';

import { Container, Label, LabelValue, LabelArrow, Options } from './styles';

import arrowDown from '../../assets/icons/arrow-down.svg';

export type OptionsProps = {
  value: string | number;
  label: string;
};

type SelectProps = {
  options: OptionsProps[];
  label: string;
  description?: string;
};

const Select = ({ options, label, description }: SelectProps) => {
  const labelRef = useRef<HTMLDivElement | null>(null);
  const optionsRef = useRef<HTMLUListElement | null>(null);

  const [optionShow, setOptionShow] = useState(false);
  const [inputLabel, setInputLabel] = useState('');

  useEffect(() => {
    setInputLabel(label);
  }, [label, setInputLabel]);

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        labelRef.current &&
        !optionsRef.current.contains(event.target as Node) &&
        !labelRef.current.contains(event.target as Node)
      ) {
        setOptionShow(false);
      }

      if (event.button !== 0) {
        setOptionShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutSide);

    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, [optionsRef]);

  function handleChangeLabel(value: string | number) {
    if (options.length > 0) {
      const findLabel = options.find(findLabel => findLabel.value === value);

      if (findLabel) {
        setInputLabel(findLabel.label);
        setOptionShow(false);
      }
    }
  }

  return (
    <Container>
      <Label onClick={() => setOptionShow(!optionShow)} ref={labelRef}>
        <LabelValue>
          <span>{description || 'select'}</span>
          <input type="text" readOnly spellCheck="false" value={inputLabel} />
        </LabelValue>
        <LabelArrow>
          <img src={arrowDown} alt="select arrow" />
        </LabelArrow>
      </Label>
      <Options optionShow={optionShow} ref={optionsRef}>
        {options &&
          options.length > 0 &&
          options.map(optionItem => (
            <li key={optionItem.value}>
              <button
                type="button"
                onClick={() => handleChangeLabel(optionItem.value)}
              >
                {optionItem.label}
              </button>
            </li>
          ))}
      </Options>
    </Container>
  );
};

export default Select;
