import React, { useState, useEffect, useCallback } from 'react';
// import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form';

import * as S from './styles';

import closeEyesIcon from '../../assets/icons/close_eyes.svg';
import openEyesIcon from '../../assets/icons/open_eyes.svg';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  inputName: string;
  text?: string;
  type?: string;
  register?: ({ required }: { required?: boolean }) => RefReturn;
};

const Input = ({ inputName, text, type, register, required }: InputProps) => {
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
      <S.Label htmlFor={inputName}>
        <S.LabelValue>
          <span>{text}</span>
          <input
            type={isPassword ? defaultType : type}
            spellCheck="false"
            autoComplete={type === 'email' ? 'on' : 'off'}
            name={inputName}
            id={inputName}
            ref={register && register({ required })}
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
    </S.Container>
  );
};

export default Input;
