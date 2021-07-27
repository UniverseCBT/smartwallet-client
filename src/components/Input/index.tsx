import React, { useState, useEffect, useCallback } from 'react';
import { UseFormRegister } from 'react-hook-form';

import * as S from './styles';

import closeEyesIcon from '../../assets/icons/close_eyes.svg';
import openEyesIcon from '../../assets/icons/open_eyes.svg';

// search a type to register
export type InputProps = {
  inputName: string;
  text?: string;
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error?: string;
};

const Input = ({ inputName, text, type, register, error }: InputProps) => {
  const [isPassword, setIsPassword] = useState(false);
  const [visible, setVisible] = useState(false);
  const [defaultType, setDefaultType] = useState('');

  useEffect(() => {
    function handleInputType() {
      if (type === 'password') {
        setIsPassword(true);
      }
    }

    handleInputType();
  }, [type, setIsPassword]);

  const visiblePasswordType = useCallback(() => {
    setVisible(!visible);
  }, [visible, setVisible]);

  useEffect(() => {
    if (isPassword) {
      setDefaultType('password');

      if (visible) {
        setDefaultType('text');
      }
    }
  }, [isPassword, visible, setDefaultType]);

  return (
    <S.Container>
      <S.Label htmlFor={inputName} error={error}>
        <S.LabelValue>
          <span>{text}</span>
          <input
            type={isPassword ? defaultType : type}
            spellCheck="false"
            autoComplete={type === 'email' ? 'on' : 'off'}
            id={inputName}
            {...register(inputName)}
          />
        </S.LabelValue>
        {isPassword && (
          <S.VisiblePassword
            type="button"
            onClick={() => visiblePasswordType()}
          >
            <img
              src={visible ? openEyesIcon : closeEyesIcon}
              alt={visible ? 'Visible' : 'Hidden'}
            />
          </S.VisiblePassword>
        )}
      </S.Label>
      {error && <p>{error}</p>}
    </S.Container>
  );
};

export default Input;
