import React, {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction
} from 'react';

import {
  Container,
  Label,
  LabelValue,
  LabelArrow,
  Options,
  OptionsMain,
  OptionImage,
  OptionsContent
} from './styles';

import arrowDown from '../../assets/icons/arrow-down.svg';

export type OptionsProps = {
  value: string | number;
  label: string;
  description?: string;
  icon?: {
    path: string;
    text?: string;
  };
};

type SelectProps = {
  options: OptionsProps[];
  label: string;
  description?: string;
  setValue?: Dispatch<SetStateAction<string | number>>;
  type?: 'simple' | 'medium' | 'complex';
};

const Select = ({
  options,
  label,
  description,
  setValue,
  type = 'simple'
}: SelectProps) => {
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
  }, [optionsRef, setOptionShow]);

  function handleChangeLabel(value: string | number) {
    if (options.length > 0) {
      const findLabel = options.find(
        optionLabel => optionLabel.value === value
      );

      if (findLabel && setValue) {
        setInputLabel(findLabel.label);
        setValue(value);
        setOptionShow(false);
      }
    }
  }

  const selectType = (optionItem: OptionsProps) => {
    switch (type) {
      case 'simple':
        return (
          <button
            type="button"
            onClick={() => handleChangeLabel(optionItem.value)}
            className={optionItem.label === inputLabel ? 'active' : ''}
          >
            {optionItem.label}
          </button>
        );
        break;
      case 'complex':
        return (
          <button
            type="button"
            onClick={() => handleChangeLabel(optionItem.value)}
            className={optionItem.label === inputLabel ? 'active' : ''}
          >
            <OptionsMain>
              <OptionImage>
                <img src={optionItem.icon?.path} alt={optionItem.icon?.text} />
              </OptionImage>
              <OptionsContent>
                <h4>{optionItem.label}</h4>
                <p>{optionItem.description}</p>
              </OptionsContent>
            </OptionsMain>
          </button>
        );
        break;
      default:
        return (
          <button
            type="button"
            onClick={() => handleChangeLabel(optionItem.value)}
            className={optionItem.label === inputLabel ? 'active' : ''}
          >
            {optionItem.label}
          </button>
        );
        break;
    }
  };

  return (
    <Container type={type}>
      <Label onClick={() => setOptionShow(!optionShow)} ref={labelRef}>
        <LabelValue>
          <span>{description || 'Select'}</span>
          <input
            type="text"
            readOnly
            spellCheck="false"
            value={inputLabel}
            name={description || 'Select'}
          />
        </LabelValue>
        <LabelArrow>
          <img src={arrowDown} alt="select arrow" />
        </LabelArrow>
      </Label>
      {optionShow && (
        <Options ref={optionsRef} type={type}>
          {options &&
            options.length > 0 &&
            options.map(optionItem => (
              <li key={optionItem.value}>{selectType(optionItem)}</li>
            ))}
        </Options>
      )}
    </Container>
  );
};

export default Select;
