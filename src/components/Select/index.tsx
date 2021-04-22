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
  icon?: string;
  iconText?: string;
};

type SelectProps = {
  options: OptionsProps[];
  label: string;
  description?: string;
  setValue?: Dispatch<SetStateAction<string | number>>;
  type?: string;
};

const Select = ({
  options,
  label,
  description,
  setValue,
  type = 'default'
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

  const teste = (optionItem: any) => {
    switch (type) {
      case 'teste2': {
        return (
          <button
            type="button"
            onClick={() => handleChangeLabel(optionItem.value)}
            className={optionItem.label === inputLabel ? 'active' : ''}
          >
            <OptionsMain>
              <OptionImage>
                <img src={optionItem.icon} alt={optionItem.iconText} />
              </OptionImage>
              <OptionsContent>
                <h4>{optionItem.label}</h4>
                <p>{optionItem.description}</p>
              </OptionsContent>
            </OptionsMain>
          </button>
        );
      }
      default: {
        return (
          <button
            type="button"
            onClick={() => handleChangeLabel(optionItem.value)}
            className={optionItem.label === inputLabel ? 'active' : ''}
          >
            {optionItem.label}
          </button>
        );
      }
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
              <li key={optionItem.value}>
                {type === 'default' ? (
                  <button
                    type="button"
                    onClick={() => handleChangeLabel(optionItem.value)}
                    className={optionItem.label === inputLabel ? 'active' : ''}
                  >
                    {optionItem.label}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleChangeLabel(optionItem.value)}
                    className={optionItem.label === inputLabel ? 'active' : ''}
                  >
                    <OptionsMain>
                      <OptionImage>
                        <img src={optionItem.icon} alt={optionItem.iconText} />
                      </OptionImage>
                      <OptionsContent>
                        <h4>{optionItem.label}</h4>
                        <p>{optionItem.description}</p>
                      </OptionsContent>
                    </OptionsMain>
                  </button>
                )}
              </li>
            ))}
        </Options>
      )}
    </Container>
  );
};

export default Select;
